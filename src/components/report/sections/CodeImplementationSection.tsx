import React from 'react';

const CodeBlock: React.FC<{ title: string; code: string }> = ({ title, code }) => (
  <div className="mb-6">
    <h4 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">{title}</h4>
    <div className="report-code-block text-xs overflow-x-auto">
      <pre className="whitespace-pre">{code}</pre>
    </div>
  </div>
);

const CodeImplementationSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        This section presents the complete source code implementation of the AI-Powered Chess Game application, organized by functionality and component hierarchy.
      </p>

      {/* 12.1 Project Configuration */}
      <h3 className="report-subsection-title">12.1 Project Configuration Files</h3>
      
      <CodeBlock
        title="package.json"
        code={`{
  "name": "ai-chess-game",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "vitest"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "chess.js": "^1.0.0-beta.8",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.3.0",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.0",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4",
    "typescript": "^5.4.5",
    "vite": "^5.3.0",
    "vitest": "^1.6.0"
  }
}`}
      />

      <CodeBlock
        title="vite.config.ts"
        code={`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});`}
      />

      <CodeBlock
        title="tailwind.config.ts"
        code={`import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        board: {
          light: '#F0D9B5',
          dark: '#B58863',
          selected: '#829769',
          valid: '#646F40',
          lastMove: '#CDD26A',
          check: '#E74C3C',
        },
      },
      fontFamily: {
        chess: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;`}
      />

      {/* 12.2 Type Definitions */}
      <h3 className="report-subsection-title">12.2 Type Definitions</h3>
      
      <CodeBlock
        title="src/types/chess.ts"
        code={`import { Chess, Square, Move, Color, PieceSymbol } from 'chess.js';

// Game state interface
export interface GameState {
  board: (Piece | null)[][];
  turn: Color;
  inCheck: boolean;
  isCheckmate: boolean;
  isStalemate: boolean;
  isDraw: boolean;
  fen: string;
  pgn: string;
  history: Move[];
  selectedSquare: Square | null;
  validMoves: Square[];
  lastMove: { from: Square; to: Square } | null;
}

// Piece interface
export interface Piece {
  type: PieceSymbol;
  color: Color;
}

// Difficulty levels
export type Difficulty = 'easy' | 'medium' | 'hard';

// Difficulty configuration
export interface DifficultyConfig {
  skillLevel: number;
  searchDepth: number;
  thinkingTime: number;
}

// Game settings
export interface GameSettings {
  playerColor: Color;
  difficulty: Difficulty;
  soundEnabled: boolean;
  showValidMoves: boolean;
  showLastMove: boolean;
  autoQueen: boolean;
}

// Saved game structure
export interface SavedGame {
  id: string;
  name: string;
  fen: string;
  pgn: string;
  difficulty: Difficulty;
  playerColor: Color;
  moveCount: number;
  createdAt: string;
  updatedAt: string;
}

// Move notation types
export interface MoveNotation {
  san: string;
  from: Square;
  to: Square;
  piece: PieceSymbol;
  captured?: PieceSymbol;
  promotion?: PieceSymbol;
  flags: string;
}`}
      />

      {/* 12.3 Custom Hooks */}
      <h3 className="report-subsection-title">12.3 Custom Hooks</h3>
      
      <CodeBlock
        title="src/hooks/useChessGame.ts"
        code={`import { useState, useCallback, useRef, useEffect } from 'react';
import { Chess, Square, Move, Color } from 'chess.js';
import { GameState, GameSettings } from '@/types/chess';

const getInitialState = (chess: Chess): GameState => ({
  board: chess.board(),
  turn: chess.turn(),
  inCheck: chess.isCheck(),
  isCheckmate: chess.isCheckmate(),
  isStalemate: chess.isStalemate(),
  isDraw: chess.isDraw(),
  fen: chess.fen(),
  pgn: chess.pgn(),
  history: chess.history({ verbose: true }),
  selectedSquare: null,
  validMoves: [],
  lastMove: null,
});

export const useChessGame = (settings: GameSettings) => {
  const chessRef = useRef(new Chess());
  const [gameState, setGameState] = useState<GameState>(() => 
    getInitialState(chessRef.current)
  );

  const updateGameState = useCallback((lastMove?: { from: Square; to: Square }) => {
    const chess = chessRef.current;
    setGameState({
      board: chess.board(),
      turn: chess.turn(),
      inCheck: chess.isCheck(),
      isCheckmate: chess.isCheckmate(),
      isStalemate: chess.isStalemate(),
      isDraw: chess.isDraw(),
      fen: chess.fen(),
      pgn: chess.pgn(),
      history: chess.history({ verbose: true }),
      selectedSquare: null,
      validMoves: [],
      lastMove: lastMove || null,
    });
  }, []);

  const selectSquare = useCallback((square: Square) => {
    const chess = chessRef.current;
    const piece = chess.get(square);

    if (piece && piece.color === chess.turn()) {
      const moves = chess.moves({ square, verbose: true });
      setGameState(prev => ({
        ...prev,
        selectedSquare: square,
        validMoves: moves.map(m => m.to),
      }));
      return true;
    }
    return false;
  }, []);

  const makeMove = useCallback((
    from: Square, 
    to: Square, 
    promotion?: string
  ): Move | null => {
    const chess = chessRef.current;
    
    try {
      const move = chess.move({ 
        from, 
        to, 
        promotion: promotion || (settings.autoQueen ? 'q' : undefined) 
      });
      
      if (move) {
        updateGameState({ from, to });
        return move;
      }
    } catch (e) {
      console.error('Invalid move:', e);
    }
    return null;
  }, [settings.autoQueen, updateGameState]);

  const resetGame = useCallback(() => {
    chessRef.current = new Chess();
    updateGameState();
  }, [updateGameState]);

  const undoMove = useCallback(() => {
    const chess = chessRef.current;
    chess.undo(); // Undo AI move
    chess.undo(); // Undo player move
    updateGameState();
  }, [updateGameState]);

  const loadPosition = useCallback((fen: string) => {
    try {
      chessRef.current.load(fen);
      updateGameState();
      return true;
    } catch {
      return false;
    }
  }, [updateGameState]);

  const loadPgn = useCallback((pgn: string) => {
    try {
      chessRef.current.loadPgn(pgn);
      updateGameState();
      return true;
    } catch {
      return false;
    }
  }, [updateGameState]);

  return {
    gameState,
    chess: chessRef.current,
    makeMove,
    selectSquare,
    resetGame,
    undoMove,
    loadPosition,
    loadPgn,
  };
};`}
      />

      <CodeBlock
        title="src/hooks/useStockfish.ts"
        code={`import { useState, useEffect, useRef, useCallback } from 'react';
import { Difficulty, DifficultyConfig } from '@/types/chess';

const DIFFICULTY_CONFIGS: Record<Difficulty, DifficultyConfig> = {
  easy: { skillLevel: 3, searchDepth: 5, thinkingTime: 100 },
  medium: { skillLevel: 10, searchDepth: 12, thinkingTime: 500 },
  hard: { skillLevel: 20, searchDepth: 20, thinkingTime: 2000 },
};

interface UseStockfishReturn {
  isReady: boolean;
  isThinking: boolean;
  getBestMove: (fen: string) => Promise<string | null>;
  stopThinking: () => void;
  setDifficulty: (level: Difficulty) => void;
}

export const useStockfish = (): UseStockfishReturn => {
  const workerRef = useRef<Worker | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');

  useEffect(() => {
    // Initialize Stockfish Web Worker
    const worker = new Worker(
      'https://cdn.jsdelivr.net/npm/stockfish.js@10.0.2/stockfish.js'
    );

    worker.onmessage = (e: MessageEvent) => {
      const message = e.data as string;
      
      if (message === 'uciok') {
        worker.postMessage('isready');
      } else if (message === 'readyok') {
        setIsReady(true);
      }
    };

    worker.postMessage('uci');
    workerRef.current = worker;

    return () => {
      worker.postMessage('quit');
      worker.terminate();
    };
  }, []);

  const getBestMove = useCallback((fen: string): Promise<string | null> => {
    return new Promise((resolve) => {
      const worker = workerRef.current;
      
      if (!worker || !isReady) {
        resolve(null);
        return;
      }

      setIsThinking(true);
      const config = DIFFICULTY_CONFIGS[difficulty];

      const handleMessage = (e: MessageEvent) => {
        const message = e.data as string;
        
        if (message.startsWith('bestmove')) {
          const parts = message.split(' ');
          const move = parts[1];
          
          worker.removeEventListener('message', handleMessage);
          setIsThinking(false);
          resolve(move !== '(none)' ? move : null);
        }
      };

      worker.addEventListener('message', handleMessage);
      
      // Configure engine
      worker.postMessage(\`setoption name Skill Level value \${config.skillLevel}\`);
      worker.postMessage(\`position fen \${fen}\`);
      worker.postMessage(\`go depth \${config.searchDepth} movetime \${config.thinkingTime}\`);
    });
  }, [isReady, difficulty]);

  const stopThinking = useCallback(() => {
    workerRef.current?.postMessage('stop');
    setIsThinking(false);
  }, []);

  return { isReady, isThinking, getBestMove, stopThinking, setDifficulty };
};`}
      />

      {/* 12.4 Components */}
      <h3 className="report-subsection-title">12.4 React Components</h3>
      
      <CodeBlock
        title="src/components/ChessBoard.tsx"
        code={`import React, { useMemo } from 'react';
import { Square, Color, PieceSymbol } from 'chess.js';
import { GameState } from '@/types/chess';
import { cn } from '@/lib/utils';

interface ChessBoardProps {
  gameState: GameState;
  playerColor: Color;
  onSquareClick: (square: Square) => void;
  isThinking: boolean;
  showValidMoves: boolean;
  showLastMove: boolean;
}

const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const;
const RANKS = ['8', '7', '6', '5', '4', '3', '2', '1'] as const;

const PIECE_SYMBOLS: Record<PieceSymbol, Record<Color, string>> = {
  k: { w: '♔', b: '♚' },
  q: { w: '♕', b: '♛' },
  r: { w: '♖', b: '♜' },
  b: { w: '♗', b: '♝' },
  n: { w: '♘', b: '♞' },
  p: { w: '♙', b: '♟' },
};

export const ChessBoard: React.FC<ChessBoardProps> = ({
  gameState,
  playerColor,
  onSquareClick,
  isThinking,
  showValidMoves,
  showLastMove,
}) => {
  const { board, selectedSquare, validMoves, lastMove, inCheck, turn } = gameState;

  // Flip board for black player
  const ranks = playerColor === 'w' ? RANKS : [...RANKS].reverse();
  const files = playerColor === 'w' ? FILES : [...FILES].reverse();

  const getSquareColor = (rankIdx: number, fileIdx: number): 'light' | 'dark' => {
    return (rankIdx + fileIdx) % 2 === 0 ? 'light' : 'dark';
  };

  return (
    <div className={cn(
      "inline-block border-4 border-board-dark rounded-lg overflow-hidden shadow-2xl",
      isThinking && "opacity-75 pointer-events-none"
    )}>
      {ranks.map((rank, rankIndex) => (
        <div key={rank} className="flex">
          {files.map((file, fileIndex) => {
            const square = \`\${file}\${rank}\` as Square;
            const actualRankIdx = playerColor === 'w' ? rankIndex : 7 - rankIndex;
            const actualFileIdx = playerColor === 'w' ? fileIndex : 7 - fileIndex;
            const piece = board[actualRankIdx][actualFileIdx];
            
            const isLight = getSquareColor(rankIndex, fileIndex) === 'light';
            const isSelected = selectedSquare === square;
            const isValidMove = showValidMoves && validMoves.includes(square);
            const isLastMoveSquare = showLastMove && 
              (lastMove?.from === square || lastMove?.to === square);
            const isKingInCheck = inCheck && 
              piece?.type === 'k' && 
              piece?.color === turn;

            return (
              <div
                key={square}
                onClick={() => onSquareClick(square)}
                className={cn(
                  "w-14 h-14 md:w-16 md:h-16 flex items-center justify-center",
                  "text-4xl md:text-5xl cursor-pointer relative transition-all duration-150",
                  isLight ? "bg-board-light" : "bg-board-dark",
                  isSelected && "ring-4 ring-board-selected ring-inset",
                  isLastMoveSquare && "bg-board-lastMove",
                  isKingInCheck && "bg-board-check animate-pulse"
                )}
              >
                {/* Valid move indicator */}
                {isValidMove && (
                  <div className={cn(
                    "absolute rounded-full opacity-60",
                    piece ? "w-full h-full border-4 border-board-valid" 
                          : "w-4 h-4 bg-board-valid"
                  )} />
                )}
                
                {/* Piece */}
                {piece && (
                  <span className={cn(
                    "relative z-10 select-none",
                    piece.color === 'w' 
                      ? "text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" 
                      : "text-gray-900 drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]"
                  )}>
                    {PIECE_SYMBOLS[piece.type][piece.color]}
                  </span>
                )}

                {/* Square notation (corner squares) */}
                {fileIndex === 0 && (
                  <span className="absolute top-0.5 left-1 text-xs font-bold opacity-50">
                    {rank}
                  </span>
                )}
                {rankIndex === 7 && (
                  <span className="absolute bottom-0.5 right-1 text-xs font-bold opacity-50">
                    {file}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};`}
      />

      <CodeBlock
        title="src/components/GameSidebar.tsx"
        code={`import React from 'react';
import { GameState, Difficulty } from '@/types/chess';
import { Color, Move, PieceSymbol } from 'chess.js';

interface GameSidebarProps {
  gameState: GameState;
  difficulty: Difficulty;
  isThinking: boolean;
  onNewGame: () => void;
  onUndo: () => void;
  onSave: () => void;
  onLoad: () => void;
  onDifficultyChange: (d: Difficulty) => void;
}

const PIECE_VALUES: Record<PieceSymbol, number> = {
  p: 1, n: 3, b: 3, r: 5, q: 9, k: 0
};

export const GameSidebar: React.FC<GameSidebarProps> = ({
  gameState,
  difficulty,
  isThinking,
  onNewGame,
  onUndo,
  onSave,
  onLoad,
  onDifficultyChange,
}) => {
  const { turn, inCheck, isCheckmate, isStalemate, isDraw, history } = gameState;

  // Calculate captured pieces
  const getCapturedPieces = (color: Color): PieceSymbol[] => {
    return history
      .filter(move => move.captured && move.color !== color)
      .map(move => move.captured as PieceSymbol);
  };

  // Format move history
  const formatHistory = (moves: Move[]): string[] => {
    const formatted: string[] = [];
    for (let i = 0; i < moves.length; i += 2) {
      const moveNum = Math.floor(i / 2) + 1;
      const white = moves[i]?.san || '';
      const black = moves[i + 1]?.san || '';
      formatted.push(\`\${moveNum}. \${white} \${black}\`.trim());
    }
    return formatted;
  };

  const getStatusText = (): string => {
    if (isCheckmate) return \`Checkmate! \${turn === 'w' ? 'Black' : 'White'} wins!\`;
    if (isStalemate) return 'Stalemate - Draw!';
    if (isDraw) return 'Draw!';
    if (inCheck) return \`\${turn === 'w' ? 'White' : 'Black'} is in check!\`;
    return \`\${turn === 'w' ? 'White' : 'Black'} to move\`;
  };

  return (
    <div className="w-72 bg-gray-800 text-white p-4 rounded-lg space-y-4">
      {/* Game Status */}
      <div className="text-center p-3 bg-gray-700 rounded">
        <p className="font-bold text-lg">{getStatusText()}</p>
        {isThinking && (
          <p className="text-sm text-blue-400 animate-pulse mt-1">
            AI is thinking...
          </p>
        )}
      </div>

      {/* Difficulty Selector */}
      <div>
        <label className="block text-sm font-medium mb-2">Difficulty</label>
        <select
          value={difficulty}
          onChange={(e) => onDifficultyChange(e.target.value as Difficulty)}
          className="w-full p-2 bg-gray-700 rounded"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {/* Captured Pieces */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-700 p-2 rounded">
          <p className="text-xs text-gray-400 mb-1">White captured:</p>
          <p className="text-lg">{getCapturedPieces('w').map(p => 
            PIECE_SYMBOLS[p]['b']).join('')}</p>
        </div>
        <div className="bg-gray-700 p-2 rounded">
          <p className="text-xs text-gray-400 mb-1">Black captured:</p>
          <p className="text-lg">{getCapturedPieces('b').map(p => 
            PIECE_SYMBOLS[p]['w']).join('')}</p>
        </div>
      </div>

      {/* Move History */}
      <div className="bg-gray-700 rounded p-2 max-h-48 overflow-y-auto">
        <p className="text-xs text-gray-400 mb-2">Move History</p>
        <div className="text-sm font-mono space-y-0.5">
          {formatHistory(history).map((move, i) => (
            <div key={i}>{move}</div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-2">
        <button onClick={onNewGame} className="btn-primary">New Game</button>
        <button onClick={onUndo} disabled={history.length < 2} className="btn-secondary">
          Undo
        </button>
        <button onClick={onSave} className="btn-secondary">Save</button>
        <button onClick={onLoad} className="btn-secondary">Load</button>
      </div>
    </div>
  );
};

const PIECE_SYMBOLS: Record<PieceSymbol, Record<Color, string>> = {
  k: { w: '♔', b: '♚' }, q: { w: '♕', b: '♛' }, r: { w: '♖', b: '♜' },
  b: { w: '♗', b: '♝' }, n: { w: '♘', b: '♞' }, p: { w: '♙', b: '♟' },
};`}
      />

      <CodeBlock
        title="src/components/PromotionDialog.tsx"
        code={`import React from 'react';
import { Color, PieceSymbol } from 'chess.js';

interface PromotionDialogProps {
  color: Color;
  onSelect: (piece: PieceSymbol) => void;
  onCancel: () => void;
}

const PROMOTION_PIECES: PieceSymbol[] = ['q', 'r', 'b', 'n'];

const PIECE_SYMBOLS: Record<PieceSymbol, Record<Color, string>> = {
  q: { w: '♕', b: '♛' },
  r: { w: '♖', b: '♜' },
  b: { w: '♗', b: '♝' },
  n: { w: '♘', b: '♞' },
  k: { w: '♔', b: '♚' },
  p: { w: '♙', b: '♟' },
};

const PIECE_NAMES: Record<PieceSymbol, string> = {
  q: 'Queen', r: 'Rook', b: 'Bishop', n: 'Knight', k: 'King', p: 'Pawn'
};

export const PromotionDialog: React.FC<PromotionDialogProps> = ({
  color,
  onSelect,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-6">
        <h3 className="text-lg font-bold text-center mb-4 text-gray-800">
          Promote Pawn
        </h3>
        
        <div className="flex gap-3">
          {PROMOTION_PIECES.map((piece) => (
            <button
              key={piece}
              onClick={() => onSelect(piece)}
              className="w-16 h-16 flex items-center justify-center text-5xl
                         bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors
                         border-2 border-transparent hover:border-blue-400"
              title={PIECE_NAMES[piece]}
            >
              {PIECE_SYMBOLS[piece][color]}
            </button>
          ))}
        </div>
        
        <button
          onClick={onCancel}
          className="mt-4 w-full py-2 text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};`}
      />

      {/* 12.5 Utilities */}
      <h3 className="report-subsection-title">12.5 Utility Functions</h3>
      
      <CodeBlock
        title="src/lib/gameStorage.ts"
        code={`import { SavedGame, Difficulty } from '@/types/chess';
import { Color } from 'chess.js';

const STORAGE_KEY = 'chess-game-saves';
const MAX_SAVES = 10;

export const saveGame = (
  name: string,
  fen: string,
  pgn: string,
  difficulty: Difficulty,
  playerColor: Color,
  moveCount: number
): SavedGame => {
  const saves = getSavedGames();
  
  const newSave: SavedGame = {
    id: crypto.randomUUID(),
    name: name || \`Game \${saves.length + 1}\`,
    fen,
    pgn,
    difficulty,
    playerColor,
    moveCount,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  // Keep only last MAX_SAVES games
  const updatedSaves = [newSave, ...saves].slice(0, MAX_SAVES);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSaves));
  
  return newSave;
};

export const getSavedGames = (): SavedGame[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const loadGame = (id: string): SavedGame | null => {
  const saves = getSavedGames();
  return saves.find(s => s.id === id) || null;
};

export const deleteGame = (id: string): boolean => {
  const saves = getSavedGames();
  const filtered = saves.filter(s => s.id !== id);
  
  if (filtered.length !== saves.length) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  }
  return false;
};

export const updateGame = (
  id: string, 
  fen: string, 
  pgn: string, 
  moveCount: number
): boolean => {
  const saves = getSavedGames();
  const index = saves.findIndex(s => s.id === id);
  
  if (index !== -1) {
    saves[index] = {
      ...saves[index],
      fen,
      pgn,
      moveCount,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saves));
    return true;
  }
  return false;
};`}
      />

      <CodeBlock
        title="src/lib/utils.ts"
        code={`import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Square } from 'chess.js';

// Tailwind class merger utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert algebraic notation to board coordinates
export function squareToCoords(square: Square): [number, number] {
  const file = square.charCodeAt(0) - 'a'.charCodeAt(0);
  const rank = 8 - parseInt(square[1]);
  return [rank, file];
}

// Convert board coordinates to algebraic notation
export function coordsToSquare(rank: number, file: number): Square {
  const fileChar = String.fromCharCode('a'.charCodeAt(0) + file);
  const rankNum = 8 - rank;
  return \`\${fileChar}\${rankNum}\` as Square;
}

// Check if move is a pawn promotion
export function isPromotion(from: Square, to: Square, piece: string): boolean {
  if (piece.toLowerCase() !== 'p') return false;
  const toRank = parseInt(to[1]);
  return toRank === 1 || toRank === 8;
}

// Parse UCI move notation (e.g., "e2e4" -> { from: "e2", to: "e4" })
export function parseUciMove(uci: string): { from: Square; to: Square; promotion?: string } {
  return {
    from: uci.slice(0, 2) as Square,
    to: uci.slice(2, 4) as Square,
    promotion: uci.length > 4 ? uci[4] : undefined,
  };
}

// Format time for display (seconds -> MM:SS)
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return \`\${mins}:\${secs.toString().padStart(2, '0')}\`;
}`}
      />

      {/* 12.6 Main App */}
      <h3 className="report-subsection-title">12.6 Main Application</h3>
      
      <CodeBlock
        title="src/App.tsx"
        code={`import React, { useState, useCallback, useEffect } from 'react';
import { Square, Color } from 'chess.js';
import { ChessBoard } from '@/components/ChessBoard';
import { GameSidebar } from '@/components/GameSidebar';
import { PromotionDialog } from '@/components/PromotionDialog';
import { useChessGame } from '@/hooks/useChessGame';
import { useStockfish } from '@/hooks/useStockfish';
import { Difficulty, GameSettings } from '@/types/chess';
import { saveGame, getSavedGames, loadGame } from '@/lib/gameStorage';
import { parseUciMove, isPromotion } from '@/lib/utils';

const DEFAULT_SETTINGS: GameSettings = {
  playerColor: 'w',
  difficulty: 'medium',
  soundEnabled: true,
  showValidMoves: true,
  showLastMove: true,
  autoQueen: false,
};

export default function App() {
  const [settings, setSettings] = useState<GameSettings>(DEFAULT_SETTINGS);
  const [pendingPromotion, setPendingPromotion] = useState<{
    from: Square;
    to: Square;
  } | null>(null);

  const { gameState, chess, makeMove, selectSquare, resetGame, undoMove, loadPosition } = 
    useChessGame(settings);
  const { isReady, isThinking, getBestMove, setDifficulty } = useStockfish();

  // AI move logic
  useEffect(() => {
    const { turn, isCheckmate, isStalemate, isDraw } = gameState;
    
    if (turn !== settings.playerColor && !isCheckmate && !isStalemate && !isDraw && isReady) {
      const makeAIMove = async () => {
        const bestMove = await getBestMove(gameState.fen);
        
        if (bestMove) {
          const { from, to, promotion } = parseUciMove(bestMove);
          makeMove(from, to, promotion);
        }
      };
      
      // Small delay for better UX
      const timeout = setTimeout(makeAIMove, 300);
      return () => clearTimeout(timeout);
    }
  }, [gameState.turn, gameState.fen, settings.playerColor, isReady, getBestMove, makeMove]);

  const handleSquareClick = useCallback((square: Square) => {
    const { selectedSquare, validMoves, turn } = gameState;

    // Not player's turn
    if (turn !== settings.playerColor) return;

    // If a square is selected and this is a valid move
    if (selectedSquare && validMoves.includes(square)) {
      const piece = chess.get(selectedSquare);
      
      // Check for pawn promotion
      if (piece && isPromotion(selectedSquare, square, piece.type)) {
        setPendingPromotion({ from: selectedSquare, to: square });
      } else {
        makeMove(selectedSquare, square);
      }
      return;
    }

    // Select new square
    selectSquare(square);
  }, [gameState, settings.playerColor, chess, selectSquare, makeMove]);

  const handlePromotion = useCallback((piece: string) => {
    if (pendingPromotion) {
      makeMove(pendingPromotion.from, pendingPromotion.to, piece);
      setPendingPromotion(null);
    }
  }, [pendingPromotion, makeMove]);

  const handleDifficultyChange = useCallback((difficulty: Difficulty) => {
    setSettings(prev => ({ ...prev, difficulty }));
    setDifficulty(difficulty);
  }, [setDifficulty]);

  const handleSave = useCallback(() => {
    const name = prompt('Enter save name:');
    if (name) {
      saveGame(
        name,
        gameState.fen,
        gameState.pgn,
        settings.difficulty,
        settings.playerColor,
        gameState.history.length
      );
    }
  }, [gameState, settings]);

  const handleLoad = useCallback(() => {
    const saves = getSavedGames();
    // Show load dialog (simplified)
    const id = prompt(\`Enter save ID:\\n\${saves.map(s => \`\${s.id}: \${s.name}\`).join('\\n')}\`);
    if (id) {
      const save = loadGame(id);
      if (save) {
        loadPosition(save.fen);
        handleDifficultyChange(save.difficulty);
      }
    }
  }, [loadPosition, handleDifficultyChange]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 
                    flex items-center justify-center p-4">
      <div className="flex gap-8 items-start">
        <ChessBoard
          gameState={gameState}
          playerColor={settings.playerColor}
          onSquareClick={handleSquareClick}
          isThinking={isThinking}
          showValidMoves={settings.showValidMoves}
          showLastMove={settings.showLastMove}
        />
        
        <GameSidebar
          gameState={gameState}
          difficulty={settings.difficulty}
          isThinking={isThinking}
          onNewGame={resetGame}
          onUndo={undoMove}
          onSave={handleSave}
          onLoad={handleLoad}
          onDifficultyChange={handleDifficultyChange}
        />
      </div>

      {pendingPromotion && (
        <PromotionDialog
          color={settings.playerColor}
          onSelect={handlePromotion}
          onCancel={() => setPendingPromotion(null)}
        />
      )}
    </div>
  );
}`}
      />

      {/* 12.7 Entry Point */}
      <h3 className="report-subsection-title">12.7 Application Entry Point</h3>
      
      <CodeBlock
        title="src/main.tsx"
        code={`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}
      />

      <CodeBlock
        title="index.html"
        code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/chess-icon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="AI-Powered Chess Game with Stockfish Engine" />
    <title>AI Chess Game</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`}
      />

      <div className="report-info-box mt-6">
        <p className="text-sm font-semibold mb-2">📁 Complete Source Code Structure:</p>
        <pre className="text-xs font-mono whitespace-pre">{`src/
├── components/
│   ├── ChessBoard.tsx      # 8×8 board with piece rendering
│   ├── GameSidebar.tsx     # Game controls & status
│   └── PromotionDialog.tsx # Pawn promotion modal
├── hooks/
│   ├── useChessGame.ts     # Game state management
│   └── useStockfish.ts     # AI engine integration
├── lib/
│   ├── gameStorage.ts      # LocalStorage persistence
│   └── utils.ts            # Helper functions
├── types/
│   └── chess.ts            # TypeScript interfaces
├── App.tsx                 # Main application
├── main.tsx                # Entry point
└── index.css               # Tailwind styles`}</pre>
      </div>
    </>
  );
};

export default CodeImplementationSection;
