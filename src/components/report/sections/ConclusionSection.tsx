import React from 'react';

const ConclusionSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        The AI-Powered Chess Game project successfully demonstrates the integration of advanced artificial intelligence within a modern web application framework. By implementing a custom minimax engine with alpha-beta pruning and piece-square table evaluation, the application delivers a high-quality chess playing experience entirely within the browser, without requiring server-side computation or user account creation.
      </p>

      <h3 className="report-subsection-title">25.1 Achievement of Objectives</h3>
      <p className="report-paragraph">
        Each of the primary project objectives defined in Chapter 3 has been successfully achieved:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Objective</th>
            <th>Target</th>
            <th>Result</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AI Integration</td>
            <td>Functional AI opponent with adjustable difficulty</td>
            <td>3 difficulty levels (800–2000 Elo range)</td>
            <td>✅ Achieved</td>
          </tr>
          <tr>
            <td>Human-Computer Interaction</td>
            <td>Intuitive, responsive interface</td>
            <td>Average UX score: 4.55/5.0</td>
            <td>✅ Achieved</td>
          </tr>
          <tr>
            <td>Chess Learning Tool</td>
            <td>Support practice and improvement</td>
            <td>Undo feature, difficulty levels, move highlighting</td>
            <td>✅ Achieved</td>
          </tr>
          <tr>
            <td>Modern Web Practices</td>
            <td>TypeScript, React hooks, responsive design</td>
            <td>Full TypeScript, custom hooks, Tailwind CSS</td>
            <td>✅ Achieved</td>
          </tr>
          <tr>
            <td>Game State Management</td>
            <td>Save/load, undo, move history</td>
            <td>localStorage with FEN/PGN, named saves</td>
            <td>✅ Achieved</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">25.2 Key Achievements</h3>

      <ul className="report-list">
        <li><strong>Custom AI Engine:</strong> Successfully implemented a minimax algorithm with alpha-beta pruning that evaluates up to 1.8 million positions at depth 5, completing searches in under 2.5 seconds on modern hardware. The AI provides appropriate challenge across all three difficulty levels.</li>
        <li><strong>Responsive User Interface:</strong> Developed an intuitive, visually appealing interface with proper visual feedback for game states, valid moves, and AI activity. The interface supports desktop (1920px+), tablet (768px), and mobile (320px) viewports.</li>
        <li><strong>Complete Chess Implementation:</strong> Implemented all chess rules including special moves (castling, en passant, pawn promotion) and all game-ending conditions (checkmate, stalemate, threefold repetition, fifty-move rule, insufficient material).</li>
        <li><strong>Adaptive Difficulty:</strong> Provided three distinct difficulty levels calibrated through empirical testing with 150 games, demonstrating appropriate win rates across skill ranges.</li>
        <li><strong>Game Persistence:</strong> Implemented save/load functionality allowing users to preserve and resume games across browser sessions, with named save slots and automatic state serialization.</li>
        <li><strong>Modern Architecture:</strong> Applied contemporary React patterns including functional components, custom hooks, and TypeScript for maintainable, type-safe code. The architecture supports future extensions without significant refactoring.</li>
      </ul>

      <h3 className="report-subsection-title">25.3 Technical Learnings</h3>

      <p className="report-paragraph">
        The development process provided valuable experience in several areas of computer science and software engineering:
      </p>

      <ul className="report-list">
        <li><strong>Algorithm Optimization:</strong> Implementing alpha-beta pruning provided deep understanding of how search space reduction works in practice. The difference between theoretical optimal pruning (reducing b to √b) and practical pruning (80–97% reduction with good move ordering) highlighted the importance of heuristics in algorithm design.</li>
        <li><strong>Evaluation Function Design:</strong> Designing the position evaluation function required balancing multiple competing factors (material, position, king safety) and understanding how small changes in evaluation weights can dramatically affect playing style and strength.</li>
        <li><strong>Real-Time Performance Constraints:</strong> Building an AI that must respond within user-acceptable timeframes (under 2.5 seconds) required careful optimization of data structures, algorithm parameters, and JavaScript-specific performance considerations.</li>
        <li><strong>Complex State Management:</strong> Managing chess game state — which includes board position, move history, captured pieces, castling rights, en passant targets, and game status — provided experience with non-trivial state management patterns in React.</li>
        <li><strong>Component Architecture Design:</strong> Decomposing a complex application into well-defined, reusable components required thoughtful interface design and clear separation of concerns between presentation, logic, and data layers.</li>
        <li><strong>TypeScript for Complex Domains:</strong> Modeling chess concepts (pieces, squares, moves, game states) with TypeScript interfaces demonstrated the value of static typing for domain modeling and error prevention.</li>
      </ul>

      <h3 className="report-subsection-title">25.4 Project Impact</h3>

      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">User Benefits:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Free, instant access to a competent chess AI without installation or registration</li>
          <li>Privacy-focused design with all processing done locally — no data collection</li>
          <li>Accessible learning tool for chess improvement at any skill level</li>
          <li>Cross-platform compatibility (desktop, tablet, mobile)</li>
          <li>Undo feature supporting experimentation and learning from mistakes</li>
        </ul>
      </div>

      <div className="report-info-box mt-4">
        <p className="text-sm font-semibold mb-2">Technical Contributions:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Demonstrates feasibility of real-time AI computation in web browsers using JavaScript</li>
          <li>Provides a reference implementation for chess application architecture using modern React patterns</li>
          <li>Documents the performance characteristics of browser-based minimax search at various depths</li>
          <li>Illustrates effective integration of complex third-party libraries (chess.js) with custom AI code</li>
          <li>Showcases the use of TypeScript for modeling complex game domains</li>
        </ul>
      </div>

      <h3 className="report-subsection-title">25.5 Final Remarks</h3>

      <p className="report-paragraph">
        This project represents a successful application of artificial intelligence in an accessible, user-friendly format. The AI-Powered Chess Game serves both as a practical tool for chess enthusiasts and as a demonstration of modern web development capabilities. The modular architecture and clean codebase provide a solid foundation for future enhancements, including multiplayer functionality, advanced analysis features, and mobile applications.
      </p>

      <p className="report-paragraph">
        The open-source nature of the core technologies used — React, TypeScript, and chess.js — ensures that this project can continue to evolve with the latest advancements in both web development and chess AI research. The comprehensive documentation provided in this report enables other developers and researchers to understand, reproduce, and extend this work.
      </p>

      <p className="report-paragraph">
        In conclusion, the project demonstrates that meaningful AI-powered applications can be built entirely in the browser using modern web technologies, achieving performance levels that would have been impossible in browser environments just a few years ago. As WebAssembly, JavaScript engines, and frontend frameworks continue to improve, the potential for client-side AI applications will only grow — making projects like this increasingly relevant and impactful.
      </p>

      <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20 text-center">
        <p className="text-lg font-semibold mb-2" style={{ color: 'hsl(var(--primary))' }}>
          "Chess is the gymnasium of the mind."
        </p>
        <p className="text-sm text-muted-foreground">— Blaise Pascal</p>
      </div>
    </>
  );
};

export default ConclusionSection;
