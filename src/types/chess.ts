export type PieceColor = 'w' | 'b';
export type PieceType = 'p' | 'n' | 'b' | 'r' | 'q' | 'k';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface GameSettings {
  difficulty: Difficulty;
  playerColor: PieceColor;
}

export interface SavedGame {
  id: string;
  name: string;
  fen: string;
  pgn: string;
  difficulty: Difficulty;
  date: string;
  moveCount: number;
}
