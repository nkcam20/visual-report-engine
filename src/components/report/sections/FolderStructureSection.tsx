import React from 'react';

const FolderStructureSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        The project follows a well-organized folder structure adhering to React best practices and separation of concerns:
      </p>

      <div className="report-code-block font-mono text-sm leading-relaxed">
{`chess-game/
├── index.html                      # HTML entry point
├── package.json                    # Dependencies and scripts
├── vite.config.ts                  # Vite build configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── components.json                 # shadcn/ui configuration
│
├── public/
│   ├── favicon.ico                 # Application favicon
│   └── robots.txt                  # Search engine directives
│
└── src/
    ├── App.tsx                     # Root component with routing
    ├── main.tsx                    # Application entry point
    ├── index.css                   # Global styles (Tailwind)
    ├── vite-env.d.ts               # Vite type definitions
    │
    ├── components/
    │   ├── ChessBoard.tsx          # Interactive chessboard component
    │   ├── GameSidebar.tsx         # Sidebar with controls & history
    │   ├── PromotionDialog.tsx     # Pawn promotion dialog
    │   │
    │   └── ui/                     # shadcn/ui components
    │       ├── button.tsx          # Button component
    │       ├── badge.tsx           # Badge component
    │       ├── dialog.tsx          # Dialog/Modal component
    │       ├── select.tsx          # Select dropdown
    │       ├── scroll-area.tsx     # Scrollable container
    │       └── ...                 # Other UI primitives
    │
    ├── hooks/
    │   ├── useChessGame.ts         # Core game logic hook
    │   │   ├── Game state management
    │   │   ├── Move validation & execution
    │   │   ├── History tracking
    │   │   └── Undo functionality
    │   │
    │   └── useStockfish.ts         # AI engine hook
    │       ├── Engine initialization
    │       ├── UCI communication
    │       ├── Difficulty settings
    │       └── Best move retrieval
    │
    ├── lib/
    │   ├── gameStorage.ts          # Save/load utilities
    │   │   ├── saveGame(name, state)
    │   │   ├── loadGame(id)
    │   │   ├── listGames()
    │   │   └── deleteGame(id)
    │   │
    │   └── utils.ts                # General utilities
    │       └── cn() - className merger
    │
    └── pages/
        ├── Index.tsx               # Main game page
        └── NotFound.tsx            # 404 error page`}
      </div>

      <h3 className="report-subsection-title">Folder Descriptions</h3>
      
      <table className="report-table">
        <thead>
          <tr>
            <th>Directory</th>
            <th>Purpose</th>
            <th>Key Files</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="report-inline-code">/src/components</code></td>
            <td>React UI components</td>
            <td>ChessBoard, GameSidebar, PromotionDialog</td>
          </tr>
          <tr>
            <td><code className="report-inline-code">/src/components/ui</code></td>
            <td>shadcn/ui primitives</td>
            <td>button, dialog, select, badge</td>
          </tr>
          <tr>
            <td><code className="report-inline-code">/src/hooks</code></td>
            <td>Custom React hooks</td>
            <td>useChessGame, useStockfish</td>
          </tr>
          <tr>
            <td><code className="report-inline-code">/src/lib</code></td>
            <td>Utility functions</td>
            <td>gameStorage, utils</td>
          </tr>
          <tr>
            <td><code className="report-inline-code">/src/pages</code></td>
            <td>Page components (routes)</td>
            <td>Index, NotFound</td>
          </tr>
          <tr>
            <td><code className="report-inline-code">/public</code></td>
            <td>Static assets</td>
            <td>favicon, robots.txt</td>
          </tr>
        </tbody>
      </table>

      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Architecture Benefits:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li><strong>Separation of Concerns:</strong> UI, logic, and data handling are cleanly separated</li>
          <li><strong>Reusability:</strong> Hooks and components can be reused across the application</li>
          <li><strong>Testability:</strong> Business logic in hooks can be tested independently of UI</li>
          <li><strong>Maintainability:</strong> Clear structure makes navigation and updates straightforward</li>
          <li><strong>Scalability:</strong> New features can be added without restructuring</li>
        </ul>
      </div>
    </>
  );
};

export default FolderStructureSection;
