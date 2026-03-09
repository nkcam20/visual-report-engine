import React from 'react';

const IntroductionSection: React.FC = () => {
  return (
    <>
      <h3 className="report-subsection-title">3.1 Background</h3>
      <p className="report-paragraph">
        Chess is one of the oldest and most intellectually demanding board games in human history, dating back over 1,500 years to ancient India where it was known as Chaturanga. The game has evolved through Persian, Arabic, and European cultures to become the standardized game we know today. Its combination of strategic depth, tactical complexity, and psychological elements has made it a benchmark for artificial intelligence research since the mid-20th century.
      </p>
      
      <p className="report-paragraph">
        The history of computer chess began with Claude Shannon's seminal 1950 paper "Programming a Computer for Playing Chess," which laid the theoretical foundation for chess-playing algorithms. This culminated in IBM's Deep Blue defeating world champion Garry Kasparov in 1997, marking a watershed moment in AI history. More recently, Google DeepMind's AlphaZero achieved superhuman performance through self-play reinforcement learning in 2017, learning chess from scratch in just four hours.
      </p>

      <div className="report-note">
        <p className="text-sm font-medium mb-1">Historical Milestones in Computer Chess:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>1950: Shannon publishes theoretical framework for chess programming</li>
          <li>1970s: First chess programs defeat amateur players</li>
          <li>1997: Deep Blue defeats Garry Kasparov (Elo ~2800)</li>
          <li>2017: AlphaZero surpasses all traditional engines via self-play</li>
          <li>2020+: Stockfish integrates NNUE neural networks, exceeding 3500 Elo</li>
        </ul>
      </div>

      <h3 className="report-subsection-title">3.2 Chess Engines</h3>
      <p className="report-paragraph">
        Modern chess engines like Stockfish use sophisticated algorithms to evaluate positions and search for optimal moves. The primary techniques include:
      </p>

      <ul className="report-list">
        <li><strong>Alpha-Beta Pruning:</strong> An optimization of the minimax algorithm that eliminates branches in the search tree that cannot influence the final decision, dramatically reducing computation time</li>
        <li><strong>Iterative Deepening:</strong> Progressively deeper searches that allow the engine to return a move within any time constraint while continuously improving move quality</li>
        <li><strong>Transposition Tables:</strong> Hash tables that store previously evaluated positions to avoid redundant computation when the same position is reached via different move orders</li>
        <li><strong>NNUE (Efficiently Updatable Neural Networks):</strong> A neural network evaluation function that provides more accurate position assessments than traditional handcrafted evaluation</li>
      </ul>

      <p className="report-paragraph">
        Stockfish, the engine used in this project, is an open-source chess engine that consistently ranks among the top chess engines worldwide. With an estimated Elo rating exceeding 3500 (far surpassing any human player), it can evaluate millions of positions per second and find optimal moves in virtually any position.
      </p>

      <h3 className="report-subsection-title">3.3 Project Relevance</h3>
      <p className="report-paragraph">
        This project bridges the gap between advanced AI technology and accessible web-based gaming. By leveraging WebAssembly (WASM) technology, the Stockfish engine runs entirely in the browser, eliminating the need for server-side computation and providing instant AI responses. This approach demonstrates:
      </p>

      <ul className="report-list">
        <li>The feasibility of running computationally intensive AI algorithms in web browsers</li>
        <li>Modern frontend architecture patterns for complex interactive applications</li>
        <li>Effective state management in real-time gaming applications</li>
        <li>The integration of third-party libraries and engines in web applications</li>
        <li>Accessible AI experiences without requiring installation or cloud infrastructure</li>
      </ul>

      <h3 className="report-subsection-title">3.4 Problem Statement</h3>
      <p className="report-paragraph">
        While numerous chess applications exist, many require installation, server connectivity, subscription fees, or account creation. This creates barriers for casual users who want a quick, high-quality chess experience. This project aims to create a fully functional, free, browser-based chess application that provides:
      </p>

      <ul className="report-list">
        <li>Zero installation required—runs entirely in the browser</li>
        <li>No server dependency for AI computation (all processing local)</li>
        <li>No account creation or login required</li>
        <li>High-quality AI opponent with adjustable difficulty</li>
        <li>Modern, responsive user interface</li>
        <li>Game save/load functionality for session persistence</li>
      </ul>

      <h3 className="report-subsection-title">3.5 Scope and Limitations</h3>
      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">In Scope:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Human vs. AI gameplay (player as White)</li>
          <li>Full chess rule implementation including special moves</li>
          <li>Multiple AI difficulty levels</li>
          <li>Game save/load functionality</li>
          <li>Move history and undo feature</li>
          <li>Responsive design for multiple device sizes</li>
        </ul>
      </div>

      <div className="report-note mt-4">
        <p className="text-sm font-semibold mb-2">Out of Scope (Future Enhancements):</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Human vs. Human multiplayer (online or local)</li>
          <li>Play as Black against AI</li>
          <li>Opening book database integration</li>
          <li>Game analysis and move suggestions</li>
          <li>Timed games with chess clocks</li>
          <li>User accounts and rating systems</li>
        </ul>
      </div>
    </>
  );
};

export default IntroductionSection;
