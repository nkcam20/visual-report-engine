import { useState, useCallback, useEffect, useRef } from 'react';
import { Chess, type Square, type Move } from 'chess.js';
import { getBestMove } from '@/lib/chessAI';
import type { Difficulty, PieceColor } from '@/types/chess';

export function useChessGame(difficulty: Difficulty = 'medium', playerColor: PieceColor = 'w') {
  const [game] = useState(() => new Chess());
  const [fen, setFen] = useState(game.fen());
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [validMoves, setValidMoves] = useState<Square[]>([]);
  const [lastMove, setLastMove] = useState<{ from: Square; to: Square } | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const [moveHistory, setMoveHistory] = useState<Move[]>([]);
  const [promotionPending, setPromotionPending] = useState<{ from: Square; to: Square } | null>(null);
  const [gameStatus, setGameStatus] = useState<string>('playing');
  const diffRef = useRef(difficulty);
  diffRef.current = difficulty;

  const updateState = useCallback(() => {
    setFen(game.fen());
    setMoveHistory([...game.history({ verbose: true })]);
    if (game.isCheckmate()) setGameStatus(game.turn() === playerColor ? 'lost' : 'won');
    else if (game.isDraw()) setGameStatus('draw');
    else if (game.isStalemate()) setGameStatus('stalemate');
    else setGameStatus('playing');
  }, [game, playerColor]);

  const makeAIMove = useCallback(() => {
    if (game.isGameOver() || game.turn() === playerColor) return;
    setIsThinking(true);
    setTimeout(() => {
      const move = getBestMove(game.fen(), diffRef.current);
      if (move) {
        const result = game.move(move);
        if (result) setLastMove({ from: result.from as Square, to: result.to as Square });
      }
      setIsThinking(false);
      updateState();
    }, 300 + Math.random() * 500);
  }, [game, playerColor, updateState]);

  const handleSquareClick = useCallback((square: Square) => {
    if (game.isGameOver() || isThinking || game.turn() !== playerColor) return;

    const piece = game.get(square);

    if (selectedSquare) {
      // Try to move
      const isPromotion = (() => {
        const p = game.get(selectedSquare);
        if (!p || p.type !== 'p') return false;
        const rank = square[1];
        return (p.color === 'w' && rank === '8') || (p.color === 'b' && rank === '1');
      })();

      if (isPromotion && validMoves.includes(square)) {
        setPromotionPending({ from: selectedSquare, to: square });
        setSelectedSquare(null);
        setValidMoves([]);
        return;
      }

      try {
        const result = game.move({ from: selectedSquare, to: square });
        if (result) {
          setLastMove({ from: result.from as Square, to: result.to as Square });
          setSelectedSquare(null);
          setValidMoves([]);
          updateState();
          setTimeout(makeAIMove, 200);
          return;
        }
      } catch {
        // invalid move, fall through
      }
    }

    // Select piece
    if (piece && piece.color === playerColor) {
      setSelectedSquare(square);
      const moves = game.moves({ square, verbose: true });
      setValidMoves(moves.map(m => m.to as Square));
    } else {
      setSelectedSquare(null);
      setValidMoves([]);
    }
  }, [game, selectedSquare, validMoves, playerColor, isThinking, updateState, makeAIMove]);

  const handlePromotion = useCallback((piece: 'q' | 'r' | 'b' | 'n') => {
    if (!promotionPending) return;
    try {
      const result = game.move({ from: promotionPending.from, to: promotionPending.to, promotion: piece });
      if (result) setLastMove({ from: result.from as Square, to: result.to as Square });
    } catch { /* ignore */ }
    setPromotionPending(null);
    updateState();
    setTimeout(makeAIMove, 200);
  }, [game, promotionPending, updateState, makeAIMove]);

  const undoMove = useCallback(() => {
    // Undo AI move + player move
    game.undo();
    game.undo();
    setLastMove(null);
    setSelectedSquare(null);
    setValidMoves([]);
    updateState();
  }, [game, updateState]);

  const resetGame = useCallback(() => {
    game.reset();
    setLastMove(null);
    setSelectedSquare(null);
    setValidMoves([]);
    setPromotionPending(null);
    updateState();
    if (playerColor === 'b') setTimeout(makeAIMove, 500);
  }, [game, playerColor, updateState, makeAIMove]);

  // If player is black, AI moves first
  useEffect(() => {
    if (playerColor === 'b' && game.turn() === 'w' && moveHistory.length === 0) {
      setTimeout(makeAIMove, 500);
    }
  }, []);

  const getPgn = useCallback(() => game.pgn(), [game]);

  return {
    fen, board: game.board(), selectedSquare, validMoves, lastMove,
    isThinking, moveHistory, gameStatus, promotionPending, turn: game.turn(),
    isCheck: game.isCheck(),
    handleSquareClick, handlePromotion, undoMove, resetGame, getPgn,
  };
}
