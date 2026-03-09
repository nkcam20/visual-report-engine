import React from 'react';

const ObjectiveSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        The primary objectives of this project are to demonstrate the practical integration of artificial intelligence in gaming, create an accessible learning platform for chess enthusiasts, and showcase modern web development techniques.
      </p>

      <h3 className="report-subsection-title">1. AI Integration in Gaming</h3>
      <p className="report-paragraph">
        Demonstrate the practical application of artificial intelligence in a classic board game by integrating the Stockfish chess engine. This objective showcases how AI can serve as a competitive opponent with adjustable difficulty levels, making the game accessible to players of all skill levels while providing a challenging experience for advanced players.
      </p>
      <ul className="report-list">
        <li>Integrate Stockfish.js engine using WebAssembly for high-performance browser execution</li>
        <li>Implement UCI (Universal Chess Interface) protocol for engine communication</li>
        <li>Configure adaptive skill levels that adjust thinking depth and evaluation parameters</li>
        <li>Provide fallback random move generation if the engine fails to load</li>
      </ul>

      <h3 className="report-subsection-title">2. Human-Computer Interaction</h3>
      <p className="report-paragraph">
        Design an intuitive and responsive user interface that facilitates seamless interaction between the human player and the AI opponent. This includes visual feedback for valid moves, check indicators, game state notifications, and real-time board updates.
      </p>
      <ul className="report-list">
        <li>Visual highlighting of valid move squares when a piece is selected</li>
        <li>Clear indicators for check, checkmate, stalemate, and draw conditions</li>
        <li>"AI thinking" indicator during engine computation</li>
        <li>Last move highlighting for game flow awareness</li>
        <li>Responsive design supporting desktop, tablet, and mobile viewports</li>
      </ul>

      <h3 className="report-subsection-title">3. Chess Learning Tool</h3>
      <p className="report-paragraph">
        Provide a platform where users can practice and improve their chess skills by playing against an AI that adapts to different skill levels. The application serves as both entertainment and an educational tool for chess improvement.
      </p>
      <ul className="report-list">
        <li><strong>Easy mode:</strong> Engine plays at approximately 800-1000 Elo rating, suitable for beginners</li>
        <li><strong>Medium mode:</strong> Engine plays at approximately 1400-1600 Elo rating, for intermediate players</li>
        <li><strong>Hard mode:</strong> Engine plays at full strength (2500+ Elo rating), challenging even expert players</li>
        <li>Move history tracking allows reviewing and learning from completed games</li>
        <li>Undo functionality enables experimentation with different move strategies</li>
      </ul>

      <h3 className="report-subsection-title">4. Modern Web Development Practices</h3>
      <p className="report-paragraph">
        Apply contemporary web development practices including component-based architecture, custom React hooks, TypeScript type safety, and responsive design principles.
      </p>
      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Development Standards Implemented:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Component-based architecture with React functional components</li>
          <li>Custom hooks for separation of concerns (useChessGame, useStockfish)</li>
          <li>TypeScript interfaces for type-safe development</li>
          <li>Tailwind CSS for utility-first styling with design tokens</li>
          <li>shadcn/ui for accessible, pre-built UI components</li>
        </ul>
      </div>

      <h3 className="report-subsection-title">5. Game State Management</h3>
      <p className="report-paragraph">
        Implement comprehensive game state management including move history tracking, game save/load functionality, undo operations, and persistent storage using browser localStorage. The system supports:
      </p>
      <ul className="report-list">
        <li>Complete game state serialization using FEN (Forsyth–Edwards Notation)</li>
        <li>Move history recording in PGN (Portable Game Notation) format</li>
        <li>Multiple saved games with custom naming</li>
        <li>Game metadata storage including date, difficulty, and move count</li>
        <li>Cross-session persistence through browser localStorage</li>
      </ul>
    </>
  );
};

export default ObjectiveSection;
