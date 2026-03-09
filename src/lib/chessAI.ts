import { Chess } from 'chess.js';
import type { Difficulty } from '@/types/chess';

const PIECE_VALUES: Record<string, number> = {
  p: 100, n: 320, b: 330, r: 500, q: 900, k: 20000,
};

const POSITION_BONUS: Record<string, number[][]> = {
  p: [
    [0,0,0,0,0,0,0,0],
    [50,50,50,50,50,50,50,50],
    [10,10,20,30,30,20,10,10],
    [5,5,10,25,25,10,5,5],
    [0,0,0,20,20,0,0,0],
    [5,-5,-10,0,0,-10,-5,5],
    [5,10,10,-20,-20,10,10,5],
    [0,0,0,0,0,0,0,0],
  ],
  n: [
    [-50,-40,-30,-30,-30,-30,-40,-50],
    [-40,-20,0,0,0,0,-20,-40],
    [-30,0,10,15,15,10,0,-30],
    [-30,5,15,20,20,15,5,-30],
    [-30,0,15,20,20,15,0,-30],
    [-30,5,10,15,15,10,5,-30],
    [-40,-20,0,5,5,0,-20,-40],
    [-50,-40,-30,-30,-30,-30,-40,-50],
  ],
};

function evaluateBoard(game: Chess): number {
  let score = 0;
  const board = game.board();
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const piece = board[r][c];
      if (!piece) continue;
      let value = PIECE_VALUES[piece.type] || 0;
      const table = POSITION_BONUS[piece.type];
      if (table) {
        const row = piece.color === 'w' ? r : 7 - r;
        value += table[row][c];
      }
      score += piece.color === 'w' ? value : -value;
    }
  }
  return score;
}

function minimax(game: Chess, depth: number, alpha: number, beta: number, isMax: boolean): number {
  if (depth === 0 || game.isGameOver()) return evaluateBoard(game);
  const moves = game.moves();
  if (isMax) {
    let best = -Infinity;
    for (const move of moves) {
      game.move(move);
      best = Math.max(best, minimax(game, depth - 1, alpha, beta, false));
      game.undo();
      alpha = Math.max(alpha, best);
      if (beta <= alpha) break;
    }
    return best;
  } else {
    let best = Infinity;
    for (const move of moves) {
      game.move(move);
      best = Math.min(best, minimax(game, depth - 1, alpha, beta, true));
      game.undo();
      beta = Math.min(beta, best);
      if (beta <= alpha) break;
    }
    return best;
  }
}

const DEPTH_MAP: Record<Difficulty, number> = { easy: 1, medium: 2, hard: 3 };

export function getBestMove(fen: string, difficulty: Difficulty): string | null {
  const game = new Chess(fen);
  const moves = game.moves();
  if (moves.length === 0) return null;

  // Easy: 40% chance of random move
  if (difficulty === 'easy' && Math.random() < 0.4) {
    return moves[Math.floor(Math.random() * moves.length)];
  }

  const depth = DEPTH_MAP[difficulty];
  const isMax = game.turn() === 'w';
  let bestMove = moves[0];
  let bestVal = isMax ? -Infinity : Infinity;

  for (const move of moves) {
    game.move(move);
    const val = minimax(game, depth - 1, -Infinity, Infinity, !isMax);
    game.undo();
    if (isMax ? val > bestVal : val < bestVal) {
      bestVal = val;
      bestMove = move;
    }
  }
  return bestMove;
}
