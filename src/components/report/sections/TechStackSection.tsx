import React from 'react';

const TechStackSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        The AI-Powered Chess Game is built using a modern, robust technology stack optimized for performance, developer experience, and maintainability.
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Layer</th>
            <th>Technology</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Frontend Framework</td>
            <td>React.js 18</td>
            <td>Component-based UI development with hooks</td>
          </tr>
          <tr>
            <td>Programming Language</td>
            <td>TypeScript 5</td>
            <td>Type-safe JavaScript development</td>
          </tr>
          <tr>
            <td>Build Tool</td>
            <td>Vite 5</td>
            <td>Fast development server and production bundler</td>
          </tr>
          <tr>
            <td>UI Components</td>
            <td>shadcn/ui</td>
            <td>Pre-built accessible React components</td>
          </tr>
          <tr>
            <td>Styling</td>
            <td>Tailwind CSS 3</td>
            <td>Utility-first CSS framework</td>
          </tr>
          <tr>
            <td>Chess Logic</td>
            <td>chess.js</td>
            <td>Move validation, PGN, FEN generation</td>
          </tr>
          <tr>
            <td>Chess Engine</td>
            <td>Stockfish.js (WASM)</td>
            <td>AI opponent with configurable difficulty</td>
          </tr>
          <tr>
            <td>State Management</td>
            <td>React Hooks</td>
            <td>useState, useRef, useCallback, useEffect</td>
          </tr>
          <tr>
            <td>Data Persistence</td>
            <td>localStorage</td>
            <td>Game save/load functionality</td>
          </tr>
          <tr>
            <td>Icons</td>
            <td>Lucide React</td>
            <td>Modern icon library</td>
          </tr>
          <tr>
            <td>Routing</td>
            <td>React Router v6</td>
            <td>Client-side navigation</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">5.1 Architecture Overview</h3>
      <p className="report-paragraph">
        The application follows a layered architecture pattern with clear separation of concerns:
      </p>

      <ul className="report-list">
        <li><strong>Presentation Layer:</strong> React components (ChessBoard, GameSidebar, PromotionDialog) handle rendering and user interaction</li>
        <li><strong>Business Logic Layer:</strong> Custom hooks (useChessGame, useStockfish) encapsulate game logic and AI communication</li>
        <li><strong>Data Layer:</strong> Browser localStorage provides persistent storage for game saves</li>
        <li><strong>External Services:</strong> chess.js library for move validation, Stockfish.js for AI computation</li>
      </ul>

      <h3 className="report-subsection-title">5.2 Frontend Technologies</h3>
      
      <div className="report-info-box">
        <p className="text-sm font-semibold mb-2">React.js 18</p>
        <p className="text-sm">
          React 18 provides concurrent features, automatic batching, and the new rendering architecture. 
          The application uses functional components with hooks for state management, eliminating the need 
          for class components and enabling better code reuse through custom hooks.
        </p>
      </div>

      <div className="report-info-box mt-4">
        <p className="text-sm font-semibold mb-2">TypeScript 5</p>
        <p className="text-sm">
          TypeScript adds static type checking to JavaScript, catching errors at compile time rather than runtime. 
          The chess game uses TypeScript interfaces for game state, move validation, and component props, 
          improving code reliability and developer experience with better autocomplete and refactoring support.
        </p>
      </div>

      <div className="report-info-box mt-4">
        <p className="text-sm font-semibold mb-2">Vite 5</p>
        <p className="text-sm">
          Vite provides instant server start, lightning-fast HMR (Hot Module Replacement), and optimized 
          production builds. It uses native ES modules during development for near-instant updates, making 
          the development experience significantly faster than traditional bundlers like webpack.
        </p>
      </div>

      <h3 className="report-subsection-title">5.3 Chess Engine Integration</h3>
      <p className="report-paragraph">
        The Stockfish chess engine is integrated using WebAssembly (WASM), allowing the powerful C++ engine to run directly in the browser. Key integration aspects:
      </p>

      <ul className="report-list">
        <li><strong>Web Worker Execution:</strong> Stockfish runs in a Web Worker to prevent blocking the main thread during computation</li>
        <li><strong>UCI Protocol:</strong> Communication uses the Universal Chess Interface, a standard protocol for chess engine communication</li>
        <li><strong>Skill Level Configuration:</strong> The engine's skill level (0-20) is adjusted based on selected difficulty</li>
        <li><strong>Search Depth Limits:</strong> Thinking time and search depth are configured per difficulty level</li>
        <li><strong>Graceful Fallback:</strong> If Stockfish fails to load, a random move generator provides basic AI functionality</li>
      </ul>

      <div className="report-note">
        <p className="text-sm font-medium mb-1">Difficulty Level Configuration:</p>
        <table className="text-sm w-full mt-2">
          <thead>
            <tr className="text-left">
              <th className="pb-1">Difficulty</th>
              <th className="pb-1">Skill Level</th>
              <th className="pb-1">Search Time</th>
              <th className="pb-1">Approx. Elo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Easy</td><td>1-5</td><td>100ms</td><td>800-1200</td></tr>
            <tr><td>Medium</td><td>10</td><td>500ms</td><td>1400-1600</td></tr>
            <tr><td>Hard</td><td>20</td><td>2000ms</td><td>2500+</td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TechStackSection;
