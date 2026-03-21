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
          <tr><td><strong>CI/CD</strong></td><td>Continuous Integration / Continuous Deployment — automated processes for building, testing, and deploying code.</td></tr>
          <tr><td><strong>Component</strong></td><td>A reusable, self-contained piece of UI in React that manages its own rendering and state.</td></tr>
          <tr><td><strong>CSS</strong></td><td>Cascading Style Sheets — a styling language for describing the presentation of HTML documents.</td></tr>
          <tr><td><strong>DOM</strong></td><td>Document Object Model — a programming interface for HTML documents representing the page structure as a tree.</td></tr>
          <tr><td><strong>Elo Rating</strong></td><td>A numerical rating system for measuring the relative strength of chess players, named after Arpad Elo.</td></tr>
          <tr><td><strong>En Passant</strong></td><td>A special pawn capture in chess that can occur immediately after a pawn makes a two-square advance from its starting position.</td></tr>
          <tr><td><strong>ESM</strong></td><td>ECMAScript Modules — the official standard format for packaging JavaScript code for reuse.</td></tr>
          <tr><td><strong>Evaluation Function</strong></td><td>A function that assigns a numerical score to a chess position, estimating the advantage for one side.</td></tr>
          <tr><td><strong>FEN</strong></td><td>Forsyth–Edwards Notation — a standard notation for describing a particular board position of a chess game.</td></tr>
          <tr><td><strong>FIDE</strong></td><td>Fédération Internationale des Échecs (World Chess Federation) — the international governing body of chess.</td></tr>
          <tr><td><strong>Gzip</strong></td><td>A file compression format commonly used for reducing the size of web assets during transfer.</td></tr>
          <tr><td><strong>Hook</strong></td><td>A React feature (introduced in v16.8) that allows function components to use state and other React features.</td></tr>
          <tr><td><strong>HMR</strong></td><td>Hot Module Replacement — a development feature that updates code in the browser without a full page reload.</td></tr>
          <tr><td><strong>HSL</strong></td><td>Hue, Saturation, Lightness — a color model used in CSS for defining colors.</td></tr>
          <tr><td><strong>JSX</strong></td><td>JavaScript XML — a syntax extension for JavaScript used in React to describe UI structure.</td></tr>
          <tr><td><strong>localStorage</strong></td><td>A Web API that allows web applications to store key-value pairs in the browser with no expiration date.</td></tr>
          <tr><td><strong>Minimax</strong></td><td>A decision-making algorithm for two-player games that minimizes the possible loss for a worst-case scenario.</td></tr>
          <tr><td><strong>NNUE</strong></td><td>Efficiently Updatable Neural Network — a neural network architecture used in modern chess engines for position evaluation.</td></tr>
          <tr><td><strong>PGN</strong></td><td>Portable Game Notation — a standard format for recording chess games as human-readable text.</td></tr>
          <tr><td><strong>Ply</strong></td><td>A half-move in chess — one move by either White or Black. A full move consists of two plies.</td></tr>
          <tr><td><strong>Props</strong></td><td>Properties passed from a parent component to a child component in React.</td></tr>
          <tr><td><strong>PST</strong></td><td>Piece-Square Table — a lookup table assigning positional bonuses/penalties based on piece location.</td></tr>
          <tr><td><strong>PWA</strong></td><td>Progressive Web App — a web application that uses modern web capabilities for an app-like experience.</td></tr>
          <tr><td><strong>React</strong></td><td>A JavaScript library for building user interfaces, developed by Meta (formerly Facebook).</td></tr>
          <tr><td><strong>RLS</strong></td><td>Row-Level Security — a database feature that restricts which rows can be accessed by different users.</td></tr>
          <tr><td><strong>SPA</strong></td><td>Single Page Application — a web app that loads a single HTML page and dynamically updates content.</td></tr>
          <tr><td><strong>Stalemate</strong></td><td>A chess position where the player whose turn it is has no legal move and is not in check, resulting in a draw.</td></tr>
          <tr><td><strong>Tailwind CSS</strong></td><td>A utility-first CSS framework that provides low-level utility classes for building custom designs.</td></tr>
          <tr><td><strong>TypeScript</strong></td><td>A typed superset of JavaScript that compiles to plain JavaScript, developed by Microsoft.</td></tr>
          <tr><td><strong>UCI</strong></td><td>Universal Chess Interface — a communication protocol for chess engines.</td></tr>
          <tr><td><strong>Vite</strong></td><td>A next-generation frontend build tool that provides fast development server and optimized builds.</td></tr>
          <tr><td><strong>Virtual DOM</strong></td><td>A lightweight in-memory representation of the real DOM used by React for efficient updates.</td></tr>
          <tr><td><strong>WASM</strong></td><td>WebAssembly — a binary instruction format for a stack-based virtual machine, enabling near-native speed in browsers.</td></tr>
          <tr><td><strong>Web Worker</strong></td><td>A browser feature that runs JavaScript in a background thread, separate from the main UI thread.</td></tr>
          <tr><td><strong>XSS</strong></td><td>Cross-Site Scripting — a web security vulnerability that allows attackers to inject malicious scripts.</td></tr>
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
          <tr><td>CDN</td><td>Content Delivery Network</td></tr>
          <tr><td>CI/CD</td><td>Continuous Integration / Continuous Deployment</td></tr>
          <tr><td>CLS</td><td>Cumulative Layout Shift</td></tr>
          <tr><td>CPU</td><td>Central Processing Unit</td></tr>
          <tr><td>CSS</td><td>Cascading Style Sheets</td></tr>
          <tr><td>DFD</td><td>Data Flow Diagram</td></tr>
          <tr><td>DOM</td><td>Document Object Model</td></tr>
          <tr><td>E/R</td><td>Entity-Relationship</td></tr>
          <tr><td>FCP</td><td>First Contentful Paint</td></tr>
          <tr><td>FEN</td><td>Forsyth–Edwards Notation</td></tr>
          <tr><td>FIDE</td><td>Fédération Internationale des Échecs</td></tr>
          <tr><td>GB</td><td>Gigabyte</td></tr>
          <tr><td>GDPR</td><td>General Data Protection Regulation</td></tr>
          <tr><td>GUI</td><td>Graphical User Interface</td></tr>
          <tr><td>HCI</td><td>Human-Computer Interaction</td></tr>
          <tr><td>HMR</td><td>Hot Module Replacement</td></tr>
          <tr><td>HTML</td><td>Hypertext Markup Language</td></tr>
          <tr><td>HTTP</td><td>Hypertext Transfer Protocol</td></tr>
          <tr><td>HTTPS</td><td>Hypertext Transfer Protocol Secure</td></tr>
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
          <tr><td>PGN</td><td>Portable Game Notation</td></tr>
          <tr><td>PST</td><td>Piece-Square Table</td></tr>
          <tr><td>PWA</td><td>Progressive Web App</td></tr>
          <tr><td>RAM</td><td>Random Access Memory</td></tr>
          <tr><td>RLS</td><td>Row-Level Security</td></tr>
          <tr><td>SDLC</td><td>Software Development Lifecycle</td></tr>
          <tr><td>SPA</td><td>Single Page Application</td></tr>
          <tr><td>SQL</td><td>Structured Query Language</td></tr>
          <tr><td>SRS</td><td>Software Requirements Specification</td></tr>
          <tr><td>SSL</td><td>Secure Sockets Layer</td></tr>
          <tr><td>STRIDE</td><td>Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation of Privilege</td></tr>
          <tr><td>TBT</td><td>Total Blocking Time</td></tr>
          <tr><td>TLS</td><td>Transport Layer Security</td></tr>
          <tr><td>TTI</td><td>Time to Interactive</td></tr>
          <tr><td>UCI</td><td>Universal Chess Interface</td></tr>
          <tr><td>UI</td><td>User Interface</td></tr>
          <tr><td>URL</td><td>Uniform Resource Locator</td></tr>
          <tr><td>UX</td><td>User Experience</td></tr>
          <tr><td>WASM</td><td>WebAssembly</td></tr>
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

      <h3 className="report-subsection-title">Appendix E: Piece-Square Table (Pawn)</h3>
      <p className="report-paragraph">
        The following table shows the positional bonus values (in centipawns) for pawns at each board square, used by the evaluation function:
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

      <p className="mt-8 text-center text-lg font-semibold" style={{ color: 'hsl(var(--primary))' }}>
        — End of Appendices —
      </p>
    </>
  );
};

export default AppendicesSection;
