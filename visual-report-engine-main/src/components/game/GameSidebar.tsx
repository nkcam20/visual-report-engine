import React from 'react';
import type { Move } from 'chess.js';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RotateCcw, RefreshCw, Loader2 } from 'lucide-react';
import type { Difficulty } from '@/types/chess';

interface Props {
  moveHistory: Move[];
  gameStatus: string;
  isThinking: boolean;
  turn: string;
  isCheck: boolean;
  difficulty: Difficulty;
  onDifficultyChange: (d: Difficulty) => void;
  onUndo: () => void;
  onReset: () => void;
}

const GameSidebar: React.FC<Props> = ({
  moveHistory, gameStatus, isThinking, turn, isCheck, difficulty,
  onDifficultyChange, onUndo, onReset,
}) => {
  const statusText = (() => {
    if (gameStatus === 'won') return '🎉 You win!';
    if (gameStatus === 'lost') return '😔 You lost!';
    if (gameStatus === 'draw') return '🤝 Draw!';
    if (gameStatus === 'stalemate') return '🤝 Stalemate!';
    if (isThinking) return '🤔 AI is thinking...';
    if (isCheck) return '⚠️ Check!';
    return turn === 'w' ? "White's turn" : "Black's turn";
  })();

  return (
    <div className="w-full lg:w-72 flex flex-col gap-4">
      {/* Status */}
      <div className="rounded-lg bg-card border border-border p-4 text-center">
        <p className="text-lg font-semibold">{statusText}</p>
        {isThinking && <Loader2 className="w-5 h-5 mx-auto mt-2 animate-spin text-muted-foreground" />}
      </div>

      {/* Controls */}
      <div className="rounded-lg bg-card border border-border p-4 space-y-3">
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1 block">Difficulty</label>
          <Select value={difficulty} onValueChange={v => onDifficultyChange(v as Difficulty)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onUndo} disabled={moveHistory.length < 2 || isThinking} className="flex-1">
            <RotateCcw className="w-4 h-4 mr-1" /> Undo
          </Button>
          <Button variant="outline" size="sm" onClick={onReset} disabled={isThinking} className="flex-1">
            <RefreshCw className="w-4 h-4 mr-1" /> New
          </Button>
        </div>
      </div>

      {/* Move History */}
      <div className="rounded-lg bg-card border border-border p-4 flex-1 min-h-0">
        <h3 className="text-sm font-semibold text-muted-foreground mb-2">Move History</h3>
        <div className="max-h-64 overflow-y-auto text-sm font-mono space-y-0.5">
          {moveHistory.length === 0 && <p className="text-muted-foreground text-xs">No moves yet</p>}
          {Array.from({ length: Math.ceil(moveHistory.length / 2) }, (_, i) => {
            const w = moveHistory[i * 2];
            const b = moveHistory[i * 2 + 1];
            return (
              <div key={i} className="flex gap-2">
                <span className="text-muted-foreground w-6">{i + 1}.</span>
                <span className="w-16">{w?.san}</span>
                <span className="w-16">{b?.san || ''}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameSidebar;
