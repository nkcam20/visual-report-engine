import React from 'react';

const DevelopmentSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        This chapter documents the step-by-step development process of the AI-Powered Chess Game, from initial environment setup through deployment. Each phase includes detailed instructions, code snippets, and configuration files that enable complete reproduction of the development workflow.
      </p>

      <h3 className="report-subsection-title">13.1 Environment Setup</h3>
      <p className="report-paragraph">
        The development environment requires Node.js, a package manager, and several development tools. Follow these steps to replicate the complete setup:
      </p>

      <div className="report-code-block">
{`# Step 1: Install Node.js (v18+ required)
# Download from https://nodejs.org or use nvm:
nvm install 18
nvm use 18
node --version    # Should print v18.x.x or higher

# Step 2: Install pnpm package manager (recommended for speed)
npm install -g pnpm
pnpm --version    # Should print 8.x.x or higher

# Step 3: Create project with Vite + React + TypeScript template
pnpm create vite chess-game --template react-ts
cd chess-game

# Step 4: Install core dependencies
pnpm install

# Step 5: Add chess library
pnpm add chess.js

# Step 6: Add UI and styling dependencies
pnpm add tailwindcss postcss autoprefixer
pnpm add class-variance-authority clsx tailwind-merge
pnpm add lucide-react
pnpm add framer-motion

# Step 7: Initialize Tailwind CSS
npx tailwindcss init -p

# Step 8: Add shadcn/ui (interactive setup)
npx shadcn-ui@latest init

# Step 9: Start development server
pnpm dev`}
      </div>

      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Verification Checklist:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>✓ Development server starts at http://localhost:5173</li>
          <li>✓ Hot Module Replacement (HMR) working — changes reflect instantly</li>
          <li>✓ TypeScript compilation without errors (check terminal output)</li>
          <li>✓ Tailwind CSS classes applying correctly (test with a utility class)</li>
          <li>✓ chess.js can be imported and instantiated without errors</li>
          <li>✓ ESLint reports no issues on default template code</li>
        </ul>
      </div>

      <p className="report-paragraph"><strong>Environment Variables and Configuration:</strong></p>
      <div className="report-code-block">
{`# .env.development (development environment)
VITE_APP_TITLE=AI Chess Game
VITE_APP_VERSION=1.0.0
VITE_AI_DEFAULT_DEPTH=3
VITE_MAX_SAVED_GAMES=10

# .env.production (production build)
VITE_APP_TITLE=AI Chess Game
VITE_APP_VERSION=1.0.0
VITE_AI_DEFAULT_DEPTH=3
VITE_MAX_SAVED_GAMES=10`}
      </div>

      <h3 className="report-subsection-title">13.2 Backend API Design (Conceptual)</h3>
      <p className="report-paragraph">
        While the current implementation is entirely client-side, a full-stack architecture has been designed for future scalability. The following RESTful API specification documents the endpoints that would support user authentication, cloud game storage, and analytics:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Endpoint</th>
            <th>Description</th>
            <th>Auth</th>
            <th>Rate Limit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-green-100 text-green-800 text-xs">POST</code></td>
            <td>/api/auth/register</td>
            <td>User registration with email verification</td>
            <td>No</td>
            <td>5/min</td>
          </tr>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-green-100 text-green-800 text-xs">POST</code></td>
            <td>/api/auth/login</td>
            <td>User authentication (JWT token)</td>
            <td>No</td>
            <td>10/min</td>
          </tr>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-green-100 text-green-800 text-xs">POST</code></td>
            <td>/api/auth/refresh</td>
            <td>Refresh expired JWT token</td>
            <td>Yes</td>
            <td>30/min</td>
          </tr>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-green-100 text-green-800 text-xs">POST</code></td>
            <td>/api/auth/logout</td>
            <td>Invalidate current session</td>
            <td>Yes</td>
            <td>30/min</td>
          </tr>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs">GET</code></td>
            <td>/api/games</td>
            <td>List user's saved games (paginated)</td>
            <td>Yes</td>
            <td>60/min</td>
          </tr>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-green-100 text-green-800 text-xs">POST</code></td>
            <td>/api/games</td>
            <td>Create/save a new game</td>
            <td>Yes</td>
            <td>30/min</td>
          </tr>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs">GET</code></td>
            <td>/api/games/:id</td>
            <td>Load specific game by ID</td>
            <td>Yes</td>
            <td>60/min</td>
          </tr>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-xs">PUT</code></td>
            <td>/api/games/:id</td>
            <td>Update game state (auto-save)</td>
            <td>Yes</td>
            <td>60/min</td>
          </tr>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-red-100 text-red-800 text-xs">DELETE</code></td>
            <td>/api/games/:id</td>
            <td>Delete a saved game</td>
            <td>Yes</td>
            <td>30/min</td>
          </tr>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs">GET</code></td>
            <td>/api/games/:id/moves</td>
            <td>Get complete move history for a game</td>
            <td>Yes</td>
            <td>60/min</td>
          </tr>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs">GET</code></td>
            <td>/api/stats/overview</td>
            <td>Get user statistics summary</td>
            <td>Yes</td>
            <td>30/min</td>
          </tr>
          <tr>
            <td><code className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-xs">PUT</code></td>
            <td>/api/settings</td>
            <td>Update user preferences</td>
            <td>Yes</td>
            <td>30/min</td>
          </tr>
        </tbody>
      </table>

      <p className="report-paragraph"><strong>API Response Format (JSON:API Specification):</strong></p>
      <div className="report-code-block">
{`// Success response
{
  "status": "success",
  "data": {
    "id": "a1b2c3d4-...",
    "type": "game",
    "attributes": {
      "name": "Italian Game Practice",
      "fen": "rnbqkbnr/pppppppp/...",
      "difficulty": "medium",
      "moveCount": 24,
      "result": "in_progress"
    },
    "meta": {
      "createdAt": "2026-03-15T10:30:00Z",
      "updatedAt": "2026-03-15T11:45:00Z"
    }
  }
}

// Error response  
{
  "status": "error",
  "error": {
    "code": "GAME_NOT_FOUND",
    "message": "No game found with the specified ID",
    "statusCode": 404
  }
}`}
      </div>

      <h3 className="report-subsection-title">13.3 Frontend UI Development</h3>
      <p className="report-paragraph">
        The frontend development followed a component-first approach, building the UI from atomic components up to complex page layouts. Each component was developed in isolation, tested for visual correctness, and then integrated into the application. The development sequence was designed to establish core functionality first, then layer on interactivity and polish.
      </p>
      
      <p className="report-paragraph"><strong>Phase 1: ChessBoard Component (Week 3-4):</strong></p>
      <ul className="report-list">
        <li>Renders an 8×8 grid using CSS Grid with alternating light/dark square colors</li>
        <li>Displays chess pieces using Unicode symbols (♔♕♖♗♘♙♚♛♜♝♞♟) with text shadows for depth</li>
        <li>Handles click events for piece selection and move execution through a unified onSquareClick handler</li>
        <li>Highlights valid moves (green dots for empty squares, green rings for capture targets)</li>
        <li>Highlights selected piece (blue/green ring), last move (yellow/amber), and check state (red with pulse animation)</li>
        <li>Supports responsive sizing: 56px squares on mobile, 64px on desktop, with proportional piece fonts</li>
        <li>Square coordinates displayed in corner squares (file letters on bottom rank, rank numbers on leftmost file)</li>
        <li>Board orientation support for future "play as Black" feature (ranks and files can be reversed)</li>
      </ul>

      <p className="report-paragraph"><strong>Phase 2: GameSidebar Component (Week 4-5):</strong></p>
      <ul className="report-list">
        <li>Displays current game status with dynamic text: turn indicator, check warning, game result</li>
        <li>Difficulty selector using a styled dropdown with three options and visual feedback</li>
        <li>Captured pieces display organized by color, using Unicode piece symbols</li>
        <li>Move history panel with scrollable list in standard algebraic notation, formatted as numbered move pairs</li>
        <li>Control buttons grid: New Game, Undo, Save, Load — with disabled states and hover effects</li>
        <li>AI thinking indicator with pulsing animation and descriptive text</li>
      </ul>

      <p className="report-paragraph"><strong>Phase 3: PromotionDialog Component (Week 5):</strong></p>
      <ul className="report-list">
        <li>Modal overlay with semi-transparent backdrop preventing background interaction</li>
        <li>Four promotion options displayed as large, clickable piece buttons with hover effects</li>
        <li>Piece display uses the player's color (White pieces for White pawn promotion)</li>
        <li>Tooltip labels on each button (Queen, Rook, Bishop, Knight) for accessibility</li>
        <li>Cancel option to deselect the promotion move and choose a different move</li>
        <li>Keyboard-accessible: Tab navigation between options, Enter/Space to select</li>
      </ul>

      <h3 className="report-subsection-title">13.4 Chess Engine Integration</h3>
      <p className="report-paragraph">
        The AI engine integration was the most technically challenging phase of development, requiring deep understanding of the minimax algorithm, evaluation functions, and performance optimization. The custom engine was developed iteratively, starting with a simple random move generator and progressively adding search depth, alpha-beta pruning, and positional evaluation.
      </p>

      <p className="report-paragraph"><strong>Development Progression:</strong></p>
      <table className="report-table">
        <thead>
          <tr>
            <th>Iteration</th>
            <th>Feature Added</th>
            <th>Estimated Elo</th>
            <th>Response Time</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>v0.1</td><td>Random legal move selection</td><td>~200</td><td>&lt;1ms</td></tr>
          <tr><td>v0.2</td><td>Material evaluation (piece counting)</td><td>~500</td><td>&lt;5ms</td></tr>
          <tr><td>v0.3</td><td>Minimax search (depth 2)</td><td>~800</td><td>~50ms</td></tr>
          <tr><td>v0.4</td><td>Alpha-beta pruning</td><td>~1000</td><td>~30ms (same depth, faster)</td></tr>
          <tr><td>v0.5</td><td>Piece-square tables (PST)</td><td>~1200</td><td>~35ms</td></tr>
          <tr><td>v0.6</td><td>Depth 3 search</td><td>~1400</td><td>~200ms</td></tr>
          <tr><td>v0.7</td><td>Move ordering heuristics</td><td>~1500</td><td>~150ms (same depth, faster)</td></tr>
          <tr><td>v0.8</td><td>Depth 4-5 with difficulty levels</td><td>800-2000</td><td>100ms-2.5s</td></tr>
          <tr><td>v1.0</td><td>Endgame adjustments, king safety</td><td>800-2000</td><td>100ms-2.5s</td></tr>
        </tbody>
      </table>

      <div className="report-code-block">
{`// Core AI architecture

// 1. Piece values for material evaluation
const PIECE_VALUES = {
  p: 100,   // Pawn
  n: 320,   // Knight  
  b: 330,   // Bishop
  r: 500,   // Rook
  q: 900,   // Queen
  k: 20000  // King (effectively infinite)
};

// 2. Minimax with alpha-beta pruning
function minimax(
  game: Chess, 
  depth: number, 
  alpha: number, 
  beta: number, 
  isMaximizing: boolean
): number {
  if (depth === 0) return evaluateBoard(game);
  
  const moves = game.moves({ verbose: true });
  // Sort moves: captures first, then checks
  moves.sort((a, b) => {
    if (a.captured && !b.captured) return -1;
    if (!a.captured && b.captured) return 1;
    return 0;
  });
  
  if (isMaximizing) {
    let maxEval = -Infinity;
    for (const move of moves) {
      game.move(move);
      const eval = minimax(game, depth - 1, alpha, beta, false);
      game.undo();
      maxEval = Math.max(maxEval, eval);
      alpha = Math.max(alpha, eval);
      if (beta <= alpha) break; // Beta cutoff
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (const move of moves) {
      game.move(move);
      const eval = minimax(game, depth - 1, alpha, beta, true);
      game.undo();
      minEval = Math.min(minEval, eval);
      beta = Math.min(beta, eval);
      if (beta <= alpha) break; // Alpha cutoff
    }
    return minEval;
  }
}

// 3. Board evaluation function
function evaluateBoard(game: Chess): number {
  let score = 0;
  const board = game.board();
  
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const piece = board[r][c];
      if (!piece) continue;
      
      const value = PIECE_VALUES[piece.type];
      const pst = PIECE_SQUARE_TABLES[piece.type];
      const tableValue = piece.color === 'w' ? pst[r][c] : pst[7-r][c];
      
      if (piece.color === 'w') {
        score += value + tableValue;
      } else {
        score -= value + tableValue;
      }
    }
  }
  return score;
}`}
      </div>

      <h3 className="report-subsection-title">13.5 Testing Strategy</h3>
      <p className="report-paragraph">
        Testing was conducted at four levels following the V-Model methodology, with each development phase paired with a corresponding testing phase:
      </p>
      <table className="report-table">
        <thead>
          <tr>
            <th>Test Type</th>
            <th>Focus Area</th>
            <th>Tools</th>
            <th>Coverage Target</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Unit Tests</td>
            <td>Game logic, move validation, AI evaluation</td>
            <td>Vitest, React Testing Library</td>
            <td>&gt;85%</td>
          </tr>
          <tr>
            <td>Integration Tests</td>
            <td>Component interactions, hook integration</td>
            <td>Vitest, JSDOM</td>
            <td>&gt;75%</td>
          </tr>
          <tr>
            <td>System Tests</td>
            <td>Full game flow, save/load, edge cases</td>
            <td>Playwright, Cypress</td>
            <td>&gt;90% scenarios</td>
          </tr>
          <tr>
            <td>Manual Testing</td>
            <td>AI play quality, UX evaluation, visual QA</td>
            <td>Browser DevTools, user testing</td>
            <td>All features verified</td>
          </tr>
        </tbody>
      </table>

      <p className="report-paragraph"><strong>Continuous Integration Pipeline:</strong></p>
      <div className="report-code-block">
{`# .github/workflows/ci.yml
name: CI Pipeline
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: pnpm install --frozen-lockfile
      - run: pnpm run lint
      - run: pnpm run test -- --coverage
      - run: pnpm run build
      
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - run: pnpm install && pnpm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist`}
      </div>

      <h3 className="report-subsection-title">13.6 Deployment</h3>
      <p className="report-paragraph">
        The application is deployed as a static site, requiring no server-side runtime. The build process produces optimized, minified assets that can be served by any static file hosting service.
      </p>
      <div className="report-code-block">
{`# Build production bundle
pnpm run build

# Output structure
dist/
├── index.html                # HTML entry (< 1 KB)
├── assets/
│   ├── index-[hash].js       # Application bundle (~120 KB gzipped)
│   ├── index-[hash].css      # Compiled styles (~15 KB gzipped)
│   └── vendor-[hash].js      # Dependencies (~45 KB gzipped)

# Total production bundle: ~180 KB gzipped

# Deploy to static hosting
# Option 1: Vercel (recommended - automatic from GitHub)
vercel deploy --prod

# Option 2: Netlify
netlify deploy --prod --dir=dist

# Option 3: GitHub Pages
# Configure GitHub Actions to build and deploy to gh-pages branch

# Option 4: AWS S3 + CloudFront
aws s3 sync dist/ s3://chess-game-bucket --delete
aws cloudfront create-invalidation --distribution-id XXXX --paths "/*"

# Option 5: Docker
docker build -t chess-game .
docker run -p 80:80 chess-game`}
      </div>

      <p className="report-paragraph"><strong>Dockerfile for containerized deployment:</strong></p>
      <div className="report-code-block">
{`# Multi-stage build for minimal image size
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`}
      </div>

      <p className="report-paragraph"><strong>Nginx configuration for SPA routing:</strong></p>
      <div className="report-code-block">
{`# nginx.conf
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # SPA fallback - serve index.html for all routes
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets aggressively
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
    add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'";

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;
    gzip_min_length 256;
}`}
      </div>

      <h3 className="report-subsection-title">13.7 Version Control Strategy</h3>
      <p className="report-paragraph">
        The project uses Git for version control with a simplified Git Flow branching strategy:
      </p>
      <table className="report-table">
        <thead>
          <tr>
            <th>Branch</th>
            <th>Purpose</th>
            <th>Merge Target</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code className="report-inline-code">main</code></td><td>Production-ready code, deployed automatically</td><td>—</td></tr>
          <tr><td><code className="report-inline-code">develop</code></td><td>Integration branch for completed features</td><td>main</td></tr>
          <tr><td><code className="report-inline-code">feature/*</code></td><td>Individual feature development (e.g., feature/ai-engine)</td><td>develop</td></tr>
          <tr><td><code className="report-inline-code">bugfix/*</code></td><td>Bug fixes discovered during testing</td><td>develop</td></tr>
          <tr><td><code className="report-inline-code">hotfix/*</code></td><td>Critical fixes for production issues</td><td>main + develop</td></tr>
        </tbody>
      </table>

      <div className="report-info-box">
        <p className="text-sm font-semibold mb-2">Commit Message Convention (Conventional Commits):</p>
        <div className="text-xs font-mono space-y-1">
          <p>feat(board): add visual move highlighting</p>
          <p>fix(ai): correct alpha-beta pruning edge case</p>
          <p>refactor(hooks): extract game state logic to useChessGame</p>
          <p>test(ai): add unit tests for evaluateBoard function</p>
          <p>docs: update README with deployment instructions</p>
          <p>style(sidebar): adjust spacing and font sizes</p>
          <p>perf(ai): optimize move ordering for faster pruning</p>
        </div>
      </div>
    </>
  );
};

export default DevelopmentSection;
