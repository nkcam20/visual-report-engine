import React from 'react';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from '@/components/ui/dialog';

const PIECES: { type: 'q' | 'r' | 'b' | 'n'; label: string; icon: string }[] = [
  { type: 'q', label: 'Queen', icon: '♛' },
  { type: 'r', label: 'Rook', icon: '♜' },
  { type: 'b', label: 'Bishop', icon: '♝' },
  { type: 'n', label: 'Knight', icon: '♞' },
];

interface Props {
  open: boolean;
  onSelect: (piece: 'q' | 'r' | 'b' | 'n') => void;
}

const PromotionDialog: React.FC<Props> = ({ open, onSelect }) => (
  <Dialog open={open}>
    <DialogContent className="max-w-xs">
      <DialogHeader>
        <DialogTitle>Promote Pawn</DialogTitle>
      </DialogHeader>
      <div className="flex justify-center gap-3">
        {PIECES.map(p => (
          <button
            key={p.type}
            onClick={() => onSelect(p.type)}
            className="w-16 h-16 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center text-4xl transition-colors"
            title={p.label}
          >
            {p.icon}
          </button>
        ))}
      </div>
    </DialogContent>
  </Dialog>
);

export default PromotionDialog;
