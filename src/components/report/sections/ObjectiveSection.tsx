import React from 'react';

const ObjectiveSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        The primary objectives of this project are to demonstrate the practical integration of artificial intelligence in gaming, create an accessible learning platform for chess enthusiasts, and showcase modern web development techniques. Each objective has been decomposed into specific, measurable sub-objectives with defined success criteria to enable systematic evaluation of project outcomes.
      </p>

      <h3 className="report-subsection-title">3.1 AI Integration in Gaming</h3>
      <p className="report-paragraph">
        Demonstrate the practical application of artificial intelligence in a classic board game by implementing a custom chess AI engine. This objective showcases how AI can serve as a competitive opponent with adjustable difficulty levels, making the game accessible to players of all skill levels while providing a challenging experience for advanced players. The AI integration must be seamless, responsive, and provide a natural playing experience that encourages continued engagement.
      </p>
      <ul className="report-list">
        <li>Implement a custom minimax search algorithm with alpha-beta pruning for optimal move selection</li>
        <li>Design piece-square table (PST) evaluation functions for positional awareness beyond material counting</li>
        <li>Configure adaptive skill levels that adjust search depth and evaluation parameters</li>
        <li>Provide fallback random move generation if the primary engine encounters errors</li>
        <li>Achieve response times under 2.5 seconds on modern hardware at maximum search depth</li>
        <li>Implement move ordering heuristics to maximize alpha-beta pruning efficiency</li>
      </ul>

      <table className="report-table">
        <thead>
          <tr>
            <th>Sub-Objective</th>
            <th>Metric</th>
            <th>Target</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Minimax implementation</td>
            <td>Algorithm correctness</td>
            <td>100% legal moves</td>
            <td>Must Have</td>
          </tr>
          <tr>
            <td>Alpha-beta pruning</td>
            <td>Node reduction rate</td>
            <td>&gt;80% reduction</td>
            <td>Must Have</td>
          </tr>
          <tr>
            <td>PST evaluation</td>
            <td>Positional play quality</td>
            <td>Center control, king safety</td>
            <td>Should Have</td>
          </tr>
          <tr>
            <td>Response time</td>
            <td>AI move latency</td>
            <td>&lt;2.5s at depth 5</td>
            <td>Must Have</td>
          </tr>
          <tr>
            <td>Difficulty calibration</td>
            <td>Win rate distribution</td>
            <td>Easy: 70-90%, Medium: 40-60%, Hard: 10-25%</td>
            <td>Should Have</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">3.2 Human-Computer Interaction</h3>
      <p className="report-paragraph">
        Design an intuitive and responsive user interface that facilitates seamless interaction between the human player and the AI opponent. The interface must provide clear visual feedback at every stage of gameplay, reducing cognitive load and allowing players to focus on strategy rather than mechanics. This includes visual feedback for valid moves, check indicators, game state notifications, and real-time board updates. The HCI design follows established principles from Nielsen's usability heuristics and Shneiderman's golden rules of interface design.
      </p>
      <ul className="report-list">
        <li>Visual highlighting of valid move squares when a piece is selected, using distinct colors for empty squares vs. capture targets</li>
        <li>Clear indicators for check (red highlight on king), checkmate (game-ending notification), stalemate, and draw conditions</li>
        <li>"AI thinking" indicator with animated visual feedback during engine computation</li>
        <li>Last move highlighting using a distinct color to maintain game flow awareness</li>
        <li>Responsive design supporting desktop (1920px+), tablet (768px), and mobile (320px) viewports</li>
        <li>Drag-and-drop support as an alternative to click-based move input</li>
        <li>Consistent color coding: green for valid moves, yellow for last move, red for check state</li>
        <li>Accessible contrast ratios meeting WCAG 2.1 AA standards for all interactive elements</li>
      </ul>

      <div className="report-info-box">
        <p className="text-sm font-semibold mb-2">Usability Heuristics Applied (Jakob Nielsen):</p>
        <table className="report-table text-xs">
          <thead>
            <tr>
              <th>Heuristic</th>
              <th>Application in This Project</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Visibility of system status</td>
              <td>Turn indicator, AI thinking animation, game status display</td>
            </tr>
            <tr>
              <td>Match between system and real world</td>
              <td>Standard chess notation, traditional board layout and colors</td>
            </tr>
            <tr>
              <td>User control and freedom</td>
              <td>Undo button, new game option, deselect by clicking elsewhere</td>
            </tr>
            <tr>
              <td>Consistency and standards</td>
              <td>Standard algebraic notation, consistent button styling</td>
            </tr>
            <tr>
              <td>Error prevention</td>
              <td>Only legal moves are highlighted and executable</td>
            </tr>
            <tr>
              <td>Recognition rather than recall</td>
              <td>Valid moves displayed visually, captured pieces shown</td>
            </tr>
            <tr>
              <td>Flexibility and efficiency</td>
              <td>Multiple difficulty levels, save/load for power users</td>
            </tr>
            <tr>
              <td>Aesthetic and minimalist design</td>
              <td>Clean interface with essential information only</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="report-subsection-title">3.3 Chess Learning Tool</h3>
      <p className="report-paragraph">
        Provide a platform where users can practice and improve their chess skills by playing against an AI that adapts to different skill levels. The application serves as both entertainment and an educational tool for chess improvement. The learning-oriented design philosophy prioritizes features that help users understand their mistakes, experiment with alternative strategies, and gradually increase difficulty as their skills improve.
      </p>
      <ul className="report-list">
        <li><strong>Easy mode:</strong> Engine plays at approximately 800-1000 Elo rating, suitable for beginners. Search depth limited to 2 plies with simplified evaluation. AI occasionally makes suboptimal moves to simulate a beginner-level opponent.</li>
        <li><strong>Medium mode:</strong> Engine plays at approximately 1400-1600 Elo rating, for intermediate players. Search depth of 3-4 plies with full piece-square table evaluation. AI plays consistently but may miss deep tactical combinations.</li>
        <li><strong>Hard mode:</strong> Engine plays at approximately 1800-2000 Elo rating, challenging even experienced club players. Full search depth of 5 plies with comprehensive evaluation including material, position, and king safety factors.</li>
        <li>Move history tracking allows reviewing and learning from completed games in standard algebraic notation</li>
        <li>Undo functionality enables experimentation with different move strategies without restarting the entire game</li>
        <li>Valid move highlighting teaches beginners which squares each piece can reach</li>
      </ul>

      <div className="report-note">
        <p className="text-sm font-semibold mb-2">Pedagogical Design Principles:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li><strong>Scaffolding:</strong> Graduated difficulty levels allow learners to progress at their own pace</li>
          <li><strong>Immediate feedback:</strong> Visual indicators instantly communicate game state changes</li>
          <li><strong>Safe experimentation:</strong> Undo feature removes fear of making mistakes</li>
          <li><strong>Self-paced learning:</strong> No time pressure, allowing thoughtful analysis of each position</li>
          <li><strong>Pattern recognition:</strong> Repeated play against consistent AI builds pattern recognition skills</li>
        </ul>
      </div>

      <h3 className="report-subsection-title">3.4 Modern Web Development Practices</h3>
      <p className="report-paragraph">
        Apply contemporary web development practices including component-based architecture, custom React hooks, TypeScript type safety, and responsive design principles. This objective demonstrates proficiency in industry-standard tools and patterns that are directly applicable to professional software development. The project serves as a portfolio piece showcasing full-stack engineering capabilities within a complex, interactive application domain.
      </p>
      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Development Standards Implemented:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Component-based architecture with React functional components and hooks</li>
          <li>Custom hooks for separation of concerns (useChessGame for game logic, chessAI for engine)</li>
          <li>TypeScript interfaces and type guards for type-safe development across the entire codebase</li>
          <li>Tailwind CSS for utility-first styling with design tokens ensuring visual consistency</li>
          <li>shadcn/ui for accessible, pre-built UI components following Radix UI primitives</li>
          <li>Vite for fast development builds with Hot Module Replacement (HMR)</li>
          <li>ESLint and TypeScript strict mode for code quality enforcement</li>
          <li>Vitest for unit and integration testing with React Testing Library</li>
        </ul>
      </div>

      <h3 className="report-subsection-title">3.5 Game State Management</h3>
      <p className="report-paragraph">
        Implement comprehensive game state management including move history tracking, game save/load functionality, undo operations, and persistent storage using browser localStorage. The state management system must handle the full complexity of chess positions — including castling rights, en passant targets, half-move clocks, and full-move numbers — while maintaining consistency across all UI components and supporting serialization for persistent storage.
      </p>
      <ul className="report-list">
        <li>Complete game state serialization using FEN (Forsyth–Edwards Notation), which encodes piece positions, active color, castling availability, en passant target, half-move clock, and full-move number in a compact string format</li>
        <li>Move history recording in PGN (Portable Game Notation) format for human-readable game records that can be imported into other chess software</li>
        <li>Multiple saved games with custom naming, supporting up to 10 concurrent save slots</li>
        <li>Game metadata storage including creation date, last update date, difficulty level, and move count</li>
        <li>Cross-session persistence through browser localStorage with JSON serialization</li>
        <li>Atomic state updates ensuring UI consistency during complex operations (undo, load, new game)</li>
      </ul>

      <h3 className="report-subsection-title">3.6 Research Questions</h3>
      <p className="report-paragraph">
        Beyond the practical development objectives, this project investigates several research questions that contribute to the academic understanding of browser-based AI applications:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Research Question</th>
            <th>Investigation Method</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RQ1</td>
            <td>What search depth is achievable within browser performance constraints (&lt;2.5s response)?</td>
            <td>Performance profiling across difficulty levels</td>
          </tr>
          <tr>
            <td>RQ2</td>
            <td>How does alpha-beta pruning efficiency vary across game phases (opening/middle/endgame)?</td>
            <td>Node count analysis at different game stages</td>
          </tr>
          <tr>
            <td>RQ3</td>
            <td>Can piece-square table evaluation alone produce positionally meaningful play?</td>
            <td>Game analysis comparing PST vs. material-only evaluation</td>
          </tr>
          <tr>
            <td>RQ4</td>
            <td>What is the memory footprint of the search tree at various depths?</td>
            <td>Chrome DevTools memory profiling</td>
          </tr>
          <tr>
            <td>RQ5</td>
            <td>Does React's virtual DOM introduce measurable overhead for real-time board updates?</td>
            <td>React Profiler and performance timeline analysis</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">3.7 Success Criteria Summary</h3>
      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">The project will be considered successful if all of the following criteria are met:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>✅ AI plays legal chess at all three difficulty levels without crashes or invalid states</li>
          <li>✅ All FIDE chess rules are correctly implemented and validated through testing</li>
          <li>✅ Average AI response time is under 2.5 seconds at maximum difficulty</li>
          <li>✅ Win rate distribution matches target ranges across difficulty levels</li>
          <li>✅ Application is responsive across desktop, tablet, and mobile viewports</li>
          <li>✅ Save/load functionality correctly preserves and restores complete game state</li>
          <li>✅ Undo operation correctly reverses both player and AI moves</li>
          <li>✅ Application loads in under 3 seconds on a standard broadband connection</li>
          <li>✅ User satisfaction score averages above 4.0/5.0 across UX evaluation metrics</li>
          <li>✅ Comprehensive documentation covers all aspects of design and implementation</li>
        </ul>
      </div>
    </>
  );
};

export default ObjectiveSection;
