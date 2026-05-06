import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useChessGame } from '@/hooks/useChessGame';
import ChessBoard from '@/components/game/ChessBoard';
import GameSidebar from '@/components/game/GameSidebar';
import PromotionDialog from '@/components/game/PromotionDialog';
import type { Difficulty } from '@/types/chess';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const TIME_PER_SIDE: Record<Difficulty, number> = { easy: 600, medium: 300, hard: 180 };

const downloadFile = (filename: string, content: string, mime: string) => {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

const Game: React.FC = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [whiteTime, setWhiteTime] = useState(TIME_PER_SIDE.medium);
  const [blackTime, setBlackTime] = useState(TIME_PER_SIDE.medium);
  const [timeoutSide, setTimeoutSide] = useState<'w' | 'b' | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const recordingRef = useRef<{ startedAt: number; events: Array<{ t: number; type: string; data: unknown }> } | null>(null);
  const prevMoveCount = useRef(0);

  const {
    board, selectedSquare, validMoves, lastMove, isThinking,
    moveHistory, gameStatus, promotionPending, turn, isCheck,
    handleSquareClick, handlePromotion, undoMove, resetGame, getPgn,
  } = useChessGame(difficulty, 'w');

  const effectiveStatus = timeoutSide ? `timeout-${timeoutSide}` : gameStatus;
  const gameOver = effectiveStatus !== 'playing';

  useEffect(() => {
    if (gameOver) return;
    const id = setInterval(() => {
      if (turn === 'w') {
        setWhiteTime(t => {
          if (t <= 1) { setTimeoutSide('w'); return 0; }
          return t - 1;
        });
      } else {
        setBlackTime(t => {
          if (t <= 1) { setTimeoutSide('b'); return 0; }
          return t - 1;
        });
      }
    }, 1000);
    return () => clearInterval(id);
  }, [turn, gameOver]);

  // Capture moves into recording
  useEffect(() => {
    if (!isRecording || !recordingRef.current) {
      prevMoveCount.current = moveHistory.length;
      return;
    }
    if (moveHistory.length > prevMoveCount.current) {
      for (let i = prevMoveCount.current; i < moveHistory.length; i++) {
        const m = moveHistory[i];
        recordingRef.current.events.push({
          t: Date.now() - recordingRef.current.startedAt,
          type: 'move',
          data: { san: m.san, from: m.from, to: m.to, color: m.color, piece: m.piece, fenAfter: m.after },
        });
      }
      prevMoveCount.current = moveHistory.length;
    }
  }, [moveHistory, isRecording]);

  const handleDifficultyChange = useCallback((d: Difficulty) => {
    setDifficulty(d);
  }, []);

  const handleReset = useCallback(() => {
    resetGame();
    setWhiteTime(TIME_PER_SIDE[difficulty]);
    setBlackTime(TIME_PER_SIDE[difficulty]);
    setTimeoutSide(null);
    prevMoveCount.current = 0;
    if (isRecording) {
      recordingRef.current = { startedAt: Date.now(), events: [] };
    }
  }, [resetGame, difficulty, isRecording]);

  const handleToggleRecording = useCallback(() => {
    if (isRecording) {
      setIsRecording(false);
      toast({ title: 'Recording stopped', description: `${recordingRef.current?.events.length ?? 0} moves captured. You can now download.` });
    } else {
      recordingRef.current = { startedAt: Date.now(), events: [] };
      prevMoveCount.current = moveHistory.length;
      // Snapshot current moves as starting state
      moveHistory.forEach((m, i) => {
        recordingRef.current!.events.push({
          t: 0, type: 'move',
          data: { san: m.san, from: m.from, to: m.to, color: m.color, piece: m.piece, fenAfter: m.after, index: i },
        });
      });
      setIsRecording(true);
      toast({ title: 'Recording started', description: 'All subsequent moves will be captured.' });
    }
  }, [isRecording, moveHistory]);

  const handleDownloadPgn = useCallback(() => {
    const ts = new Date().toISOString().replace(/[:.]/g, '-');
    const headers = [
      `[Event "AI Chess Game"]`,
      `[Site "ChessMaster Web"]`,
      `[Date "${new Date().toISOString().slice(0, 10).replace(/-/g, '.')}"]`,
      `[White "Player"]`,
      `[Black "AI (${difficulty})"]`,
      `[Result "${effectiveStatus === 'won' ? '1-0' : effectiveStatus === 'lost' ? '0-1' : effectiveStatus.startsWith('timeout') ? (timeoutSide === 'w' ? '0-1' : '1-0') : effectiveStatus === 'playing' ? '*' : '1/2-1/2'}"]`,
      `[TimeControl "${TIME_PER_SIDE[difficulty]}"]`,
      '',
    ].join('\n');
    downloadFile(`chess-game-${ts}.pgn`, headers + getPgn(), 'application/x-chess-pgn');
  }, [difficulty, effectiveStatus, timeoutSide, getPgn]);

  const handleDownloadJson = useCallback(() => {
    const ts = new Date().toISOString().replace(/[:.]/g, '-');
    const data = {
      meta: {
        date: new Date().toISOString(),
        difficulty,
        timeControl: TIME_PER_SIDE[difficulty],
        result: effectiveStatus,
        whiteTimeRemaining: whiteTime,
        blackTimeRemaining: blackTime,
      },
      pgn: getPgn(),
      moves: moveHistory.map(m => ({ san: m.san, from: m.from, to: m.to, color: m.color, piece: m.piece, fenAfter: m.after })),
      recording: recordingRef.current ?? null,
    };
    downloadFile(`chess-game-${ts}.json`, JSON.stringify(data, null, 2), 'application/json');
  }, [difficulty, effectiveStatus, whiteTime, blackTime, moveHistory, getPgn]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border px-4 py-3 flex items-center justify-between bg-card">
        <h1 className="text-xl font-bold" style={{ fontFamily: "'Merriweather', serif" }}>
          ♚ AI Chess Game
        </h1>
        <Link to="/">
          <Button variant="outline" size="sm">
            <FileText className="w-4 h-4 mr-1" /> View Report
          </Button>
        </Link>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 p-4 lg:p-8">
        <ChessBoard
          board={board}
          selectedSquare={selectedSquare}
          validMoves={validMoves}
          lastMove={lastMove}
          isCheck={isCheck}
          turn={turn}
          onSquareClick={handleSquareClick}
        />
        <GameSidebar
          moveHistory={moveHistory}
          gameStatus={effectiveStatus}
          isThinking={isThinking}
          turn={turn}
          isCheck={isCheck}
          difficulty={difficulty}
          whiteTime={whiteTime}
          blackTime={blackTime}
          isRecording={isRecording}
          onToggleRecording={handleToggleRecording}
          onDownloadPgn={handleDownloadPgn}
          onDownloadJson={handleDownloadJson}
          onDifficultyChange={handleDifficultyChange}
          onUndo={undoMove}
          onReset={handleReset}
        />
      </main>

      <PromotionDialog
        open={!!promotionPending}
        onSelect={handlePromotion}
      />
    </div>
  );
};

export default Game;
