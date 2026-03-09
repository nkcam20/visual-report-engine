import React from 'react';

const CodeImplementationSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        This section presents key code snippets from the application, demonstrating the implementation of core functionality.
      </p>

      <h3 className="report-subsection-title">12.1 ChessBoard Component (Excerpt)</h3>
      <div className="report-code-block text-xs">
{`import React from 'react';
import { Square, Piece, Color } from 'chess.js';

interface ChessBoardProps {
  gameState: GameState;
  playerColor: Color;
  onSquareClick: (square: Square) => void;
  isThinking: boolean;
}

const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const RANKS = ['8', '7', '6', '5', '4', '3', '2', '1'];

const ChessBoard: React.FC<ChessBoardProps> = ({
  gameState,
  playerColor,
  onSquareClick,
  isThinking
}) => {
  const { board, selectedSquare, validMoves, lastMove, inCheck } = gameState;

  const getPieceSymbol = (piece: Piece | null): string => {
    if (!piece) return '';
    const symbols: Record<string, Record<Color, string>> = {
      k: { w: '♔', b: '♚' },
      q: { w: '♕', b: '♛' },
      r: { w: '♖', b: '♜' },
      b: { w: '♗', b: '♝' },
      n: { w: '♘', b: '♞' },
      p: { w: '♙', b: '♟' },
    };
    return symbols[piece.type][piece.color];
  };

  return (
    <div className="inline-block border-2 border-gray-800 rounded-lg overflow-hidden">
      {RANKS.map((rank, rankIndex) => (
        <div key={rank} className="flex">
          {FILES.map((file, fileIndex) => {
            const square = \`\${file}\${rank}\` as Square;
            const piece = board[rankIndex][fileIndex];
            const isLight = (rankIndex + fileIndex) % 2 === 0;
            const isSelected = selectedSquare === square;
            const isValidMove = validMoves.includes(square);
            const isLastMove = lastMove?.from === square || lastMove?.to === square;
            const isKingInCheck = inCheck && piece?.type === 'k' && 
                                  piece?.color === gameState.turn;

            return (
              <div
                key={square}
                onClick={() => !isThinking && onSquareClick(square)}
                className={\`
                  w-12 h-12 flex items-center justify-center text-3xl
                  cursor-pointer relative transition-colors
                  \${isLight ? 'bg-amber-100' : 'bg-amber-700'}
                  \${isSelected ? 'ring-4 ring-blue-500 ring-inset' : ''}
                  \${isLastMove ? 'bg-yellow-300' : ''}
                  \${isKingInCheck ? 'bg-red-400' : ''}
                \`}
              >
                {/* Valid move indicator */}
                {isValidMove && (
                  <div className="absolute w-3 h-3 bg-green-500 rounded-full opacity-70" />
                )}
                
                {/* Piece */}
                <span className={piece?.color === 'w' ? 'text-white drop-shadow-md' : 'text-black'}>
                  {getPieceSymbol(piece)}
                </span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};`}
      </div>

      <h3 className="report-subsection-title">12.2 useChessGame Hook (Excerpt)</h3>
      <div className="report-code-block text-xs">
{`import { useState, useCallback, useRef } from 'react';
import { Chess, Square, Move } from 'chess.js';

interface UseChessGameReturn {
  gameState: GameState;
  makeMove: (from: Square, to: Square, promotion?: string) => boolean;
  selectSquare: (square: Square) => void;
  resetGame: () => void;
  undoMove: () => void;
  loadPosition: (fen: string) => void;
}

export const useChessGame = (): UseChessGameReturn => {
  const chessRef = useRef(new Chess());
  const [gameState, setGameState] = useState<GameState>(getInitialState());

  const updateGameState = useCallback(() => {
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
      lastMove: null,
    });
  }, []);

  const selectSquare = useCallback((square: Square) => {
    const chess = chessRef.current;
    const piece = chess.get(square);

    // If clicking own piece, select it and show valid moves
    if (piece && piece.color === chess.turn()) {
      const moves = chess.moves({ square, verbose: true });
      setGameState(prev => ({
        ...prev,
        selectedSquare: square,
        validMoves: moves.map(m => m.to),
      }));
    }
  }, []);

  const makeMove = useCallback((from: Square, to: Square, promotion?: string): boolean => {
    const chess = chessRef.current;
    
    try {
      const move = chess.move({ from, to, promotion: promotion || 'q' });
      if (move) {
        setGameState(prev => ({
          ...prev,
          lastMove: { from, to },
        }));
        updateGameState();
        return true;
      }
    } catch (e) {
      console.error('Invalid move:', e);
    }
    return false;
  }, [updateGameState]);

  const undoMove = useCallback(() => {
    const chess = chessRef.current;
    chess.undo(); // Undo AI move
    chess.undo(); // Undo player move
    updateGameState();
  }, [updateGameState]);

  return { gameState, makeMove, selectSquare, resetGame, undoMove, loadPosition };
};`}
      </div>

      <h3 className="report-subsection-title">12.3 useStockfish Hook (Excerpt)</h3>
      <div className="report-code-block text-xs">
{`import { useState, useEffect, useRef, useCallback } from 'react';

type Difficulty = 'easy' | 'medium' | 'hard';

interface UseStockfishReturn {
  isReady: boolean;
  isThinking: boolean;
  getBestMove: (fen: string) => Promise<string>;
  setDifficulty: (level: Difficulty) => void;
}

const DIFFICULTY_CONFIG: Record<Difficulty, { skill: number; time: number }> = {
  easy: { skill: 3, time: 100 },
  medium: { skill: 10, time: 500 },
  hard: { skill: 20, time: 2000 },
};

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

    worker.onmessage = (e) => {
      if (e.data === 'uciok') {
        worker.postMessage('isready');
      } else if (e.data === 'readyok') {
        setIsReady(true);
      }
    };

    worker.postMessage('uci');
    workerRef.current = worker;

    return () => worker.terminate();
  }, []);

  const getBestMove = useCallback((fen: string): Promise<string> => {
    return new Promise((resolve) => {
      const worker = workerRef.current;
      if (!worker || !isReady) {
        // Fallback: return random legal move
        resolve(getRandomMove(fen));
        return;
      }

      setIsThinking(true);
      const config = DIFFICULTY_CONFIG[difficulty];

      const handleMessage = (e: MessageEvent) => {
        if (e.data.startsWith('bestmove')) {
          const move = e.data.split(' ')[1];
          worker.removeEventListener('message', handleMessage);
          setIsThinking(false);
          resolve(move);
        }
      };

      worker.addEventListener('message', handleMessage);
      worker.postMessage(\`setoption name Skill Level value \${config.skill}\`);
      worker.postMessage(\`position fen \${fen}\`);
      worker.postMessage(\`go movetime \${config.time}\`);
    });
  }, [isReady, difficulty]);

  return { isReady, isThinking, getBestMove, setDifficulty };
};`}
      </div>

      <h3 className="report-subsection-title">12.4 Game Storage Utilities</h3>
      <div className="report-code-block text-xs">
{`// lib/gameStorage.ts

const STORAGE_KEY = 'chess-game-saves';

interface SavedGame {
  id: string;
  name: string;
  fen: string;
  pgn: string;
  difficulty: string;
  moveCount: number;
  createdAt: string;
}

export const saveGame = (name: string, gameState: GameState, difficulty: string): void => {
  const saves = getSavedGames();
  const newSave: SavedGame = {
    id: crypto.randomUUID(),
    name,
    fen: gameState.fen,
    pgn: gameState.pgn,
    difficulty,
    moveCount: gameState.history.length,
    createdAt: new Date().toISOString(),
  };
  
  saves.push(newSave);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saves));
};

export const getSavedGames = (): SavedGame[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const loadGame = (id: string): SavedGame | null => {
  const saves = getSavedGames();
  return saves.find(s => s.id === id) || null;
};

export const deleteGame = (id: string): void => {
  const saves = getSavedGames().filter(s => s.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saves));
};`}
      </div>
    </>
  );
};

export default CodeImplementationSection;
