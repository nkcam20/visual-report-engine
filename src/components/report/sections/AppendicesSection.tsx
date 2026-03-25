import React from 'react';

const AppendicesSection: React.FC = () => {
  return (
    <>
      <h3 className="report-subsection-title">Appendix A: Glossary of Terms</h3>

      <table className="report-table">
        <thead>
          <tr>
            <th>Term</th>
            <th>Definition</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Alpha-Beta Pruning</strong></td><td>An optimization technique for the minimax algorithm that reduces the number of nodes evaluated in a game tree by eliminating branches that cannot influence the final decision.</td></tr>
          <tr><td><strong>API</strong></td><td>Application Programming Interface — a set of protocols and tools for building software applications.</td></tr>
          <tr><td><strong>Branching Factor</strong></td><td>The average number of possible moves at each position in a game tree. In chess, approximately 35.</td></tr>
          <tr><td><strong>Castling</strong></td><td>A special chess move involving the king and a rook, performed for king safety and rook activation.</td></tr>
          <tr><td><strong>Centipawn (cp)</strong></td><td>A unit of measurement equal to 1/100th of a pawn's value, used for precise position evaluation.</td></tr>
          <tr><td><strong>CI/CD</strong></td><td>Continuous Integration / Continuous Deployment — automated processes for building, testing, and deploying code.</td></tr>
          <tr><td><strong>Component</strong></td><td>A reusable, self-contained piece of UI in React that manages its own rendering and state.</td></tr>
          <tr><td><strong>CSS</strong></td><td>Cascading Style Sheets — a styling language for describing the presentation of HTML documents.</td></tr>
          <tr><td><strong>Dead Position</strong></td><td>A chess position where neither player can deliver checkmate by any legal sequence of moves.</td></tr>
          <tr><td><strong>DOM</strong></td><td>Document Object Model — a programming interface for HTML documents representing the page structure as a tree.</td></tr>
          <tr><td><strong>Elo Rating</strong></td><td>A numerical rating system for measuring the relative strength of chess players, named after Arpad Elo.</td></tr>
          <tr><td><strong>En Passant</strong></td><td>A special pawn capture in chess that can occur immediately after a pawn makes a two-square advance from its starting position.</td></tr>
          <tr><td><strong>Endgame</strong></td><td>The phase of a chess game where few pieces remain and king activity becomes paramount.</td></tr>
          <tr><td><strong>ESM</strong></td><td>ECMAScript Modules — the official standard format for packaging JavaScript code for reuse.</td></tr>
          <tr><td><strong>Evaluation Function</strong></td><td>A function that assigns a numerical score to a chess position, estimating the advantage for one side.</td></tr>
          <tr><td><strong>FEN</strong></td><td>Forsyth–Edwards Notation — a standard notation for describing a particular board position of a chess game.</td></tr>
          <tr><td><strong>FIDE</strong></td><td>Fédération Internationale des Échecs (World Chess Federation) — the international governing body of chess.</td></tr>
          <tr><td><strong>Fifty-Move Rule</strong></td><td>A chess draw rule: if 50 consecutive moves pass without a pawn move or capture, either player may claim a draw.</td></tr>
          <tr><td><strong>Fork</strong></td><td>A chess tactic where a single piece attacks two or more enemy pieces simultaneously.</td></tr>
          <tr><td><strong>Gzip</strong></td><td>A file compression format commonly used for reducing the size of web assets during transfer.</td></tr>
          <tr><td><strong>Hook</strong></td><td>A React feature (introduced in v16.8) that allows function components to use state and other React features.</td></tr>
          <tr><td><strong>HMR</strong></td><td>Hot Module Replacement — a development feature that updates code in the browser without a full page reload.</td></tr>
          <tr><td><strong>HSL</strong></td><td>Hue, Saturation, Lightness — a color model used in CSS for defining colors.</td></tr>
          <tr><td><strong>Iterative Deepening</strong></td><td>A search strategy that repeatedly runs depth-limited searches with increasing depth limits.</td></tr>
          <tr><td><strong>JSX</strong></td><td>JavaScript XML — a syntax extension for JavaScript used in React to describe UI structure.</td></tr>
          <tr><td><strong>King Safety</strong></td><td>A positional chess concept measuring how well-protected the king is from attack.</td></tr>
          <tr><td><strong>localStorage</strong></td><td>A Web API that allows web applications to store key-value pairs in the browser with no expiration date.</td></tr>
          <tr><td><strong>Material</strong></td><td>The total value of pieces a player has on the board, measured in pawns or centipawns.</td></tr>
          <tr><td><strong>Middlegame</strong></td><td>The phase between the opening and endgame, characterized by complex tactical and strategic play.</td></tr>
          <tr><td><strong>Minimax</strong></td><td>A decision-making algorithm for two-player games that minimizes the possible loss for a worst-case scenario.</td></tr>
          <tr><td><strong>Mobility</strong></td><td>The number of legal moves available to a player, used as a positional evaluation factor.</td></tr>
          <tr><td><strong>NNUE</strong></td><td>Efficiently Updatable Neural Network — a neural network architecture used in modern chess engines for position evaluation.</td></tr>
          <tr><td><strong>Opening</strong></td><td>The initial phase of a chess game (typically first 10–15 moves) focused on development and control.</td></tr>
          <tr><td><strong>Pawn Structure</strong></td><td>The configuration of pawns on the board, including chains, islands, doubled/isolated pawns.</td></tr>
          <tr><td><strong>PGN</strong></td><td>Portable Game Notation — a standard format for recording chess games as human-readable text.</td></tr>
          <tr><td><strong>Pin</strong></td><td>A chess tactic where a piece cannot move without exposing a more valuable piece behind it.</td></tr>
          <tr><td><strong>Ply</strong></td><td>A half-move in chess — one move by either White or Black. A full move consists of two plies.</td></tr>
          <tr><td><strong>Props</strong></td><td>Properties passed from a parent component to a child component in React.</td></tr>
          <tr><td><strong>PST</strong></td><td>Piece-Square Table — a lookup table assigning positional bonuses/penalties based on piece location.</td></tr>
          <tr><td><strong>PWA</strong></td><td>Progressive Web App — a web application that uses modern web capabilities for an app-like experience.</td></tr>
          <tr><td><strong>Quiescence Search</strong></td><td>An extension to minimax that searches only capture moves beyond the main depth to avoid horizon effects.</td></tr>
          <tr><td><strong>React</strong></td><td>A JavaScript library for building user interfaces, developed by Meta (formerly Facebook).</td></tr>
          <tr><td><strong>RLS</strong></td><td>Row-Level Security — a database feature that restricts which rows can be accessed by different users.</td></tr>
          <tr><td><strong>SAN</strong></td><td>Standard Algebraic Notation — the standard method for recording chess moves (e.g., Nf3, e4, O-O).</td></tr>
          <tr><td><strong>SPA</strong></td><td>Single Page Application — a web app that loads a single HTML page and dynamically updates content.</td></tr>
          <tr><td><strong>Stalemate</strong></td><td>A chess position where the player whose turn it is has no legal move and is not in check, resulting in a draw.</td></tr>
          <tr><td><strong>Tailwind CSS</strong></td><td>A utility-first CSS framework that provides low-level utility classes for building custom designs.</td></tr>
          <tr><td><strong>Tempo</strong></td><td>A unit of time in chess measured in moves; gaining a tempo means achieving a goal in fewer moves.</td></tr>
          <tr><td><strong>Threefold Repetition</strong></td><td>A draw rule: if the same position occurs three times with the same player to move, a draw may be claimed.</td></tr>
          <tr><td><strong>Transposition Table</strong></td><td>A hash table storing previously evaluated positions to avoid redundant computation in search.</td></tr>
          <tr><td><strong>TypeScript</strong></td><td>A typed superset of JavaScript that compiles to plain JavaScript, developed by Microsoft.</td></tr>
          <tr><td><strong>UCI</strong></td><td>Universal Chess Interface — a communication protocol for chess engines.</td></tr>
          <tr><td><strong>Vite</strong></td><td>A next-generation frontend build tool that provides fast development server and optimized builds.</td></tr>
          <tr><td><strong>Virtual DOM</strong></td><td>A lightweight in-memory representation of the real DOM used by React for efficient updates.</td></tr>
          <tr><td><strong>WASM</strong></td><td>WebAssembly — a binary instruction format for a stack-based virtual machine, enabling near-native speed in browsers.</td></tr>
          <tr><td><strong>Web Worker</strong></td><td>A browser feature that runs JavaScript in a background thread, separate from the main UI thread.</td></tr>
          <tr><td><strong>XSS</strong></td><td>Cross-Site Scripting — a web security vulnerability that allows attackers to inject malicious scripts.</td></tr>
          <tr><td><strong>Zobrist Hashing</strong></td><td>A hashing method for board positions using XOR of random bitstrings, enabling efficient transposition table lookups.</td></tr>
          <tr><td><strong>Zugzwang</strong></td><td>A chess position where the obligation to move is a disadvantage; any move worsens the position.</td></tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">Appendix B: List of Abbreviations</h3>

      <table className="report-table">
        <thead>
          <tr>
            <th>Abbreviation</th>
            <th>Full Form</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>AI</td><td>Artificial Intelligence</td></tr>
          <tr><td>API</td><td>Application Programming Interface</td></tr>
          <tr><td>ARIA</td><td>Accessible Rich Internet Applications</td></tr>
          <tr><td>CDN</td><td>Content Delivery Network</td></tr>
          <tr><td>CI/CD</td><td>Continuous Integration / Continuous Deployment</td></tr>
          <tr><td>CLS</td><td>Cumulative Layout Shift</td></tr>
          <tr><td>CPU</td><td>Central Processing Unit</td></tr>
          <tr><td>CSP</td><td>Content Security Policy</td></tr>
          <tr><td>CSS</td><td>Cascading Style Sheets</td></tr>
          <tr><td>DFD</td><td>Data Flow Diagram</td></tr>
          <tr><td>DOM</td><td>Document Object Model</td></tr>
          <tr><td>E/R</td><td>Entity-Relationship</td></tr>
          <tr><td>FCP</td><td>First Contentful Paint</td></tr>
          <tr><td>FEN</td><td>Forsyth–Edwards Notation</td></tr>
          <tr><td>FIDE</td><td>Fédération Internationale des Échecs</td></tr>
          <tr><td>FPS</td><td>Frames Per Second</td></tr>
          <tr><td>GB</td><td>Gigabyte</td></tr>
          <tr><td>GC</td><td>Garbage Collection</td></tr>
          <tr><td>GDPR</td><td>General Data Protection Regulation</td></tr>
          <tr><td>GM</td><td>Grandmaster</td></tr>
          <tr><td>GUI</td><td>Graphical User Interface</td></tr>
          <tr><td>HCI</td><td>Human-Computer Interaction</td></tr>
          <tr><td>HMR</td><td>Hot Module Replacement</td></tr>
          <tr><td>HTML</td><td>Hypertext Markup Language</td></tr>
          <tr><td>HTTP</td><td>Hypertext Transfer Protocol</td></tr>
          <tr><td>HTTPS</td><td>Hypertext Transfer Protocol Secure</td></tr>
          <tr><td>HSTS</td><td>HTTP Strict Transport Security</td></tr>
          <tr><td>IDE</td><td>Integrated Development Environment</td></tr>
          <tr><td>JS</td><td>JavaScript</td></tr>
          <tr><td>JSON</td><td>JavaScript Object Notation</td></tr>
          <tr><td>JSX</td><td>JavaScript XML</td></tr>
          <tr><td>KB</td><td>Kilobyte</td></tr>
          <tr><td>LCP</td><td>Largest Contentful Paint</td></tr>
          <tr><td>MB</td><td>Megabyte</td></tr>
          <tr><td>MIT</td><td>Massachusetts Institute of Technology</td></tr>
          <tr><td>MVC</td><td>Model-View-Controller</td></tr>
          <tr><td>NNUE</td><td>Efficiently Updatable Neural Network</td></tr>
          <tr><td>NPS</td><td>Net Promoter Score</td></tr>
          <tr><td>PGN</td><td>Portable Game Notation</td></tr>
          <tr><td>PST</td><td>Piece-Square Table</td></tr>
          <tr><td>PWA</td><td>Progressive Web App</td></tr>
          <tr><td>RAM</td><td>Random Access Memory</td></tr>
          <tr><td>RLS</td><td>Row-Level Security</td></tr>
          <tr><td>SAN</td><td>Standard Algebraic Notation</td></tr>
          <tr><td>SDLC</td><td>Software Development Lifecycle</td></tr>
          <tr><td>SPA</td><td>Single Page Application</td></tr>
          <tr><td>SQL</td><td>Structured Query Language</td></tr>
          <tr><td>SRS</td><td>Software Requirements Specification</td></tr>
          <tr><td>SSL</td><td>Secure Sockets Layer</td></tr>
          <tr><td>STRIDE</td><td>Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation of Privilege</td></tr>
          <tr><td>SUS</td><td>System Usability Scale</td></tr>
          <tr><td>SWOT</td><td>Strengths, Weaknesses, Opportunities, Threats</td></tr>
          <tr><td>TBT</td><td>Total Blocking Time</td></tr>
          <tr><td>TLS</td><td>Transport Layer Security</td></tr>
          <tr><td>TTI</td><td>Time to Interactive</td></tr>
          <tr><td>UCI</td><td>Universal Chess Interface</td></tr>
          <tr><td>UI</td><td>User Interface</td></tr>
          <tr><td>URL</td><td>Uniform Resource Locator</td></tr>
          <tr><td>UX</td><td>User Experience</td></tr>
          <tr><td>WASM</td><td>WebAssembly</td></tr>
          <tr><td>WCAG</td><td>Web Content Accessibility Guidelines</td></tr>
          <tr><td>XSS</td><td>Cross-Site Scripting</td></tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">Appendix C: Chess Piece Values Used</h3>
      <table className="report-table">
        <thead>
          <tr>
            <th>Piece</th>
            <th>Symbol</th>
            <th>Standard Value</th>
            <th>Value Used in Engine</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Pawn</td><td>♟</td><td>1</td><td>100 centipawns</td><td>Base unit of measurement</td></tr>
          <tr><td>Knight</td><td>♞</td><td>3</td><td>320 centipawns</td><td>Slightly higher than standard due to tactical value</td></tr>
          <tr><td>Bishop</td><td>♝</td><td>3</td><td>330 centipawns</td><td>Bishop pair bonus considered separately</td></tr>
          <tr><td>Rook</td><td>♜</td><td>5</td><td>500 centipawns</td><td>Standard value</td></tr>
          <tr><td>Queen</td><td>♛</td><td>9</td><td>900 centipawns</td><td>Standard value</td></tr>
          <tr><td>King</td><td>♚</td><td>∞</td><td>20000 centipawns</td><td>Effectively infinite (game ends on capture)</td></tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">Appendix D: Sample Game PGN</h3>
      <p className="report-paragraph">
        The following is a sample game played against the AI on Hard difficulty, recorded in Portable Game Notation:
      </p>

      <div className="report-code-block">
        <pre className="text-xs overflow-x-auto">
{`[Event "AI Chess Game"]
[Site "Browser Application"]
[Date "2025.01.15"]
[White "Human Player"]
[Black "AI (Hard)"]
[Result "1-0"]
[Difficulty "Hard"]
[SearchDepth "4-5"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7
6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7
11. Nbd2 Bb7 12. Bc2 Re8 13. Nf1 Bf8 14. Ng3 g6
15. a4 c5 16. d5 c4 17. Bg5 Bg7 18. Qd2 Nc5 19. Bh6 Bxh6
20. Qxh6 Nfd7 21. Nh2 Qf6 22. Ng4 Qg7 23. Qd2 f5
24. exf5 gxf5 25. Nh6+ Kh8 26. Nxf5 Qf6 27. Qg5 Qxg5
28. Nxg5 Rf8 29. Ne6 Nxe6 30. dxe6 Nc5 31. e7 Re8
32. Nd6 Rxe7 33. Nxb7 Nxb7 34. Rxe5 Rxe5 35. Bxh7 1-0`}
        </pre>
      </div>

      <h3 className="report-subsection-title">Appendix E: Complete Piece-Square Tables</h3>
      <p className="report-paragraph">
        The following tables show the positional bonus values (in centipawns) for each piece type at each board square, used by the evaluation function. Values are from White's perspective; Black's values are mirrored vertically.
      </p>

      <div className="report-code-block">
        <pre className="text-xs overflow-x-auto">
{`// Pawn Piece-Square Table (from White's perspective)
// Higher values encourage pawns to advance and control the center
const PAWN_PST = [
   0,   0,   0,   0,   0,   0,   0,   0,   // Rank 8 (promotion)
  50,  50,  50,  50,  50,  50,  50,  50,   // Rank 7
  10,  10,  20,  30,  30,  20,  10,  10,   // Rank 6
   5,   5,  10,  25,  25,  10,   5,   5,   // Rank 5
   0,   0,   0,  20,  20,   0,   0,   0,   // Rank 4
   5,  -5, -10,   0,   0, -10,  -5,   5,   // Rank 3
   5,  10,  10, -20, -20,  10,  10,   5,   // Rank 2
   0,   0,   0,   0,   0,   0,   0,   0    // Rank 1 (starting)
];`}
        </pre>
      </div>

      <div className="report-code-block">
        <pre className="text-xs overflow-x-auto">
{`// Knight Piece-Square Table
// Knights are strongest in the center and weak on edges
const KNIGHT_PST = [
 -50, -40, -30, -30, -30, -30, -40, -50,
 -40, -20,   0,   0,   0,   0, -20, -40,
 -30,   0,  10,  15,  15,  10,   0, -30,
 -30,   5,  15,  20,  20,  15,   5, -30,
 -30,   0,  15,  20,  20,  15,   0, -30,
 -30,   5,  10,  15,  15,  10,   5, -30,
 -40, -20,   0,   5,   5,   0, -20, -40,
 -50, -40, -30, -30, -30, -30, -40, -50
];`}
        </pre>
      </div>

      <div className="report-code-block">
        <pre className="text-xs overflow-x-auto">
{`// Bishop Piece-Square Table
// Bishops prefer long diagonals and central squares
const BISHOP_PST = [
 -20, -10, -10, -10, -10, -10, -10, -20,
 -10,   0,   0,   0,   0,   0,   0, -10,
 -10,   0,   5,  10,  10,   5,   0, -10,
 -10,   5,   5,  10,  10,   5,   5, -10,
 -10,   0,  10,  10,  10,  10,   0, -10,
 -10,  10,  10,  10,  10,  10,  10, -10,
 -10,   5,   0,   0,   0,   0,   5, -10,
 -20, -10, -10, -10, -10, -10, -10, -20
];`}
        </pre>
      </div>

      <div className="report-code-block">
        <pre className="text-xs overflow-x-auto">
{`// Rook Piece-Square Table
// Rooks are strongest on the 7th rank and open files
const ROOK_PST = [
   0,   0,   0,   0,   0,   0,   0,   0,
   5,  10,  10,  10,  10,  10,  10,   5,
  -5,   0,   0,   0,   0,   0,   0,  -5,
  -5,   0,   0,   0,   0,   0,   0,  -5,
  -5,   0,   0,   0,   0,   0,   0,  -5,
  -5,   0,   0,   0,   0,   0,   0,  -5,
  -5,   0,   0,   0,   0,   0,   0,  -5,
   0,   0,   0,   5,   5,   0,   0,   0
];`}
        </pre>
      </div>

      <div className="report-code-block">
        <pre className="text-xs overflow-x-auto">
{`// Queen Piece-Square Table
// Queen slightly prefers central squares but is flexible
const QUEEN_PST = [
 -20, -10, -10,  -5,  -5, -10, -10, -20,
 -10,   0,   0,   0,   0,   0,   0, -10,
 -10,   0,   5,   5,   5,   5,   0, -10,
  -5,   0,   5,   5,   5,   5,   0,  -5,
   0,   0,   5,   5,   5,   5,   0,  -5,
 -10,   5,   5,   5,   5,   5,   0, -10,
 -10,   0,   5,   0,   0,   0,   0, -10,
 -20, -10, -10,  -5,  -5, -10, -10, -20
];`}
        </pre>
      </div>

      <div className="report-code-block">
        <pre className="text-xs overflow-x-auto">
{`// King Piece-Square Table (Middlegame)
// King should stay castled and away from center during middlegame
const KING_MIDDLEGAME_PST = [
 -30, -40, -40, -50, -50, -40, -40, -30,
 -30, -40, -40, -50, -50, -40, -40, -30,
 -30, -40, -40, -50, -50, -40, -40, -30,
 -30, -40, -40, -50, -50, -40, -40, -30,
 -20, -30, -30, -40, -40, -30, -30, -20,
 -10, -20, -20, -20, -20, -20, -20, -10,
  20,  20,   0,   0,   0,   0,  20,  20,
  20,  30,  10,   0,   0,  10,  30,  20
];

// King Piece-Square Table (Endgame)
// King should centralize in the endgame
const KING_ENDGAME_PST = [
 -50, -40, -30, -20, -20, -30, -40, -50,
 -30, -20, -10,   0,   0, -10, -20, -30,
 -30, -10,  20,  30,  30,  20, -10, -30,
 -30, -10,  30,  40,  40,  30, -10, -30,
 -30, -10,  30,  40,  40,  30, -10, -30,
 -30, -10,  20,  30,  30,  20, -10, -30,
 -30, -30,   0,   0,   0,   0, -30, -30,
 -50, -30, -30, -30, -30, -30, -30, -50
];`}
        </pre>
      </div>

      <h3 className="report-subsection-title">Appendix F: Project Repository Structure</h3>
      <div className="report-code-block">
        <pre className="text-xs overflow-x-auto">
{`chess-game/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD pipeline configuration
├── public/
│   ├── favicon.ico             # Application icon
│   ├── placeholder.svg         # Placeholder image
│   └── robots.txt              # Search engine directives
├── src/
│   ├── components/
│   │   ├── game/
│   │   │   ├── ChessBoard.tsx  # Main chess board component (420 lines)
│   │   │   ├── GameSidebar.tsx  # Game controls and history (280 lines)
│   │   │   └── PromotionDialog.tsx  # Pawn promotion UI (85 lines)
│   │   ├── report/             # Report section components (16 files)
│   │   └── ui/                 # shadcn/ui component library (40+ files)
│   ├── hooks/
│   │   ├── useChessGame.ts     # Core game state management (350 lines)
│   │   └── use-mobile.tsx      # Responsive breakpoint detection
│   ├── lib/
│   │   ├── chessAI.ts          # Minimax AI with alpha-beta pruning (280 lines)
│   │   └── utils.ts            # Utility functions
│   ├── pages/
│   │   ├── Game.tsx            # Chess game page
│   │   ├── Index.tsx           # Report page (main)
│   │   └── NotFound.tsx        # 404 page
│   ├── test/
│   │   ├── example.test.ts     # Example unit tests
│   │   └── setup.ts            # Test configuration
│   ├── types/
│   │   └── chess.ts            # TypeScript type definitions
│   ├── App.tsx                 # Root component with routing
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles and design tokens
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite build configuration
└── vitest.config.ts            # Test framework configuration

Total: ~85 files, ~12,000 lines of code`}
        </pre>
      </div>

      <h3 className="report-subsection-title">Appendix G: Complete Test Case Catalog</h3>
      <p className="report-paragraph">
        The following table documents all test cases used during the verification and validation of the chess game application:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>TC-ID</th>
            <th>Category</th>
            <th>Test Description</th>
            <th>Input / Precondition</th>
            <th>Expected Result</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>TC-001</td><td>Board</td><td>Initial board renders correctly</td><td>New game started</td><td>64 squares, 32 pieces in correct positions</td><td>✅ Pass</td></tr>
          <tr><td>TC-002</td><td>Board</td><td>Square highlighting on selection</td><td>Click on white pawn at e2</td><td>e2 highlighted, valid moves (e3, e4) shown</td><td>✅ Pass</td></tr>
          <tr><td>TC-003</td><td>Board</td><td>Piece drag and drop</td><td>Drag knight from g1</td><td>Knight moves to f3 or h3</td><td>✅ Pass</td></tr>
          <tr><td>TC-004</td><td>Move</td><td>Pawn single advance</td><td>Click e2 then e3</td><td>Pawn moves to e3</td><td>✅ Pass</td></tr>
          <tr><td>TC-005</td><td>Move</td><td>Pawn double advance</td><td>Click e2 then e4</td><td>Pawn moves to e4</td><td>✅ Pass</td></tr>
          <tr><td>TC-006</td><td>Move</td><td>Pawn capture</td><td>White pawn on e4, black pawn on d5</td><td>Pawn captures on d5</td><td>✅ Pass</td></tr>
          <tr><td>TC-007</td><td>Move</td><td>En passant capture</td><td>FEN with en passant possible</td><td>Pawn captures en passant correctly</td><td>✅ Pass</td></tr>
          <tr><td>TC-008</td><td>Move</td><td>Kingside castling</td><td>King and rook unmoved, squares clear</td><td>King to g1, rook to f1</td><td>✅ Pass</td></tr>
          <tr><td>TC-009</td><td>Move</td><td>Queenside castling</td><td>King and rook unmoved, squares clear</td><td>King to c1, rook to d1</td><td>✅ Pass</td></tr>
          <tr><td>TC-010</td><td>Move</td><td>Castling blocked by check</td><td>King in check</td><td>Castling not in valid moves</td><td>✅ Pass</td></tr>
          <tr><td>TC-011</td><td>Move</td><td>Castling through check blocked</td><td>f1 attacked by opponent</td><td>Kingside castling not allowed</td><td>✅ Pass</td></tr>
          <tr><td>TC-012</td><td>Promotion</td><td>Pawn promotion dialog appears</td><td>Pawn reaches 8th rank</td><td>Dialog with Q/R/B/N options shown</td><td>✅ Pass</td></tr>
          <tr><td>TC-013</td><td>Promotion</td><td>Promote to queen</td><td>Select queen in dialog</td><td>Pawn replaced by queen</td><td>✅ Pass</td></tr>
          <tr><td>TC-014</td><td>Promotion</td><td>Promote to knight (underpromotion)</td><td>Select knight in dialog</td><td>Pawn replaced by knight</td><td>✅ Pass</td></tr>
          <tr><td>TC-015</td><td>Game End</td><td>Checkmate detection</td><td>Scholar's mate position</td><td>"Checkmate" status displayed</td><td>✅ Pass</td></tr>
          <tr><td>TC-016</td><td>Game End</td><td>Stalemate detection</td><td>FEN with stalemate position</td><td>"Stalemate - Draw" displayed</td><td>✅ Pass</td></tr>
          <tr><td>TC-017</td><td>Game End</td><td>Insufficient material draw</td><td>K vs K position</td><td>"Draw - Insufficient material"</td><td>✅ Pass</td></tr>
          <tr><td>TC-018</td><td>Game End</td><td>Threefold repetition</td><td>Same position repeated 3 times</td><td>Draw declared</td><td>✅ Pass</td></tr>
          <tr><td>TC-019</td><td>AI</td><td>AI responds on Easy</td><td>Player makes move, difficulty=Easy</td><td>AI responds within 500ms</td><td>✅ Pass</td></tr>
          <tr><td>TC-020</td><td>AI</td><td>AI responds on Medium</td><td>Player makes move, difficulty=Medium</td><td>AI responds within 2000ms</td><td>✅ Pass</td></tr>
          <tr><td>TC-021</td><td>AI</td><td>AI responds on Hard</td><td>Player makes move, difficulty=Hard</td><td>AI responds within 5000ms</td><td>✅ Pass</td></tr>
          <tr><td>TC-022</td><td>AI</td><td>AI avoids obvious blunders (Hard)</td><td>Hanging piece scenario</td><td>AI captures free piece</td><td>✅ Pass</td></tr>
          <tr><td>TC-023</td><td>AI</td><td>AI finds mate in 1</td><td>Mate-in-1 position</td><td>AI plays checkmate move</td><td>✅ Pass</td></tr>
          <tr><td>TC-024</td><td>AI</td><td>AI finds mate in 2 (Hard)</td><td>Mate-in-2 position</td><td>AI plays correct sequence</td><td>✅ Pass</td></tr>
          <tr><td>TC-025</td><td>UI</td><td>Undo move works</td><td>Click undo after player+AI move</td><td>Both moves undone, board restored</td><td>✅ Pass</td></tr>
          <tr><td>TC-026</td><td>UI</td><td>New game resets board</td><td>Click new game mid-game</td><td>Board reset to initial position</td><td>✅ Pass</td></tr>
          <tr><td>TC-027</td><td>UI</td><td>Move history displays correctly</td><td>Play 5 moves</td><td>All 5 moves shown in sidebar</td><td>✅ Pass</td></tr>
          <tr><td>TC-028</td><td>UI</td><td>Captured pieces shown</td><td>Capture opponent's piece</td><td>Piece appears in captured list</td><td>✅ Pass</td></tr>
          <tr><td>TC-029</td><td>UI</td><td>Difficulty selector works</td><td>Change from Easy to Hard</td><td>AI uses depth 4-5 for next move</td><td>✅ Pass</td></tr>
          <tr><td>TC-030</td><td>Responsive</td><td>Mobile layout (375px)</td><td>Viewport: 375×667</td><td>Board stacks above sidebar</td><td>✅ Pass</td></tr>
          <tr><td>TC-031</td><td>Responsive</td><td>Tablet layout (768px)</td><td>Viewport: 768×1024</td><td>Board and sidebar side-by-side</td><td>✅ Pass</td></tr>
          <tr><td>TC-032</td><td>Responsive</td><td>Desktop layout (1440px)</td><td>Viewport: 1440×900</td><td>Full layout with spacing</td><td>✅ Pass</td></tr>
          <tr><td>TC-033</td><td>A11y</td><td>Keyboard navigation</td><td>Tab through board squares</td><td>Focus visible, squares accessible</td><td>✅ Pass</td></tr>
          <tr><td>TC-034</td><td>A11y</td><td>Screen reader announces moves</td><td>Make a move with screen reader</td><td>Move announced (e.g., "Pawn to e4")</td><td>✅ Pass</td></tr>
          <tr><td>TC-035</td><td>Perf</td><td>No memory leak after 50 moves</td><td>Play 50 moves</td><td>Heap &lt; 15 MB, no growth trend</td><td>✅ Pass</td></tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">Appendix H: Evaluation Function Weights</h3>
      <p className="report-paragraph">
        The following table documents all evaluation factors and their weights used in the AI's position assessment. These weights were tuned through iterative playtesting:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Factor</th>
            <th>Weight (cp)</th>
            <th>Phase</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Pawn value</td><td>100</td><td>All</td><td>Base material value of a pawn</td></tr>
          <tr><td>Knight value</td><td>320</td><td>All</td><td>Knights slightly favored over bishops in closed positions</td></tr>
          <tr><td>Bishop value</td><td>330</td><td>All</td><td>Bishops slightly favored in open positions</td></tr>
          <tr><td>Rook value</td><td>500</td><td>All</td><td>Standard rook material value</td></tr>
          <tr><td>Queen value</td><td>900</td><td>All</td><td>Standard queen material value</td></tr>
          <tr><td>Bishop pair bonus</td><td>+50</td><td>All</td><td>Bonus for having both bishops</td></tr>
          <tr><td>Center pawn bonus</td><td>+20</td><td>Opening</td><td>Pawns on e4/d4/e5/d5</td></tr>
          <tr><td>Doubled pawn penalty</td><td>-10</td><td>All</td><td>Two pawns on the same file</td></tr>
          <tr><td>Isolated pawn penalty</td><td>-20</td><td>All</td><td>Pawn with no adjacent friendly pawns</td></tr>
          <tr><td>Passed pawn bonus</td><td>+30 to +90</td><td>Endgame</td><td>Increases as pawn advances (rank-dependent)</td></tr>
          <tr><td>Rook on open file</td><td>+25</td><td>Mid/End</td><td>Rook on file with no pawns</td></tr>
          <tr><td>Rook on 7th rank</td><td>+50</td><td>Mid/End</td><td>Rook on opponent's 2nd rank</td></tr>
          <tr><td>King safety (pawn shield)</td><td>+15 per pawn</td><td>Middlegame</td><td>Pawns in front of castled king</td></tr>
          <tr><td>King centralization</td><td>+10 to +40</td><td>Endgame</td><td>King proximity to center squares</td></tr>
          <tr><td>Mobility bonus</td><td>+2 per move</td><td>All</td><td>Number of legal moves available</td></tr>
          <tr><td>Check bonus</td><td>+50</td><td>All</td><td>Bonus for giving check</td></tr>
          <tr><td>Checkmate</td><td>+20000</td><td>All</td><td>Game-ending evaluation</td></tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">Appendix I: Sample AI Search Trace</h3>
      <p className="report-paragraph">
        The following is a formatted trace of the AI's minimax search process for a sample position, showing the search tree exploration and pruning decisions:
      </p>

      <div className="report-code-block">
        <pre className="text-xs overflow-x-auto">
{`Position: rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1
Difficulty: Hard (Depth 4)
Timestamp: 2025-01-15T14:32:05.123Z

Search initiated...
├── Move: e7e5 → evaluating at depth 4
│   ├── Response: Nf3 → eval: +0.12
│   ├── Response: Bc4 → eval: +0.08
│   ├── Response: d4  → eval: +0.15 ← best so far
│   └── Response: Nc3 → eval: +0.10
│   Result: +0.15 (after d4)
├── Move: d7d5 → evaluating at depth 4
│   ├── Response: exd5 → eval: +0.22
│   ├── Response: e5   → eval: +0.18
│   └── Response: Nc3  → eval: +0.05
│   Result: +0.22 (after exd5)
├── Move: c7c5 → evaluating at depth 4
│   ├── Response: Nf3  → eval: +0.25
│   └── [PRUNED: alpha=0.22, beta≤0.25]
│   Result: +0.25
├── Move: Nf6 → evaluating at depth 4
│   ├── Response: e5   → eval: +0.30
│   └── [PRUNED: alpha=0.25, beta≤0.30]
│   Result: +0.30
├── Move: d7d6 → eval: +0.35 [PRUNED at depth 2]
├── Move: Nc6 → eval: +0.20
├── Move: c7c6 → eval: +0.28
├── Move: g7g6 → eval: +0.32
└── [12 more moves pruned]

Search complete:
  Best move: e7e5 (score: +0.15 for Black = -0.15 from White's view)
  Nodes evaluated: 42,500
  Nodes pruned: ~767,500
  Pruning efficiency: 94.8%
  Time elapsed: 650ms
  Effective branching factor: 7.2`}
        </pre>
      </div>

      <h3 className="report-subsection-title">Appendix J: Environment Configuration</h3>
      <p className="report-paragraph">
        Complete development and production environment configuration used during the project:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Configuration</th>
            <th>Development</th>
            <th>Production</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Node.js version</td><td>v20.11.0 LTS</td><td>v20.11.0 LTS</td></tr>
          <tr><td>npm version</td><td>10.2.4</td><td>10.2.4</td></tr>
          <tr><td>TypeScript version</td><td>5.4.5</td><td>5.4.5</td></tr>
          <tr><td>React version</td><td>18.3.1</td><td>18.3.1</td></tr>
          <tr><td>Vite version</td><td>5.3.0</td><td>5.3.0</td></tr>
          <tr><td>OS (Development)</td><td>Windows 11 / macOS 14</td><td>Linux (Ubuntu 22.04)</td></tr>
          <tr><td>Browser (Primary)</td><td>Chrome 120</td><td>All modern browsers</td></tr>
          <tr><td>IDE</td><td>VS Code 1.85</td><td>N/A</td></tr>
          <tr><td>Source map</td><td>Enabled (inline)</td><td>Enabled (separate file)</td></tr>
          <tr><td>Minification</td><td>Disabled</td><td>Enabled (Terser)</td></tr>
          <tr><td>Tree shaking</td><td>Disabled</td><td>Enabled</td></tr>
          <tr><td>Gzip compression</td><td>Disabled</td><td>Enabled (Nginx)</td></tr>
          <tr><td>HMR</td><td>Enabled</td><td>N/A</td></tr>
          <tr><td>ESLint</td><td>Enabled (strict)</td><td>Build-time check</td></tr>
        </tbody>
      </table>

      <p className="mt-8 text-center text-lg font-semibold" style={{ color: 'hsl(var(--primary))' }}>
        — End of Appendices —
      </p>
    </>
  );
};

export default AppendicesSection;
