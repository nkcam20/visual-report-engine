import React from 'react';

const FolderStructureSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        The project follows a well-organized folder structure adhering to React best practices and the principle of separation of concerns. The architecture is designed for maintainability, testability, and scalability — enabling new features to be added without restructuring existing code. This section provides both an overview of the directory tree and detailed descriptions of each module's responsibilities and dependencies.
      </p>

      <div className="report-code-block font-mono text-sm leading-relaxed">
{`chess-game/
├── .github/
│   └── workflows/
│       └── deploy.yml                # CI/CD pipeline configuration
│
├── public/
│   ├── favicon.ico                   # Application favicon (chess piece icon)
│   ├── placeholder.svg               # Placeholder image for loading states
│   └── robots.txt                    # Search engine crawler directives
│
├── src/
│   ├── App.tsx                       # Root component with React Router setup
│   ├── App.css                       # App-level styles (minimal)
│   ├── main.tsx                      # Application entry point (ReactDOM.render)
│   ├── index.css                     # Global styles: Tailwind, themes, print styles
│   ├── vite-env.d.ts                 # Vite TypeScript type declarations
│   │
│   ├── components/
│   │   ├── NavLink.tsx               # Navigation link component
│   │   │
│   │   ├── game/                     # Game-specific components
│   │   │   ├── ChessBoard.tsx        # Interactive 8×8 chessboard renderer
│   │   │   ├── GameSidebar.tsx       # Controls, status, move history panel
│   │   │   └── PromotionDialog.tsx   # Pawn promotion piece selection modal
│   │   │
│   │   ├── report/                   # Academic report components
│   │   │   ├── CoverPage.tsx         # Title page with project metadata
│   │   │   ├── TableOfContents.tsx   # Auto-generated TOC with page numbers
│   │   │   ├── ReportSection.tsx     # Reusable section wrapper with footer
│   │   │   │
│   │   │   ├── sections/             # Individual report chapter content
│   │   │   │   ├── AbstractSection.tsx
│   │   │   │   ├── AcknowledgementsSection.tsx
│   │   │   │   ├── AppendicesSection.tsx
│   │   │   │   ├── CodeImplementationSection.tsx
│   │   │   │   ├── ComparativeStudySection.tsx
│   │   │   │   ├── ConclusionSection.tsx
│   │   │   │   ├── DatabaseSection.tsx
│   │   │   │   ├── DevelopmentSection.tsx
│   │   │   │   ├── FeasibilityStudySection.tsx
│   │   │   │   ├── FolderStructureSection.tsx
│   │   │   │   ├── FutureEnhancementsSection.tsx
│   │   │   │   ├── IntroductionSection.tsx
│   │   │   │   ├── LiteratureReviewSection.tsx
│   │   │   │   ├── MethodologySection.tsx
│   │   │   │   ├── ObjectiveSection.tsx
│   │   │   │   ├── PerformanceAnalysisSection.tsx
│   │   │   │   ├── ProjectManagementSection.tsx
│   │   │   │   ├── ReferencesSection.tsx
│   │   │   │   ├── RequirementsSection.tsx
│   │   │   │   ├── ResultsAnalysisSection.tsx
│   │   │   │   ├── SecurityConsiderationsSection.tsx
│   │   │   │   ├── TechStackSection.tsx
│   │   │   │   ├── TestingSection.tsx
│   │   │   │   └── UserGuideSection.tsx
│   │   │   │
│   │   │   └── diagrams/             # Visual diagrams and flowcharts
│   │   │       ├── ArchitectureDiagram.tsx
│   │   │       ├── ComponentDiagram.tsx
│   │   │       ├── DataFlowDiagram.tsx
│   │   │       ├── ERDiagram.tsx
│   │   │       ├── SequenceDiagram.tsx
│   │   │       ├── UIWireframe.tsx
│   │   │       └── WorkflowDiagram.tsx
│   │   │
│   │   └── ui/                       # shadcn/ui component library
│   │       ├── accordion.tsx         # Collapsible content sections
│   │       ├── alert-dialog.tsx      # Confirmation dialogs
│   │       ├── badge.tsx             # Status/label badges
│   │       ├── button.tsx            # Primary UI button component
│   │       ├── card.tsx              # Content card container
│   │       ├── dialog.tsx            # Modal dialog wrapper
│   │       ├── scroll-area.tsx       # Custom scrollable container
│   │       ├── select.tsx            # Dropdown select input
│   │       ├── separator.tsx         # Visual divider
│   │       ├── table.tsx             # Data table component
│   │       ├── tabs.tsx              # Tab navigation
│   │       ├── toast.tsx             # Notification toast
│   │       └── ...                   # Additional UI primitives
│   │
│   ├── hooks/
│   │   ├── useChessGame.ts           # Core chess game state management
│   │   ├── use-mobile.tsx            # Mobile viewport detection
│   │   └── use-toast.ts             # Toast notification hook
│   │
│   ├── lib/
│   │   ├── chessAI.ts                # AI engine: minimax + alpha-beta + PST
│   │   └── utils.ts                  # Shared utilities (cn, coordinate helpers)
│   │
│   ├── types/
│   │   └── chess.ts                  # TypeScript type definitions
│   │
│   ├── pages/
│   │   ├── Index.tsx                 # Main report page (home route)
│   │   ├── Game.tsx                  # Chess game page (/game route)
│   │   └── NotFound.tsx              # 404 error page
│   │
│   └── test/
│       ├── setup.ts                  # Test environment configuration
│       └── example.test.ts           # Example test cases
│
├── index.html                        # HTML entry point
├── package.json                      # Dependencies and npm scripts
├── vite.config.ts                    # Vite build configuration
├── vitest.config.ts                  # Test runner configuration
├── tailwind.config.ts                # Tailwind CSS theme configuration
├── tsconfig.json                     # TypeScript compiler options
├── tsconfig.app.json                 # App-specific TS config
├── tsconfig.node.json                # Node-specific TS config
├── postcss.config.js                 # PostCSS plugin configuration
├── eslint.config.js                  # ESLint linting rules
└── components.json                   # shadcn/ui component registry`}
      </div>

      <h3 className="report-subsection-title">11.1 Directory Descriptions</h3>
      
      <table className="report-table">
        <thead>
          <tr>
            <th>Directory</th>
            <th>Purpose</th>
            <th>Key Files</th>
            <th>Dependencies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="report-inline-code">/src/components/game</code></td>
            <td>Chess game UI components</td>
            <td>ChessBoard, GameSidebar, PromotionDialog</td>
            <td>chess.js, hooks, types</td>
          </tr>
          <tr>
            <td><code className="report-inline-code">/src/components/report</code></td>
            <td>Academic report rendering</td>
            <td>CoverPage, TableOfContents, 20+ section files</td>
            <td>UI components</td>
          </tr>
          <tr>
            <td><code className="report-inline-code">/src/components/ui</code></td>
            <td>shadcn/ui component library</td>
            <td>button, dialog, select, badge, 40+ components</td>
            <td>Radix UI, CVA, clsx</td>
          </tr>
          <tr>
            <td><code className="report-inline-code">/src/hooks</code></td>
            <td>Custom React hooks</td>
            <td>useChessGame, use-mobile, use-toast</td>
            <td>chess.js, chessAI</td>
          </tr>
          <tr>
            <td><code className="report-inline-code">/src/lib</code></td>
            <td>Core logic and utilities</td>
            <td>chessAI (engine), utils (helpers)</td>
            <td>chess.js</td>
          </tr>
          <tr>
            <td><code className="report-inline-code">/src/types</code></td>
            <td>TypeScript type definitions</td>
            <td>chess.ts</td>
            <td>chess.js types</td>
          </tr>
          <tr>
            <td><code className="report-inline-code">/src/pages</code></td>
            <td>Route-level page components</td>
            <td>Index (report), Game (chess), NotFound (404)</td>
            <td>All components</td>
          </tr>
          <tr>
            <td><code className="report-inline-code">/src/test</code></td>
            <td>Test infrastructure</td>
            <td>setup.ts, example tests</td>
            <td>Vitest, JSDOM</td>
          </tr>
          <tr>
            <td><code className="report-inline-code">/public</code></td>
            <td>Static assets (no processing)</td>
            <td>favicon, robots.txt</td>
            <td>None</td>
          </tr>
          <tr>
            <td><code className="report-inline-code">/.github</code></td>
            <td>CI/CD configuration</td>
            <td>deploy.yml</td>
            <td>GitHub Actions</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">11.2 Module Dependency Graph</h3>
      <p className="report-paragraph">
        The following table illustrates the dependency relationships between key modules. Dependencies flow downward — higher-level modules depend on lower-level modules, but not vice versa (following the Dependency Inversion Principle):
      </p>

      <table className="report-table text-xs">
        <thead>
          <tr>
            <th>Module</th>
            <th>Depends On</th>
            <th>Used By</th>
            <th>Lines of Code</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>pages/Game.tsx</td><td>ChessBoard, GameSidebar, useChessGame, chessAI</td><td>App.tsx (router)</td><td>~80</td></tr>
          <tr><td>pages/Index.tsx</td><td>All report sections, ReportSection, CoverPage</td><td>App.tsx (router)</td><td>~190</td></tr>
          <tr><td>components/game/ChessBoard.tsx</td><td>chess.js types, utils.ts</td><td>Game.tsx</td><td>~180</td></tr>
          <tr><td>components/game/GameSidebar.tsx</td><td>chess.js types, UI components</td><td>Game.tsx</td><td>~150</td></tr>
          <tr><td>hooks/useChessGame.ts</td><td>chess.js, chessAI.ts, types/chess.ts</td><td>Game.tsx</td><td>~200</td></tr>
          <tr><td>lib/chessAI.ts</td><td>chess.js</td><td>useChessGame.ts</td><td>~250</td></tr>
          <tr><td>lib/utils.ts</td><td>clsx, tailwind-merge</td><td>All components</td><td>~20</td></tr>
          <tr><td>types/chess.ts</td><td>chess.js types</td><td>All game modules</td><td>~50</td></tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">11.3 Architecture Benefits</h3>

      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Architectural Design Principles Applied:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li><strong>Separation of Concerns:</strong> UI rendering (components), business logic (hooks/lib), and data types (types) are cleanly separated into distinct directories. No component contains business logic directly.</li>
          <li><strong>Single Responsibility:</strong> Each file has one clear purpose. ChessBoard renders the board. chessAI computes moves. useChessGame manages state. No file exceeds 300 lines.</li>
          <li><strong>Reusability:</strong> Hooks and utility functions can be reused across the application. The chess AI module is framework-agnostic and could be used in a Vue.js or vanilla JavaScript application.</li>
          <li><strong>Testability:</strong> Business logic in hooks and lib/ can be tested independently of React components using Vitest. Components can be tested with React Testing Library.</li>
          <li><strong>Maintainability:</strong> Clear naming conventions and consistent file organization make it easy for new developers to navigate the codebase and locate relevant code.</li>
          <li><strong>Scalability:</strong> New features (e.g., multiplayer, puzzles) can be added as new directories/files without modifying existing code structure. The modular architecture supports the Open/Closed Principle.</li>
          <li><strong>Encapsulation:</strong> The shadcn/ui components in /ui/ provide a stable interface. Internal implementations can change without affecting consuming components.</li>
        </ul>
      </div>

      <h3 className="report-subsection-title">11.4 File Statistics</h3>
      <table className="report-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>File Count</th>
            <th>Total Lines</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Game Components</td><td>3</td><td>~410</td><td>8%</td></tr>
          <tr><td>Report Components</td><td>30</td><td>~3,200</td><td>62%</td></tr>
          <tr><td>UI Components (shadcn)</td><td>40+</td><td>~800</td><td>15%</td></tr>
          <tr><td>Hooks</td><td>3</td><td>~280</td><td>5%</td></tr>
          <tr><td>Library/Utilities</td><td>2</td><td>~270</td><td>5%</td></tr>
          <tr><td>Types</td><td>1</td><td>~50</td><td>1%</td></tr>
          <tr><td>Pages</td><td>3</td><td>~210</td><td>4%</td></tr>
          <tr><td><strong>Total</strong></td><td><strong>~82</strong></td><td><strong>~5,220</strong></td><td><strong>100%</strong></td></tr>
        </tbody>
      </table>
    </>
  );
};

export default FolderStructureSection;
