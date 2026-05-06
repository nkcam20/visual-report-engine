import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useChessGame } from '@/hooks/useChessGame';
import ChessBoard from '@/components/game/ChessBoard';
import GameSidebar from '@/components/game/GameSidebar';
import PromotionDialog from '@/components/game/PromotionDialog';
import type { Difficulty } from '@/types/chess';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const TIME_PER_SIDE: Record<Difficulty, number> = { easy: 600, medium: 300, hard: 180 };

const Game: React.FC = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [whiteTime, setWhiteTime] = useState(TIME_PER_SIDE.medium);
  const [blackTime, setBlackTime] = useState(TIME_PER_SIDE.medium);
  const [timeoutSide, setTimeoutSide] = useState<'w' | 'b' | null>(null);

  const {
    board, selectedSquare, validMoves, lastMove, isThinking,
    moveHistory, gameStatus, promotionPending, turn, isCheck,
    handleSquareClick, handlePromotion, undoMove, resetGame,
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

  const handleDifficultyChange = useCallback((d: Difficulty) => {
    setDifficulty(d);
  }, []);

  const handleReset = useCallback(() => {
    resetGame();
    setWhiteTime(TIME_PER_SIDE[difficulty]);
    setBlackTime(TIME_PER_SIDE[difficulty]);
    setTimeoutSide(null);
  }, [resetGame, difficulty]);

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
