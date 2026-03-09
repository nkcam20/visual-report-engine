import React from 'react';
import type { Square } from 'chess.js';
import { motion } from 'framer-motion';

const PIECE_UNICODE: Record<string, string> = {
  wp: '♙', wn: '♘', wb: '♗', wr: '♖', wq: '♕', wk: '♔',
  bp: '♟', bn: '♞', bb: '♝', br: '♜', bq: '♛', bk: '♚',
};

const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const RANKS = ['8', '7', '6', '5', '4', '3', '2', '1'];

interface Props {
  board: ReturnType<import('chess.js').Chess['board']>;
  selectedSquare: Square | null;
  validMoves: Square[];
  lastMove: { from: Square; to: Square } | null;
  isCheck: boolean;
  turn: string;
  onSquareClick: (square: Square) => void;
  flipped?: boolean;
}

const ChessBoard: React.FC<Props> = ({
  board, selectedSquare, validMoves, lastMove, isCheck, turn, onSquareClick, flipped = false,
}) => {
  const files = flipped ? [...FILES].reverse() : FILES;
  const ranks = flipped ? [...RANKS].reverse() : RANKS;

  return (
    <div className="inline-block rounded-lg overflow-hidden shadow-xl border-2 border-border">
      {ranks.map((rank, ri) => (
        <div key={rank} className="flex">
          {files.map((file, fi) => {
            const square = `${file}${rank}` as Square;
            const boardRow = flipped ? 7 - ri : ri;
            const boardCol = flipped ? 7 - fi : fi;
            const piece = board[boardRow]?.[boardCol];
            const isLight = (ri + fi) % 2 === 0;
            const isSelected = selectedSquare === square;
            const isValid = validMoves.includes(square);
            const isLastMove = lastMove && (lastMove.from === square || lastMove.to === square);
            const isKingInCheck = isCheck && piece?.type === 'k' && piece.color === turn;

            let bgClass = isLight
              ? 'bg-amber-100'
              : 'bg-amber-800';

            if (isSelected) bgClass = 'bg-sky-400';
            else if (isLastMove) bgClass = isLight ? 'bg-yellow-200' : 'bg-yellow-600';
            else if (isKingInCheck) bgClass = 'bg-red-400';

            return (
              <div
                key={square}
                className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center cursor-pointer select-none transition-colors ${bgClass}`}
                onClick={() => onSquareClick(square)}
              >
                {/* Coordinate labels */}
                {fi === 0 && (
                  <span className="absolute top-0.5 left-0.5 text-[10px] font-semibold opacity-50">
                    {rank}
                  </span>
                )}
                {ri === 7 && (
                  <span className="absolute bottom-0.5 right-0.5 text-[10px] font-semibold opacity-50">
                    {file}
                  </span>
                )}

                {/* Valid move indicator */}
                {isValid && !piece && (
                  <div className="w-3 h-3 rounded-full bg-foreground/20" />
                )}
                {isValid && piece && (
                  <div className="absolute inset-0 border-4 border-foreground/30 rounded-sm" />
                )}

                {/* Piece */}
                {piece && (
                  <motion.span
                    key={`${piece.color}${piece.type}${square}`}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className={`text-3xl sm:text-4xl md:text-5xl leading-none ${
                      piece.color === 'w' ? 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]' : 'drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]'
                    }`}
                  >
                    {PIECE_UNICODE[`${piece.color}${piece.type}`]}
                  </motion.span>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;
