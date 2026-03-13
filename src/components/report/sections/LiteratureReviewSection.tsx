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
            <td>Belle, HiTech</td>
          </tr>
          <tr>
            <td>1990s</td>
            <td>Massive parallel search, opening books</td>
            <td>~2400–2800</td>
            <td>Deep Blue (1997)</td>
          </tr>
          <tr>
            <td>2000s</td>
            <td>Bitboard representations, advanced pruning</td>
            <td>~2800–3200</td>
            <td>Rybka, Stockfish</td>
          </tr>
          <tr>
            <td>2010s</td>
            <td>Neural network evaluation (NNUE)</td>
            <td>~3400–3600</td>
            <td>Stockfish NNUE, Leela Chess Zero</td>
          </tr>
          <tr>
            <td>2020s</td>
            <td>Hybrid classical + neural approaches</td>
            <td>~3600+</td>
            <td>Stockfish 16, AlphaZero derivatives</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">5.3 The Minimax Algorithm and Alpha-Beta Pruning</h3>
      <p className="report-paragraph">
        The minimax algorithm, first formalized by John von Neumann in 1928 in the context of game theory, forms the theoretical backbone of most classical chess engines. The algorithm operates on the principle that each player in a two-player zero-sum game attempts to minimize the maximum possible loss. In chess terms, the maximizing player (White) seeks to maximize the evaluation score, while the minimizing player (Black) seeks to minimize it.
      </p>
      <p className="report-paragraph">
        The basic minimax algorithm has a time complexity of O(b^d), where b is the average branching factor (approximately 35 in chess) and d is the search depth. For a 6-ply search, this results in approximately 35^6 ≈ 1.8 billion positions — clearly impractical without optimization.
      </p>
      <p className="report-paragraph">
        Alpha-beta pruning, introduced by John McCarthy and independently discovered by several researchers in the late 1950s, dramatically reduces the search space by eliminating branches that cannot possibly influence the final decision. In the best case (perfectly ordered moves), alpha-beta pruning reduces the effective branching factor from b to √b, allowing the engine to search twice as deep in the same time. Our implementation uses this optimization extensively:
      </p>

      <div className="report-code-block">
        <pre className="text-xs overflow-x-auto">
{`function minimax(position, depth, alpha, beta, maximizingPlayer):
    if depth == 0 or game_over:
        return evaluate(position)
    
    if maximizingPlayer:
        maxEval = -infinity
        for each move in position:
            eval = minimax(move, depth-1, alpha, beta, false)
            maxEval = max(maxEval, eval)
            alpha = max(alpha, eval)
            if beta <= alpha:
                break  // Beta cutoff - prune remaining branches
        return maxEval
    else:
        minEval = +infinity
        for each move in position:
            eval = minimax(move, depth-1, alpha, beta, true)
            minEval = min(minEval, eval)
            beta = min(beta, eval)
            if beta <= alpha:
                break  // Alpha cutoff - prune remaining branches
        return minEval`}
        </pre>
      </div>

      <h3 className="report-subsection-title">5.4 Position Evaluation Functions</h3>
      <p className="report-paragraph">
        The evaluation function is the heart of any chess engine, responsible for assigning a numerical score to a given board position. A well-designed evaluation function must balance computational efficiency with positional accuracy. The primary factors considered in evaluation functions include:
      </p>
      <ul className="report-list">
        <li><strong>Material Balance:</strong> The most fundamental factor, assigning point values to pieces (Pawn=100, Knight=320, Bishop=330, Rook=500, Queen=900). Research by Larry Kaufman (1999) refined these values based on statistical analysis of grandmaster games.</li>
        <li><strong>Piece-Square Tables (PSTs):</strong> First popularized by the Fruit chess engine, PSTs assign bonuses or penalties based on piece placement. For example, knights are valued higher in the center, and pawns gain value as they advance.</li>
        <li><strong>Pawn Structure:</strong> Evaluation of doubled pawns, isolated pawns, passed pawns, and pawn chains. Hans Berliner's work on pawn structure evaluation (1979) demonstrated its significance in positional play.</li>
        <li><strong>King Safety:</strong> Assessment of castling status, pawn shield integrity, and exposure to opponent attacks. This factor becomes increasingly important in middlegame positions.</li>
        <li><strong>Piece Mobility:</strong> The number of legal moves available to each piece, as proposed by Shannon's original evaluation criteria. Higher mobility generally correlates with better positional advantage.</li>
        <li><strong>Center Control:</strong> Occupation and control of central squares (d4, d5, e4, e5), which historically correlates with strategic advantage.</li>
      </ul>

      <p className="report-paragraph">
        Our implementation uses a simplified evaluation function incorporating material balance and piece-square tables, achieving a reasonable balance between playing strength and computational efficiency for a browser-based application.
      </p>

      <h3 className="report-subsection-title">5.5 Web-Based Game Development</h3>
      <p className="report-paragraph">
        The landscape of web-based game development has evolved significantly since the early days of Java applets and Flash-based games. Modern web technologies — including HTML5 Canvas, WebGL, WebAssembly, and Web Workers — have enabled the development of sophisticated games that run natively in the browser without plugins.
      </p>
      <p className="report-paragraph">
        Several notable web-based chess platforms have emerged in recent years, each contributing to the field:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Platform</th>
            <th>Technology</th>
            <th>Key Features</th>
            <th>Users (approx.)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lichess.org</td>
            <td>Scala, TypeScript</td>
            <td>Open-source, Stockfish analysis, puzzles</td>
            <td>10M+ monthly</td>
          </tr>
          <tr>
            <td>Chess.com</td>
            <td>PHP, JavaScript</td>
            <td>Lessons, tournaments, social features</td>
            <td>100M+ registered</td>
          </tr>
          <tr>
            <td>Chess24</td>
            <td>JavaScript</td>
            <td>Live broadcasts, video series</td>
            <td>5M+ registered</td>
          </tr>
          <tr>
            <td>ChessBase</td>
            <td>C++, Web</td>
            <td>Database, analysis, publishing</td>
            <td>2M+ users</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">5.6 React.js and Component-Based Architecture</h3>
      <p className="report-paragraph">
        React.js, developed by Jordan Walke at Facebook (now Meta) and released as open source in 2013, revolutionized frontend development by introducing a declarative, component-based paradigm. The Virtual DOM diffing algorithm, described in the React Fiber Architecture paper (2017), enables efficient UI updates by minimizing direct DOM manipulations.
      </p>
      <p className="report-paragraph">
        The introduction of React Hooks in version 16.8 (February 2019) fundamentally changed how state management and side effects are handled in React applications. Custom hooks, such as the <code>useChessGame</code> and <code>useStockfish</code> hooks used in this project, enable the extraction and reuse of stateful logic across components — a pattern extensively documented by Dan Abramov and the React core team.
      </p>
      <p className="report-paragraph">
        TypeScript integration with React has become the industry standard for large-scale applications. A 2023 State of JS survey revealed that 89% of React developers use TypeScript, citing improved code quality, better IDE support, and reduced runtime errors as primary benefits.
      </p>

      <h3 className="report-subsection-title">5.7 WebAssembly and Chess Engines</h3>
      <p className="report-paragraph">
        WebAssembly (WASM), introduced as a W3C standard in 2017, enables near-native execution speed for compiled languages in the browser. The Stockfish chess engine was among the first major applications to be compiled to WebAssembly, demonstrating the technology's viability for computationally intensive tasks.
      </p>
      <p className="report-paragraph">
        The WASM compilation of Stockfish (stockfish.js) achieves approximately 60-70% of native execution speed, enabling search depths of 15-20 plies in reasonable time frames (1-5 seconds) on modern hardware. This performance level is sufficient for providing a challenging opponent at all skill levels, from beginner to grandmaster.
      </p>
      <p className="report-paragraph">
        Web Workers, used in conjunction with WASM, prevent the chess engine's computations from blocking the main UI thread. This separation is critical for maintaining responsive user interactions while the engine performs deep position analysis. The Universal Chess Interface (UCI) protocol, standardized by Stefan Meyer-Kahlen, provides a text-based communication channel between the UI and the engine running in a Web Worker.
      </p>

      <h3 className="report-subsection-title">5.8 Human-Computer Interaction in Chess</h3>
      <p className="report-paragraph">
        Research in human-computer interaction (HCI) for chess applications has identified several key principles for effective interface design. Charness et al. (2001) demonstrated that visual feedback for legal moves significantly reduces error rates among novice players. Our implementation incorporates move highlighting, last-move indicators, and check warnings based on these findings.
      </p>
      <p className="report-paragraph">
        Studies by Gobet and Simon (2000) on expert chess perception showed that skilled players recognize patterns rather than individual pieces, suggesting that board representation should maintain standard proportions and piece designs familiar to experienced players. This insight informed our use of Unicode chess symbols with conventional sizing and spacing.
      </p>

      <div className="report-info-box">
        <p className="text-sm font-semibold mb-2">Key Literature Summary:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Shannon (1950) — Foundational chess programming theory</li>
          <li>Knuth & Moore (1975) — Alpha-beta pruning formal analysis</li>
          <li>Berliner (1979) — Pawn structure evaluation</li>
          <li>Kaufman (1999) — Material value statistical analysis</li>
          <li>Campbell et al. (2002) — Deep Blue system design</li>
          <li>Silver et al. (2018) — AlphaZero general reinforcement learning</li>
          <li>React Documentation (2024) — Hooks and component patterns</li>
          <li>WebAssembly Specification (2023) — W3C standard for browser computation</li>
        </ul>
      </div>

      <h3 className="report-subsection-title">5.9 Research Gap Identification</h3>
      <p className="report-paragraph">
        While numerous chess platforms exist, a significant gap remains in the availability of lightweight, open-source, browser-based chess applications that combine the following characteristics:
      </p>
      <ul className="report-list">
        <li>No server-side dependencies for core gameplay (fully client-side)</li>
        <li>Adjustable AI difficulty with transparent difficulty parameters</li>
        <li>Modern React architecture with TypeScript type safety</li>
        <li>Responsive design supporting all device form factors</li>
        <li>Educational focus with move history and undo capabilities</li>
        <li>Clean, maintainable codebase suitable for academic study and extension</li>
      </ul>
      <p className="report-paragraph">
        This project addresses these gaps by providing a comprehensive, well-documented chess application that serves both as a functional game and as a reference implementation for web-based game development with AI integration. The codebase is designed to be extensible, allowing future researchers and developers to build upon the foundation established here.
      </p>
    </>
  );
};

export default LiteratureReviewSection;
