import React from 'react';

const LiteratureReviewSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        This chapter presents a comprehensive review of existing literature and prior work in the fields of computer chess, artificial intelligence in gaming, web-based game development, and human-computer interaction. The review establishes the theoretical foundation upon which this project is built and identifies the research gaps that this work aims to address.
      </p>

      <h3 className="report-subsection-title">5.1 History of Computer Chess</h3>
      <p className="report-paragraph">
        The history of computer chess is deeply intertwined with the evolution of computer science itself. The concept of a chess-playing machine predates electronic computers, with Charles Babbage considering the possibility in the 19th century. However, the formal theoretical groundwork was laid by Claude Shannon in his seminal 1950 paper, "Programming a Computer for Playing Chess," published in the Philosophical Magazine. Shannon proposed two strategies for chess programming: Type A (brute-force search examining all possible moves to a fixed depth) and Type B (selective search examining only the most promising moves using heuristic evaluation).
      </p>
      <p className="report-paragraph">
        Alan Turing also contributed to early computer chess theory. In 1952, Turing wrote a chess program on paper (known as the "Turochamp") that could theoretically be executed by hand, as no computer powerful enough to run it existed at the time. This program used a minimax-style evaluation, considering material advantage, piece mobility, king safety, and pawn structure — concepts that remain fundamental in modern chess engines.
      </p>
      <p className="report-paragraph">
        The first actual computer chess programs emerged in the 1950s and 1960s. In 1956, the Los Alamos MANIAC I computer played a simplified 6×6 chess game. The first full chess program to play a complete game was developed by Alex Bernstein in 1957 for the IBM 704. These early programs were limited by computational constraints and typically searched only 4 plies (half-moves) deep.
      </p>
      <p className="report-paragraph">
        The 1960s and 1970s saw significant progress as computers became more powerful. The MIT chess program (1962), developed by John McCarthy and colleagues, introduced the concept of alpha-beta pruning to chess search. Richard Greenblatt's Mac Hack VI (1967) became the first chess program to play in a human tournament and achieve a provisional USCF rating. By the late 1970s, programs like Chess 4.5 (Northwestern University) were achieving master-level play in specific game phases.
      </p>

      <h3 className="report-subsection-title">5.2 Evolution of Chess Engines</h3>
      <p className="report-paragraph">
        The evolution of chess engines can be broadly categorized into several generations, each marked by significant algorithmic and hardware advances:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Era</th>
            <th>Key Development</th>
            <th>Approximate Elo</th>
            <th>Representative Engine</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1950s–1960s</td>
            <td>Basic minimax search, simple evaluation</td>
            <td>~800–1000</td>
            <td>Bernstein's program (1957)</td>
          </tr>
          <tr>
            <td>1970s</td>
            <td>Alpha-beta pruning, transposition tables</td>
            <td>~1200–1600</td>
            <td>Chess 4.5 (1977)</td>
          </tr>
          <tr>
            <td>1980s</td>
            <td>Dedicated hardware, endgame tablebases</td>
            <td>~1800–2200</td>
            <td>Belle, Cray Blitz</td>
          </tr>
          <tr>
            <td>1990s</td>
            <td>Parallel search, massive computation</td>
            <td>~2400–2800</td>
            <td>Deep Blue (1997)</td>
          </tr>
          <tr>
            <td>2000s</td>
            <td>Software-only engines surpass hardware</td>
            <td>~2800–3200</td>
            <td>Rybka, Fruit, Stockfish</td>
          </tr>
          <tr>
            <td>2010s</td>
            <td>Neural network evaluation (AlphaZero)</td>
            <td>~3200–3500</td>
            <td>AlphaZero, Leela Chess Zero</td>
          </tr>
          <tr>
            <td>2020s</td>
            <td>Hybrid NNUE + classical search</td>
            <td>~3500–3600+</td>
            <td>Stockfish 15+ with NNUE</td>
          </tr>
        </tbody>
      </table>

      <p className="report-paragraph">
        The Deep Blue vs. Kasparov matches (1996–1997) represent a watershed moment in computer chess history. Deep Blue was a purpose-built IBM supercomputer capable of evaluating 200 million positions per second using custom VLSI chess chips. Its victory in 1997 marked the first time a reigning world chess champion was defeated by a machine under standard tournament conditions. This event sparked worldwide debate about the nature of intelligence and the future of human-computer competition.
      </p>

      <p className="report-paragraph">
        Following Deep Blue, the focus shifted from specialized hardware to software optimization. Engines like Fritz, Shredder, and Junior achieved grandmaster-level play on commodity hardware by employing sophisticated search techniques including null move pruning, late move reductions (LMR), aspiration windows, and futility pruning. The Fruit engine (2005) was particularly influential for its elegant implementation and open-source release, which accelerated community-driven engine development.
      </p>

      <p className="report-paragraph">
        Stockfish, which emerged in 2008 from the IPPOLIT family of engines, became the dominant open-source chess engine through continuous community improvement. Its adoption of NNUE (Efficiently Updatable Neural Networks) in 2020 represented a paradigm shift, combining the deep search capabilities of traditional alpha-beta engines with the superior position evaluation of neural networks. This hybrid approach produces playing strength that exceeds both pure classical and pure neural network approaches.
      </p>

      <h3 className="report-subsection-title">5.3 Minimax Algorithm and Alpha-Beta Pruning</h3>
      <p className="report-paragraph">
        The minimax algorithm, originally formalized by John von Neumann in 1928 for two-player zero-sum games, forms the theoretical backbone of chess engine search. The algorithm works by recursively evaluating all possible game states to a fixed depth, alternating between maximizing (for the engine's own moves) and minimizing (for the opponent's moves) the evaluation score. The key insight is that each player plays optimally: the maximizing player selects the move with the highest evaluation, while the minimizing player selects the move with the lowest evaluation.
      </p>

      <p className="report-paragraph">
        For a chess game with an average branching factor of approximately 35 and a typical search depth of 4 plies, the minimax algorithm must evaluate 35^4 = 1,500,625 leaf nodes. At 6 plies, this grows to 35^6 ≈ 1.84 billion nodes — clearly impractical for real-time play. This exponential growth necessitates pruning techniques.
      </p>

      <div className="report-code-block">
{`// Minimax algorithm pseudocode
function minimax(position, depth, isMaximizing):
    if depth == 0 or game_over(position):
        return evaluate(position)
    
    if isMaximizing:
        maxEval = -INFINITY
        for each move in legal_moves(position):
            eval = minimax(apply(position, move), depth - 1, false)
            maxEval = max(maxEval, eval)
        return maxEval
    else:
        minEval = +INFINITY
        for each move in legal_moves(position):
            eval = minimax(apply(position, move), depth - 1, true)
            minEval = min(minEval, eval)
        return minEval`}
      </div>

      <p className="report-paragraph">
        Alpha-beta pruning, independently discovered by multiple researchers in the late 1950s and early 1960s (including John McCarthy, Arthur Samuel, and Alexander Brudno), dramatically reduces the number of nodes that need to be evaluated. The algorithm maintains two values: alpha (the best value the maximizer can guarantee) and beta (the best value the minimizer can guarantee). When beta ≤ alpha, the remaining branches can be safely pruned because neither player would allow the game to reach those positions.
      </p>

      <div className="report-code-block">
{`// Alpha-Beta Pruning pseudocode
function alphaBeta(position, depth, alpha, beta, isMaximizing):
    if depth == 0 or game_over(position):
        return evaluate(position)
    
    if isMaximizing:
        maxEval = -INFINITY
        for each move in legal_moves(position):
            eval = alphaBeta(apply(position, move), depth - 1, alpha, beta, false)
            maxEval = max(maxEval, eval)
            alpha = max(alpha, eval)
            if beta <= alpha:
                break  // Beta cutoff — prune remaining branches
        return maxEval
    else:
        minEval = +INFINITY
        for each move in legal_moves(position):
            eval = alphaBeta(apply(position, move), depth - 1, alpha, beta, true)
            minEval = min(minEval, eval)
            beta = min(beta, eval)
            if beta <= alpha:
                break  // Alpha cutoff — prune remaining branches
        return minEval`}
      </div>

      <p className="report-paragraph">
        In the best case (with perfect move ordering), alpha-beta pruning reduces the effective branching factor from b to √b, meaning a search with branching factor 35 behaves as if it has a branching factor of approximately 5.9. This allows the algorithm to search roughly twice as deep in the same amount of time. In practice, with good but imperfect move ordering, alpha-beta pruning typically reduces the number of nodes evaluated by 80–95% compared to pure minimax.
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Pure Minimax</th>
            <th>Alpha-Beta (Best Case)</th>
            <th>Alpha-Beta (Average)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nodes at depth 4 (b=35)</td>
            <td>1,500,625</td>
            <td>~2,450 (b^(d/2))</td>
            <td>~125,000</td>
          </tr>
          <tr>
            <td>Nodes at depth 6</td>
            <td>~1.84 billion</td>
            <td>~85,750</td>
            <td>~15 million</td>
          </tr>
          <tr>
            <td>Time at depth 4</td>
            <td>~15 seconds</td>
            <td>~25 ms</td>
            <td>~1.2 seconds</td>
          </tr>
          <tr>
            <td>Memory usage</td>
            <td>O(bd) stack depth</td>
            <td>O(bd) stack depth</td>
            <td>O(bd) stack depth</td>
          </tr>
          <tr>
            <td>Optimality</td>
            <td>Guaranteed optimal</td>
            <td>Guaranteed optimal</td>
            <td>Guaranteed optimal</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">5.4 Position Evaluation Functions</h3>
      <p className="report-paragraph">
        The evaluation function is the "brain" of a chess engine — it assigns a numerical score to any given board position, estimating the relative advantage of one side over the other. The quality of the evaluation function directly determines the quality of play, as the search algorithm can only select moves based on the scores returned by the evaluator.
      </p>

      <p className="report-paragraph">
        <strong>Material Evaluation:</strong> The most fundamental component of any chess evaluation function is material counting. Each piece type is assigned a standard centipawn value: pawn = 100, knight = 320, bishop = 330, rook = 500, queen = 900, and king = ∞ (or 20,000 in practice). The material score is simply the sum of the values of all pieces on the board for each side. Despite its simplicity, material evaluation alone produces reasonable play because capturing opponent pieces is almost always advantageous.
      </p>

      <p className="report-paragraph">
        <strong>Piece-Square Tables (PSTs):</strong> Beyond material value, the position of each piece on the board significantly affects its usefulness. Piece-square tables encode this positional knowledge as an 8×8 grid of bonus/penalty values for each piece type. For example, a knight on e4 (center of the board) receives a significant bonus, while a knight on a1 (corner) receives a penalty. Similarly, the king's PST differs dramatically between the middlegame (encouraging castled positions) and the endgame (encouraging centralization). PSTs provide positional understanding at minimal computational cost — just a table lookup per piece.
      </p>

      <div className="report-code-block">
{`// Example: Knight Piece-Square Table (White's perspective)
// Values represent centipawn bonuses for each square
const KNIGHT_PST = [
  [-50, -40, -30, -30, -30, -30, -40, -50],  // Rank 8
  [-40, -20,   0,   0,   0,   0, -20, -40],  // Rank 7
  [-30,   0,  10,  15,  15,  10,   0, -30],  // Rank 6
  [-30,   5,  15,  20,  20,  15,   5, -30],  // Rank 5
  [-30,   0,  15,  20,  20,  15,   0, -30],  // Rank 4
  [-30,   5,  10,  15,  15,  10,   5, -30],  // Rank 3
  [-40, -20,   0,   5,   5,   0, -20, -40],  // Rank 2
  [-50, -40, -30, -30, -30, -30, -40, -50],  // Rank 1
];`}
      </div>

      <p className="report-paragraph">
        <strong>Advanced Evaluation Terms:</strong> Professional engines employ dozens of additional evaluation terms beyond material and PSTs. These include pawn structure analysis (isolated pawns, doubled pawns, passed pawns, pawn chains), king safety evaluation (pawn shelter, open files near king, attacking pieces), piece mobility (number of legal moves available), bishop pair bonus, rook on open/semi-open files, control of key squares, and endgame-specific terms (king-pawn distance, opposition, key squares). The Stockfish evaluation function, before adopting NNUE, contained over 100 individually tuned evaluation terms.
      </p>

      <h3 className="report-subsection-title">5.5 Web-Based Game Development</h3>
      <p className="report-paragraph">
        The landscape of web-based game development has undergone a dramatic transformation over the past decade. The deprecation of Adobe Flash in 2020 — which powered the majority of browser-based games — created a shift toward HTML5, Canvas, and WebGL-based game development. Modern web technologies provide the performance and APIs necessary for complex interactive applications that were previously only possible with native code or plugins.
      </p>

      <p className="report-paragraph">
        Several key web technologies enable browser-based chess applications:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Technology</th>
            <th>Purpose in Chess Apps</th>
            <th>Browser Support</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HTML5 Canvas / SVG</td>
            <td>Board rendering, piece animation</td>
            <td>Universal (IE9+)</td>
          </tr>
          <tr>
            <td>CSS Grid / Flexbox</td>
            <td>Board layout, responsive design</td>
            <td>Universal (IE10+)</td>
          </tr>
          <tr>
            <td>Web Workers</td>
            <td>Non-blocking AI computation</td>
            <td>Universal (IE10+)</td>
          </tr>
          <tr>
            <td>WebAssembly (WASM)</td>
            <td>High-performance engine execution</td>
            <td>Modern browsers (2017+)</td>
          </tr>
          <tr>
            <td>localStorage / IndexedDB</td>
            <td>Game persistence, settings storage</td>
            <td>Universal</td>
          </tr>
          <tr>
            <td>Drag and Drop API</td>
            <td>Piece movement interaction</td>
            <td>Universal (IE10+)</td>
          </tr>
          <tr>
            <td>Web Audio API</td>
            <td>Move sounds, notifications</td>
            <td>Modern browsers</td>
          </tr>
        </tbody>
      </table>

      <p className="report-paragraph">
        The Lichess platform, one of the most popular free chess servers, serves as an important case study for web-based chess applications. Built with Scala (backend) and TypeScript (frontend), Lichess handles millions of games daily while remaining entirely free and open-source. Its architecture demonstrates the viability of building high-performance, real-time chess applications using web technologies. The platform's client-side analysis board uses Stockfish compiled to WebAssembly, proving that powerful AI can run effectively in the browser.
      </p>

      <h3 className="report-subsection-title">5.6 React.js and Component Architecture</h3>
      <p className="report-paragraph">
        React.js, developed by Meta (formerly Facebook) and released as open-source in 2013, has become the dominant library for building user interfaces in web applications. React's component-based architecture, where UIs are composed of reusable, self-contained components, is particularly well-suited for chess applications. The chessboard, sidebar, move history, and dialog components can be developed, tested, and maintained independently while composing into a cohesive application.
      </p>

      <p className="report-paragraph">
        React's virtual DOM (Document Object Model) and reconciliation algorithm provide efficient rendering updates. When the game state changes (after a move), React computes the minimal set of DOM updates required, rather than re-rendering the entire page. For a chessboard with 64 squares, this means only the squares affected by the last move need to be updated in the DOM — typically 2–4 squares rather than all 64.
      </p>

      <p className="report-paragraph">
        The introduction of React Hooks in version 16.8 (2019) further enhanced React's suitability for complex state management. Custom hooks like <code>useChessGame</code> and <code>useStockfish</code> encapsulate stateful logic outside of components, enabling clean separation of concerns. The <code>useState</code>, <code>useEffect</code>, <code>useCallback</code>, and <code>useRef</code> hooks provide the building blocks for managing game state, side effects (AI computation), performance optimization, and mutable references (chess engine instances).
      </p>

      <h3 className="report-subsection-title">5.7 WebAssembly and Chess Engines</h3>
      <p className="report-paragraph">
        WebAssembly (WASM), standardized by the W3C in 2017, is a binary instruction format designed as a portable compilation target for high-level languages like C, C++, and Rust. WASM code executes at near-native speed in web browsers, making it possible to run computationally intensive applications — including chess engines — in the browser without plugins or server-side computation.
      </p>

      <p className="report-paragraph">
        The compilation of Stockfish to WebAssembly has made it possible to run a 3500+ Elo chess engine directly in the browser. The stockfish.js project provides pre-compiled WASM binaries and a JavaScript wrapper that communicates using the Universal Chess Interface (UCI) protocol. Key performance characteristics of WASM-compiled Stockfish include:
      </p>

      <ul className="report-list">
        <li><strong>Execution Speed:</strong> WASM runs at approximately 60–80% of native C++ speed, depending on the browser's WASM engine. This is sufficient for real-time chess play at all skill levels.</li>
        <li><strong>Memory Model:</strong> WASM uses a linear memory model with a configurable initial and maximum heap size. Stockfish typically requires 32–64 MB of WASM memory for its hash tables and search structures.</li>
        <li><strong>Threading:</strong> Multi-threaded WASM (using SharedArrayBuffer) enables parallel search on multi-core processors. However, this requires specific HTTP headers (Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy) that not all hosting configurations support.</li>
        <li><strong>Startup Time:</strong> WASM module compilation and instantiation typically takes 500ms–2s on first load. Browsers cache compiled modules for subsequent visits, reducing startup to under 100ms.</li>
      </ul>

      <h3 className="report-subsection-title">5.8 Human-Computer Interaction in Chess</h3>
      <p className="report-paragraph">
        The design of chess interfaces has been studied extensively in the HCI (Human-Computer Interaction) literature. Key principles applicable to web-based chess applications include:
      </p>

      <ul className="report-list">
        <li><strong>Direct Manipulation:</strong> Users should be able to interact with chess pieces directly (click, drag) rather than typing commands. This aligns with Shneiderman's principles of direct manipulation interfaces, where objects of interest are visible and manipulable.</li>
        <li><strong>Immediate Feedback:</strong> Every user action should produce immediate visual feedback. When a piece is selected, valid move squares should be highlighted instantly. When a move is made, the board should update without perceptible delay. "AI thinking" indicators should be shown during engine computation to maintain user awareness of system state.</li>
        <li><strong>Error Prevention:</strong> The interface should prevent illegal moves rather than allowing them and displaying error messages. By highlighting only valid destination squares, users are guided toward legal moves without experiencing frustrating rejection messages.</li>
        <li><strong>Undo Support:</strong> Nielsen's usability heuristic of "user control and freedom" is especially important in a learning context. The undo feature allows players to experiment with different moves without consequence, supporting exploratory learning.</li>
        <li><strong>Progressive Disclosure:</strong> Game information should be revealed progressively — the board and current position are primary; move history, captured pieces, and settings are secondary. This reduces cognitive load and allows users to focus on the game.</li>
      </ul>

      <p className="report-paragraph">
        Research by Charness et al. (2001) demonstrated that chess players of all skill levels benefit from clearly organized visual information. Higher-rated players are better at recognizing patterns, but all players benefit from consistent piece representation, clear square coloring, and immediate visual feedback for game state changes (check, last move highlighting).
      </p>

      <h3 className="report-subsection-title">5.9 Research Gap Identification</h3>
      <p className="report-paragraph">
        Based on the literature review, the following research gaps have been identified that this project aims to address:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Gap</th>
            <th>Description</th>
            <th>How This Project Addresses It</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lightweight Chess AI</td>
            <td>Most academic chess projects use heavyweight engines or basic random movers, with little middle ground</td>
            <td>Implements a custom minimax engine with tunable difficulty levels providing a spectrum from beginner to advanced</td>
          </tr>
          <tr>
            <td>Client-Side Architecture</td>
            <td>Few examples of fully client-side chess applications with AI, persistence, and production-quality UI</td>
            <td>Demonstrates complete client-side architecture using React, TypeScript, and localStorage</td>
          </tr>
          <tr>
            <td>Educational Chess Platform</td>
            <td>Existing platforms focus on competition rather than learning; undo features are rare in AI games</td>
            <td>Provides undo functionality and adjustable difficulty specifically designed for learning</td>
          </tr>
          <tr>
            <td>Modern Web Chess Stack</td>
            <td>Limited documentation of chess application architecture using modern React patterns and TypeScript</td>
            <td>Comprehensive documentation of component architecture, custom hooks, and type-safe development</td>
          </tr>
          <tr>
            <td>Performance Analysis</td>
            <td>Few academic papers analyze the performance characteristics of browser-based chess AI</td>
            <td>Detailed analysis of search tree performance, memory usage, and rendering efficiency</td>
          </tr>
        </tbody>
      </table>

      <div className="report-note">
        <p className="text-sm"><strong>Literature Review Summary:</strong> The review establishes that while chess AI is a well-studied field, the specific combination of browser-based execution, custom minimax AI with tunable difficulty, modern React/TypeScript architecture, and educational focus represents a unique contribution. This project builds upon decades of chess programming research while applying contemporary web development practices to create an accessible, privacy-respecting chess experience.</p>
      </div>
    </>
  );
};

export default LiteratureReviewSection;
