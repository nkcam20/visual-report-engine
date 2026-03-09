import React from 'react';

const DevelopmentSection: React.FC = () => {
  return (
    <>
      <h3 className="report-subsection-title">9.1 Environment Setup</h3>
      <p className="report-paragraph">
        Follow these steps to set up the development environment:
      </p>

      <div className="report-code-block">
{`# Step 1: Install Node.js (v18+ required)
# Download from https://nodejs.org or use nvm:
nvm install 18
nvm use 18

# Step 2: Install pnpm package manager (recommended)
npm install -g pnpm

# Step 3: Create project with Vite
pnpm create vite chess-game --template react-ts
cd chess-game

# Step 4: Install dependencies
pnpm install

# Step 5: Add chess libraries
pnpm add chess.js

# Step 6: Add UI dependencies
pnpm add tailwindcss postcss autoprefixer
pnpm add class-variance-authority clsx tailwind-merge
pnpm add lucide-react

# Step 7: Initialize Tailwind CSS
npx tailwindcss init -p

# Step 8: Start development server
pnpm dev`}
      </div>

      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Verification Checklist:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>✓ Development server starts at http://localhost:5173</li>
          <li>✓ Hot Module Replacement (HMR) working</li>
          <li>✓ TypeScript compilation without errors</li>
          <li>✓ Tailwind CSS classes applying correctly</li>
        </ul>
      </div>

      <h3 className="report-subsection-title">9.2 Backend API Design (Conceptual)</h3>
      <p className="report-paragraph">
        For a full-stack implementation, the following RESTful API endpoints would be implemented:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Endpoint</th>
            <th>Description</th>
            <th>Auth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-green-100 text-green-800 text-xs">POST</code></td>
            <td>/api/auth/register</td>
            <td>User registration</td>
            <td>No</td>
          </tr>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-green-100 text-green-800 text-xs">POST</code></td>
            <td>/api/auth/login</td>
            <td>User authentication</td>
            <td>No</td>
          </tr>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs">GET</code></td>
            <td>/api/games</td>
            <td>List saved games</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-green-100 text-green-800 text-xs">POST</code></td>
            <td>/api/games</td>
            <td>Save a new game</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs">GET</code></td>
            <td>/api/games/:id</td>
            <td>Load specific game</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-xs">PUT</code></td>
            <td>/api/games/:id</td>
            <td>Update game state</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-red-100 text-red-800 text-xs">DELETE</code></td>
            <td>/api/games/:id</td>
            <td>Delete a saved game</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-xs">PUT</code></td>
            <td>/api/settings</td>
            <td>Update user settings</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">9.3 Frontend UI Development</h3>
      
      <p className="report-paragraph"><strong>1. ChessBoard Component:</strong></p>
      <ul className="report-list">
        <li>Renders an 8×8 grid with alternating light/dark squares</li>
        <li>Displays chess pieces using Unicode symbols (♔♕♖♗♘♙)</li>
        <li>Handles click events for piece selection and move execution</li>
        <li>Highlights valid moves, selected piece, last move, and check state</li>
        <li>Supports responsive sizing for different viewports</li>
      </ul>

      <p className="report-paragraph"><strong>2. GameSidebar Component:</strong></p>
      <ul className="report-list">
        <li>Displays current game status (turn, check, checkmate, draw)</li>
        <li>Difficulty selector with Easy/Medium/Hard options</li>
        <li>Captured pieces display for both players</li>
        <li>Move history in standard algebraic notation</li>
        <li>Control buttons: New Game, Undo, Save, Load</li>
      </ul>

      <p className="report-paragraph"><strong>3. PromotionDialog Component:</strong></p>
      <ul className="report-list">
        <li>Modal dialog that appears when a pawn reaches the back rank</li>
        <li>Displays four promotion options: Queen, Rook, Bishop, Knight</li>
        <li>Returns selected piece to complete the promotion move</li>
      </ul>

      <h3 className="report-subsection-title">9.4 Chess Engine Integration</h3>
      <div className="report-code-block">
{`// Stockfish initialization and communication

// 1. Load Stockfish as Web Worker from CDN
const stockfishWorker = new Worker(
  'https://cdn.jsdelivr.net/npm/stockfish.js@10.0.2/stockfish.js'
);

// 2. Initialize UCI protocol
stockfishWorker.postMessage('uci');
stockfishWorker.postMessage('isready');

// 3. Configure difficulty
stockfishWorker.postMessage(\`setoption name Skill Level value \${skillLevel}\`);

// 4. Request best move
stockfishWorker.postMessage(\`position fen \${currentFEN}\`);
stockfishWorker.postMessage(\`go movetime \${thinkingTime}\`);

// 5. Handle response
stockfishWorker.onmessage = (event) => {
  if (event.data.startsWith('bestmove')) {
    const move = event.data.split(' ')[1]; // e.g., "e2e4"
    executeAIMove(move);
  }
};`}
      </div>

      <h3 className="report-subsection-title">9.5 Testing Strategy</h3>
      <table className="report-table">
        <thead>
          <tr>
            <th>Test Type</th>
            <th>Focus Area</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Unit Tests</td>
            <td>Game logic, move validation</td>
            <td>Vitest, React Testing Library</td>
          </tr>
          <tr>
            <td>Integration Tests</td>
            <td>Component interactions, hooks</td>
            <td>Vitest, JSDOM</td>
          </tr>
          <tr>
            <td>E2E Tests</td>
            <td>Full game flow, save/load</td>
            <td>Playwright, Cypress</td>
          </tr>
          <tr>
            <td>Manual Testing</td>
            <td>AI responses, UI/UX</td>
            <td>Browser DevTools</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">9.6 Deployment</h3>
      <div className="report-code-block">
{`# Build production bundle
pnpm run build

# Output structure
dist/
├── index.html
├── assets/
│   ├── index-[hash].js      # Application bundle
│   ├── index-[hash].css     # Compiled styles
│   └── vendor-[hash].js     # Dependencies

# Deploy to static hosting
# Option 1: Vercel
vercel deploy

# Option 2: Netlify
netlify deploy --prod --dir=dist

# Option 3: GitHub Pages
# Push dist/ contents to gh-pages branch`}
      </div>
    </>
  );
};

export default DevelopmentSection;
