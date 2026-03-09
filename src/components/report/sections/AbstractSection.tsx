import React from 'react';

const AbstractSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        This project presents the design and implementation of an <strong>AI-Powered Chess Game</strong>, a web-based application that enables users to play chess against an artificial intelligence opponent powered by the Stockfish chess engine. The application features an interactive chessboard with full move validation, multiple difficulty levels (Easy, Medium, Hard), game history management with save/load functionality, and a modern responsive user interface.
      </p>
      
      <p className="report-paragraph">
        The project demonstrates the integration of advanced AI algorithms in gaming, specifically the use of the Stockfish engine—one of the strongest open-source chess engines in the world—within a browser environment using WebAssembly technology. The frontend is built using React.js with TypeScript, ensuring type safety and maintainability, while the chess logic is handled by the chess.js library for accurate move validation and game state management.
      </p>

      <p className="report-paragraph">
        The scope of this project encompasses human-computer interaction in strategic gaming, real-time AI decision-making, and modern web application architecture patterns. Key technical achievements include:
      </p>

      <ul className="report-list">
        <li><strong>Browser-based AI execution</strong> using WebAssembly (WASM) technology, eliminating server dependency</li>
        <li><strong>Non-blocking AI computation</strong> through Web Workers, ensuring smooth user experience</li>
        <li><strong>Complete chess rule implementation</strong> including castling, en passant, pawn promotion, and draw conditions</li>
        <li><strong>Persistent game storage</strong> using browser localStorage with PGN (Portable Game Notation) format</li>
        <li><strong>Adaptive AI difficulty</strong> with configurable skill levels from beginner to expert</li>
      </ul>

      <div className="report-info-box">
        <p className="text-sm font-medium mb-1">Key Technologies Used:</p>
        <p className="text-sm">React.js 18 • TypeScript 5 • Vite • Tailwind CSS • chess.js • Stockfish.js (WASM) • shadcn/ui</p>
      </div>

      <p className="report-paragraph">
        This document provides comprehensive documentation of the system design, implementation methodology, code architecture, and user guidelines. It serves as both a technical reference for developers and a project report demonstrating proficiency in modern web development practices.
      </p>
    </>
  );
};

export default AbstractSection;
