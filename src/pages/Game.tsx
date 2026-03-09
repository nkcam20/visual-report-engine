import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useChessGame } from '@/hooks/useChessGame';
import ChessBoard from '@/components/game/ChessBoard';
import GameSidebar from '@/components/game/GameSidebar';
import PromotionDialog from '@/components/game/PromotionDialog';
import type { Difficulty } from '@/types/chess';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const Game: React.FC = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');

  const {
    board, selectedSquare, validMoves, lastMove, isThinking,
    moveHistory, gameStatus, promotionPending, turn, isCheck,
    handleSquareClick, handlePromotion, undoMove, resetGame,
  } = useChessGame(difficulty, 'w');

  const handleDifficultyChange = useCallback((d: Difficulty) => {
    setDifficulty(d);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
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

      {/* Game Area */}
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
          gameStatus={gameStatus}
          isThinking={isThinking}
          turn={turn}
          isCheck={isCheck}
          difficulty={difficulty}
          onDifficultyChange={handleDifficultyChange}
          onUndo={undoMove}
          onReset={resetGame}
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
