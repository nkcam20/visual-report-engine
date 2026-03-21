import React from 'react';

const IntroductionSection: React.FC = () => {
  return (
    <>
      <h3 className="report-subsection-title">4.1 Background</h3>
      <p className="report-paragraph">
        Chess is one of the oldest and most intellectually demanding board games in human history, dating back over 1,500 years to ancient India where it was known as Chaturanga. The game has evolved through Persian, Arabic, and European cultures to become the standardized game we know today. Its combination of strategic depth, tactical complexity, and psychological elements has made it a benchmark for artificial intelligence research since the mid-20th century.
      </p>
      
      <p className="report-paragraph">
        The history of computer chess began with Claude Shannon's seminal 1950 paper "Programming a Computer for Playing Chess," which laid the theoretical foundation for chess-playing algorithms. Shannon identified two fundamental approaches to chess programming: Type A strategies, which examine all possible moves to a fixed depth using brute-force search, and Type B strategies, which selectively examine only the most promising moves using heuristic evaluation functions. This dichotomy continues to influence modern chess engine design.
      </p>

      <p className="report-paragraph">
        The development of chess-playing machines has been a driving force in computer science research for over seven decades. From Alan Turing's theoretical "Turochamp" program in 1952 to IBM's Deep Blue defeating world champion Garry Kasparov in 1997, chess has served as a proving ground for advances in search algorithms, evaluation heuristics, and computational optimization. More recently, Google DeepMind's AlphaZero achieved superhuman performance through self-play reinforcement learning in 2017, learning chess from scratch in just four hours — fundamentally changing how researchers think about game-playing AI.
      </p>

      <p className="report-paragraph">
        The significance of chess as a domain for AI research extends beyond mere game playing. Chess problems embody characteristics found in many real-world optimization and decision-making scenarios: large search spaces (estimated at 10^47 possible game positions), time-constrained decision-making, incomplete information processing, and the need to balance short-term tactics with long-term strategy. Solutions developed for chess have found applications in logistics, financial modeling, military strategy, and other fields requiring complex decision-making under uncertainty.
      </p>

      <div className="report-note">
        <p className="text-sm font-medium mb-1">Historical Milestones in Computer Chess:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>1950: Shannon publishes theoretical framework for chess programming</li>
          <li>1952: Turing writes "Turochamp" — first chess algorithm (executed by hand)</li>
          <li>1957: Alex Bernstein develops first full chess program for IBM 704</li>
          <li>1970s: First chess programs defeat amateur players consistently</li>
          <li>1988: Deep Thought defeats grandmaster Bent Larsen</li>
          <li>1997: Deep Blue defeats Garry Kasparov (Elo ~2800) in a 6-game match</li>
          <li>2006: Deep Fritz defeats Vladimir Kramnik, then-world champion</li>
          <li>2017: AlphaZero surpasses all traditional engines via self-play reinforcement learning</li>
          <li>2020+: Stockfish integrates NNUE neural networks, exceeding 3500 Elo rating</li>
          <li>2023: Stockfish becomes the first engine to achieve a CCRL rating above 3600</li>
        </ul>
      </div>

      <h3 className="report-subsection-title">4.2 Chess Engines</h3>
      <p className="report-paragraph">
        A chess engine is a computer program that analyzes chess positions and generates optimal or near-optimal moves. Modern chess engines combine sophisticated search algorithms with evaluation functions to navigate the enormous game tree of chess positions. The evolution of chess engines can be broadly divided into three eras: the classical era (1950s–1990s) focused on handcrafted evaluation and brute-force search; the optimization era (2000s–2010s) emphasized pruning techniques and endgame tablebases; and the neural network era (2018–present) introduced machine learning-based position evaluation.
      </p>

      <p className="report-paragraph">
        Modern chess engines like Stockfish use sophisticated algorithms to evaluate positions and search for optimal moves. The primary techniques include:
      </p>

      <ul className="report-list">
        <li><strong>Alpha-Beta Pruning:</strong> An optimization of the minimax algorithm that eliminates branches in the search tree that cannot influence the final decision. By maintaining alpha (lower bound) and beta (upper bound) values during the search, the algorithm can prune entire subtrees, dramatically reducing computation time. In the best case, alpha-beta pruning reduces the effective branching factor from b to √b, allowing search to the same depth in significantly less time.</li>
        <li><strong>Iterative Deepening:</strong> A search strategy that performs progressively deeper depth-first searches. Starting with a 1-ply search, the algorithm increases depth incrementally. This approach combines the completeness of breadth-first search with the memory efficiency of depth-first search. It also allows the engine to return a move within any time constraint while continuously improving move quality through deeper analysis.</li>
        <li><strong>Transposition Tables:</strong> Hash tables that store previously evaluated positions to avoid redundant computation. When the same board position is reached via different move orders (transpositions), the engine can retrieve the stored evaluation instead of re-computing it. This can save 20–40% of computation time, especially in the endgame where transpositions are frequent.</li>
        <li><strong>Move Ordering:</strong> The effectiveness of alpha-beta pruning depends heavily on the order in which moves are examined. Good move ordering — examining captures, checks, and historically successful moves first — increases the number of cutoffs and reduces search time. Killer move heuristics and history tables are commonly used to improve move ordering.</li>
        <li><strong>Quiescence Search:</strong> An extension of the main search that continues beyond the nominal depth for "unstable" positions (e.g., positions with pending captures or checks). This prevents the horizon effect, where the engine makes poor decisions because it cannot see the consequences of imminent tactical operations just beyond its search depth.</li>
        <li><strong>NNUE (Efficiently Updatable Neural Networks):</strong> A neural network evaluation function introduced in Stockfish 12 (2020) that provides more accurate position assessments than traditional handcrafted evaluation functions. NNUE networks are "efficiently updatable" because only the parts of the network affected by the last move need to be recomputed, making them fast enough for use in deep searches. The combination of NNUE with traditional alpha-beta search has pushed Stockfish's rating above 3600 Elo.</li>
      </ul>

      <p className="report-paragraph">
        Stockfish, the engine referenced in this project, is an open-source chess engine that consistently ranks among the top chess engines worldwide. Developed by a community of volunteers since 2008, it is distributed under the GNU General Public License v3.0. With an estimated Elo rating exceeding 3500 (far surpassing any human player), it can evaluate millions of positions per second and find optimal moves in virtually any position. The engine has been compiled to WebAssembly (WASM) for browser execution, making it accessible without server infrastructure.
      </p>

      <h3 className="report-subsection-title">4.3 Project Relevance</h3>
      <p className="report-paragraph">
        This project bridges the gap between advanced AI technology and accessible web-based gaming. The convergence of several technological trends makes this project timely and relevant:
      </p>

      <ul className="report-list">
        <li><strong>WebAssembly Maturity:</strong> WebAssembly has matured to the point where computationally intensive C/C++ code (like chess engines) can run at near-native speed in web browsers. This eliminates the traditional need for server-side computation or native application installation.</li>
        <li><strong>Modern Frontend Frameworks:</strong> React.js and TypeScript provide robust tools for building complex, interactive web applications with maintainable, type-safe code. The component-based architecture is particularly well-suited for chess applications where the board, sidebar, and dialogs are naturally separable components.</li>
        <li><strong>Browser API Capabilities:</strong> Modern browsers support Web Workers (for non-blocking AI computation), localStorage (for game persistence), and advanced CSS features (for responsive, animated interfaces) — providing all the infrastructure needed for a rich chess experience without server dependencies.</li>
        <li><strong>Educational Value:</strong> Chess AI implementation provides an excellent vehicle for learning fundamental computer science concepts: tree search algorithms, heuristic evaluation, optimization techniques, and real-time system design.</li>
      </ul>

      <p className="report-paragraph">
        By leveraging WebAssembly (WASM) technology, the chess engine runs entirely in the browser, eliminating the need for server-side computation and providing instant AI responses. This approach demonstrates the feasibility of running computationally intensive AI algorithms in web browsers, effective state management in real-time gaming applications, the integration of third-party libraries and engines in web applications, and accessible AI experiences without requiring installation or cloud infrastructure.
      </p>

      <h3 className="report-subsection-title">4.4 Problem Statement</h3>
      <p className="report-paragraph">
        While numerous chess applications exist, many create unnecessary barriers for users who want a quick, high-quality chess experience. A systematic analysis of existing chess platforms reveals several common friction points:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Barrier</th>
            <th>Chess.com</th>
            <th>Lichess</th>
            <th>Desktop Apps</th>
            <th>This Project</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Requires Installation</td>
            <td>No (web) / Yes (app)</td>
            <td>No</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Requires Account</td>
            <td>Yes (for full features)</td>
            <td>Optional</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Requires Internet (for AI)</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Contains Ads</td>
            <td>Yes (free tier)</td>
            <td>No</td>
            <td>Varies</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Subscription Required</td>
            <td>Yes (premium features)</td>
            <td>No</td>
            <td>Varies</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Data Collection</td>
            <td>Extensive</td>
            <td>Minimal</td>
            <td>Varies</td>
            <td>None</td>
          </tr>
        </tbody>
      </table>

      <p className="report-paragraph">
        This project aims to create a fully functional, free, browser-based chess application that eliminates all of the above barriers while providing a high-quality AI opponent with adjustable difficulty levels, a modern and responsive user interface, game persistence through browser storage, and an undo feature that supports learning and experimentation.
      </p>

      <h3 className="report-subsection-title">4.5 Scope and Limitations</h3>
      <p className="report-paragraph">
        Defining a clear scope is essential for managing project complexity and ensuring deliverable quality within the academic timeline. The scope was determined through a combination of requirements analysis, technical feasibility assessment, and time-budget constraints. Features were prioritized using the MoSCoW framework, and the final scope balances ambition with practical achievability.
      </p>

      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">In Scope:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Human vs. AI gameplay (player as White, AI as Black)</li>
          <li>Full chess rule implementation including all special moves (castling — both kingside and queenside, en passant capture, pawn promotion to any piece)</li>
          <li>Game-ending condition detection (checkmate, stalemate, threefold repetition, fifty-move rule, insufficient material)</li>
          <li>Multiple AI difficulty levels (Easy, Medium, Hard) with distinct playing characteristics</li>
          <li>Custom minimax-based AI with alpha-beta pruning and piece-square table evaluation</li>
          <li>Game save/load functionality using browser localStorage with named save slots</li>
          <li>Move history display in standard algebraic notation (SAN)</li>
          <li>Move undo/redo feature for learning and experimentation</li>
          <li>Visual move highlighting showing valid destination squares</li>
          <li>Check, checkmate, and stalemate visual indicators</li>
          <li>Responsive design supporting desktop (1920px+), tablet (768px), and mobile (320px) viewports</li>
          <li>Print-ready academic report with comprehensive documentation</li>
        </ul>
      </div>

      <div className="report-note mt-4">
        <p className="text-sm font-semibold mb-2">Out of Scope (Future Enhancements):</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Human vs. Human multiplayer (online or local two-player mode)</li>
          <li>Play as Black against AI (board flip functionality)</li>
          <li>Opening book database integration for more natural AI openings</li>
          <li>Post-game analysis with engine evaluation of each move</li>
          <li>Timed games with chess clocks (blitz, rapid, classical time controls)</li>
          <li>User accounts, authentication, and cloud-based game storage</li>
          <li>Rating system and Elo tracking across games</li>
          <li>Puzzle/tactics training mode</li>
          <li>Sound effects and audio feedback</li>
          <li>Board and piece theme customization</li>
        </ul>
      </div>

      <h3 className="report-subsection-title">4.6 Project Motivation</h3>
      <p className="report-paragraph">
        The motivation for this project stems from several interconnected factors. From an academic perspective, implementing a chess AI provides hands-on experience with fundamental computer science algorithms (minimax, alpha-beta pruning, heuristic evaluation) in a tangible, interactive context. Unlike textbook exercises, a chess application requires these algorithms to perform in real-time with real users, creating authentic engineering constraints around performance, usability, and reliability.
      </p>

      <p className="report-paragraph">
        From a technical perspective, the project explores the intersection of AI algorithms with modern web technologies. The challenge of running a computationally intensive chess engine in a browser — traditionally a constrained execution environment — pushes the boundaries of what is achievable with client-side web applications. WebAssembly, Web Workers, and modern JavaScript engines have made this possible only in recent years, making this an area of active exploration.
      </p>

      <p className="report-paragraph">
        From a user-experience perspective, there is a genuine need for lightweight, privacy-respecting chess applications. Many existing platforms are increasingly commercialized, requiring accounts, displaying advertisements, or restricting features behind paywalls. This project demonstrates that a high-quality chess experience can be delivered with zero cost, zero friction, and zero data collection — values that are increasingly important in the modern web ecosystem.
      </p>

      <div className="report-info-box">
        <p className="text-sm font-semibold mb-2">Key Motivating Questions:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Can a meaningful AI opponent be implemented entirely in the browser using JavaScript?</li>
          <li>What search depth and evaluation complexity is achievable within browser performance constraints?</li>
          <li>How does a custom minimax implementation compare to professional engines at equivalent depth?</li>
          <li>Can modern React architecture patterns effectively manage the complexity of a real-time chess application?</li>
        </ul>
      </div>
    </>
  );
};

export default IntroductionSection;
