import React from 'react';

const UserGuideSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        This chapter provides a comprehensive guide for all user types, covering the complete gameplay workflow, administrative functions, troubleshooting procedures, and frequently asked questions. The guide is structured to support both first-time users and experienced players seeking to use advanced features.
      </p>

      <h3 className="report-subsection-title">14.1 System Requirements for Users</h3>
      <p className="report-paragraph">
        Before using the application, ensure your system meets the following minimum requirements:
      </p>
      <table className="report-table">
        <thead>
          <tr>
            <th>Requirement</th>
            <th>Minimum</th>
            <th>Recommended</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Browser</td><td>Chrome 80+, Firefox 78+, Safari 14+, Edge 80+</td><td>Latest version of any major browser</td></tr>
          <tr><td>Screen Resolution</td><td>320×568 (mobile)</td><td>1920×1080 (desktop)</td></tr>
          <tr><td>Internet</td><td>Required for initial load only</td><td>Broadband for fast initial load</td></tr>
          <tr><td>JavaScript</td><td>Enabled (required)</td><td>Enabled</td></tr>
          <tr><td>localStorage</td><td>5 MB available</td><td>5 MB available</td></tr>
          <tr><td>RAM</td><td>2 GB</td><td>4 GB+</td></tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">14.2 Player Workflow</h3>
      <p className="report-paragraph">
        The following steps guide users through the complete gameplay experience, from launching the application to completing a game:
      </p>

      <div className="space-y-4">
        <div className="report-info-box">
          <p className="text-sm font-semibold mb-2">Step 1: Launch the Application</p>
          <p className="text-sm">
            Open the application URL in your web browser. The application loads with a fresh chessboard in the standard starting position. You automatically play as White (pieces at the bottom of the board). The game status indicator shows "Your Turn". No login, registration, or installation is required — the application is ready to play immediately.
          </p>
          <p className="text-sm mt-2">
            <strong>Initial Load Time:</strong> Approximately 1-2 seconds on broadband. The application bundle (~180 KB gzipped) is cached by the browser for subsequent visits.
          </p>
        </div>

        <div className="report-info-box">
          <p className="text-sm font-semibold mb-2">Step 2: Select Difficulty Level</p>
          <p className="text-sm">
            Choose your preferred difficulty level from the sidebar dropdown. The difficulty can be changed at any time during the game, and the change takes effect on the AI's next move:
          </p>
          <ul className="text-sm list-disc list-inside mt-2 space-y-1">
            <li><strong>Easy (800-1000 Elo):</strong> AI searches to depth 2. Makes occasional positional mistakes. Ideal for beginners learning piece movement and basic tactics. The AI will sometimes miss one-move tactics, giving new players opportunities to practice captures and simple combinations.</li>
            <li><strong>Medium (1400-1600 Elo):</strong> AI searches to depth 3-4. Plays solidly but may miss deeper tactical sequences. Suitable for intermediate players who understand basic strategy. The AI will actively contest the center, develop pieces, and castle, but may fall for 3-4 move combinations.</li>
            <li><strong>Hard (1800-2000 Elo):</strong> AI searches to depth 5. Plays at strong club level. Very challenging for most players. The AI evaluates positions comprehensively, including material balance, piece activity, king safety, and pawn structure. Tactical errors are rare.</li>
          </ul>
        </div>

        <div className="report-info-box">
          <p className="text-sm font-semibold mb-2">Step 3: Make a Move</p>
          <ol className="text-sm list-decimal list-inside mt-2 space-y-1">
            <li>Click on one of your White pieces to select it. The selected piece's square is highlighted with a colored ring.</li>
            <li>Valid destination squares are highlighted: small green dots for empty squares, green rings for capture targets.</li>
            <li>Click on a highlighted square to execute the move. The piece animates to its new position.</li>
            <li>Click on a non-highlighted square or a different piece to deselect and choose a different piece.</li>
            <li>Invalid move attempts are silently ignored — only legal moves can be executed.</li>
          </ol>
          <p className="text-sm mt-2">
            <strong>Special Moves:</strong> Castling is executed by clicking the king and then clicking the target square (two squares toward the rook). En passant captures are handled automatically when the pawn is moved to the en passant target square.
          </p>
        </div>

        <div className="report-info-box">
          <p className="text-sm font-semibold mb-2">Step 4: Pawn Promotion</p>
          <p className="text-sm">
            When a pawn reaches the opposite end of the board (8th rank for White, 1st rank for Black), a promotion dialog appears. Select your desired promotion piece:
          </p>
          <ul className="text-sm list-disc list-inside mt-2 space-y-1">
            <li><strong>Queen (♕):</strong> Most common choice — combines rook and bishop movement. Worth approximately 9 points.</li>
            <li><strong>Rook (♖):</strong> Moves along ranks and files. Worth 5 points. Occasionally preferred to avoid stalemate in specific endgame positions.</li>
            <li><strong>Bishop (♗):</strong> Moves diagonally. Worth 3 points. Rarely chosen, but may be needed in specific puzzle-like positions.</li>
            <li><strong>Knight (♘):</strong> Moves in an L-shape. Worth 3 points. Occasionally preferred when an immediate knight fork is available.</li>
          </ul>
        </div>

        <div className="report-info-box">
          <p className="text-sm font-semibold mb-2">Step 5: AI Response</p>
          <p className="text-sm">
            After your move, the AI automatically calculates and plays its response. During computation:
          </p>
          <ul className="text-sm list-disc list-inside mt-2 space-y-1">
            <li>A "thinking" indicator with pulsing animation appears in the sidebar</li>
            <li>The board is temporarily non-interactive (slightly dimmed) to prevent premature input</li>
            <li>Typical response times: Easy: &lt;100ms, Medium: 200-500ms, Hard: 500ms-2.5s</li>
            <li>The AI's move is highlighted on the board with a distinct color (yellow/amber)</li>
          </ul>
        </div>

        <div className="report-info-box">
          <p className="text-sm font-semibold mb-2">Step 6: Use the Undo Feature</p>
          <p className="text-sm">
            Click the "Undo" button to take back your last move along with the AI's response. This undoes two half-moves (one full move), restoring the position to before your last move. The undo feature is designed for learning — it allows you to experiment with different moves in the same position without restarting the game. The button is disabled when there are fewer than 2 half-moves in the game history.
          </p>
        </div>

        <div className="report-info-box">
          <p className="text-sm font-semibold mb-2">Step 7: Save Your Game</p>
          <p className="text-sm">
            Click "Save" to store the current game state. A dialog prompts you to enter a descriptive name (e.g., "Sicilian Defense Practice" or "Endgame Study #3"). The game is saved to your browser's local storage, including the complete board position, move history, difficulty level, and timestamps. Up to 10 games can be saved simultaneously; saving an 11th game removes the oldest save.
          </p>
        </div>

        <div className="report-info-box">
          <p className="text-sm font-semibold mb-2">Step 8: Load a Saved Game</p>
          <p className="text-sm">
            Click "Load" to view your saved games in a list. Each entry shows the game name, difficulty level, number of moves, and save date. Select a game to resume playing from exactly where you left off. All game state — including board position, move history, and captured pieces — is fully restored. Loading a game replaces the current game in progress.
          </p>
        </div>

        <div className="report-info-box">
          <p className="text-sm font-semibold mb-2">Step 9: Start a New Game</p>
          <p className="text-sm">
            Click "New Game" to reset the board to the standard starting position. If you have an active game in progress with unsaved changes, you may want to save it first. The new game starts with the same difficulty setting currently selected.
          </p>
        </div>
      </div>

      <h3 className="report-subsection-title">14.3 Understanding Game Status Indicators</h3>
      <p className="report-paragraph">
        The application provides several visual indicators to communicate game state:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Indicator</th>
            <th>Visual Cue</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Your Turn</td><td>Status text: "Your Turn"</td><td>You may select and move a piece</td></tr>
          <tr><td>AI Thinking</td><td>Pulsing animation + dimmed board</td><td>AI is calculating its response</td></tr>
          <tr><td>Check</td><td>King square highlighted red + pulsing</td><td>Your king is under attack — must resolve</td></tr>
          <tr><td>Checkmate</td><td>Game over notification</td><td>King in check with no legal moves — game lost/won</td></tr>
          <tr><td>Stalemate</td><td>Draw notification</td><td>No legal moves but not in check — draw</td></tr>
          <tr><td>Draw</td><td>Draw notification</td><td>Game ended in draw (50-move rule, repetition, insufficient material)</td></tr>
          <tr><td>Selected Piece</td><td>Blue/green ring around square</td><td>This piece is selected for movement</td></tr>
          <tr><td>Valid Move</td><td>Small green dot (empty) or ring (capture)</td><td>Piece can legally move to this square</td></tr>
          <tr><td>Last Move</td><td>Yellow/amber highlight</td><td>These squares were involved in the last move</td></tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">14.4 Admin Workflow (Full-Stack Version)</h3>
      <p className="report-paragraph">
        In a full-stack deployment with user authentication and a backend database, administrators would have access to the following capabilities through a dedicated admin dashboard:
      </p>

      <ul className="report-list">
        <li><strong>User Management:</strong> Create, suspend, and delete user accounts. View user profiles, game history, and Elo ratings. Reset passwords and manage permissions.</li>
        <li><strong>Analytics Dashboard:</strong> View aggregate statistics including total games played, average game duration, difficulty distribution, win rates, and active user counts. Charts showing trends over time.</li>
        <li><strong>System Configuration:</strong> Configure default application settings, AI parameters, and feature flags. Enable/disable registration, set maximum save slots per user.</li>
        <li><strong>Performance Monitoring:</strong> Monitor server health, response times, error rates, and resource utilization. Alert configuration for anomalies.</li>
        <li><strong>Database Management:</strong> View storage utilization, run maintenance queries, export data for analysis. Manage backup schedules and retention policies.</li>
        <li><strong>Audit Logging:</strong> View timestamped logs of user actions, authentication events, and system changes. Filter by user, action type, or date range.</li>
      </ul>

      <h3 className="report-subsection-title">14.5 Example Gameplay Scenarios</h3>
      
      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Scenario 1: Beginner Practice Session</p>
        <ol className="text-sm list-decimal list-inside space-y-1">
          <li>Open the application in a web browser — no login required</li>
          <li>Set difficulty to "Easy" for a forgiving opponent</li>
          <li>Practice basic opening principles: control the center (1. e4), develop knights and bishops, castle early</li>
          <li>Example opening: 1. e4 e5 2. Nf3 Nc6 3. Bc4 (Italian Game)</li>
          <li>When you blunder a piece, use "Undo" to try a different move</li>
          <li>Observe how the AI responds to different openings</li>
          <li>After winning (or learning from a loss), save the game as "Italian Game Practice"</li>
          <li>Start a new game and try a different opening to broaden your repertoire</li>
        </ol>
      </div>

      <div className="report-success-box mt-4">
        <p className="text-sm font-semibold mb-2">Scenario 2: Intermediate Strategy Training</p>
        <ol className="text-sm list-decimal list-inside space-y-1">
          <li>Set difficulty to "Medium" for a challenging but beatable opponent</li>
          <li>Focus on a specific opening system (e.g., Sicilian Defense: 1. e4 c5)</li>
          <li>Practice middlegame planning: identify pawn breaks, create outposts, activate rooks</li>
          <li>Use the move history to review the game sequence and identify critical moments</li>
          <li>When reaching a complex position, save the game to analyze later</li>
          <li>Load the saved position and try different continuations using the undo feature</li>
          <li>Compare outcomes of different strategic choices</li>
        </ol>
      </div>

      <div className="report-success-box mt-4">
        <p className="text-sm font-semibold mb-2">Scenario 3: Advanced Endgame Study</p>
        <ol className="text-sm list-decimal list-inside space-y-1">
          <li>Play a full game on "Hard" difficulty to reach an endgame position naturally</li>
          <li>Save the game at the start of the endgame phase (typically when queens are exchanged)</li>
          <li>Practice converting small advantages: better pawn structure, active king, passed pawns</li>
          <li>Study the AI's defensive techniques — how it creates counterplay and sets traps</li>
          <li>Load the saved endgame position multiple times to practice different approaches</li>
          <li>Focus on fundamental endgame principles: king activity, pawn promotion, opposition</li>
        </ol>
      </div>

      <div className="report-success-box mt-4">
        <p className="text-sm font-semibold mb-2">Scenario 4: Quick Casual Game</p>
        <ol className="text-sm list-decimal list-inside space-y-1">
          <li>Open the application — no login, no setup, instant play</li>
          <li>Play at the default "Medium" difficulty for a balanced experience</li>
          <li>Enjoy a relaxed game without time pressure</li>
          <li>Close the browser when finished — no need to save unless desired</li>
          <li>The application leaves no cookies, tracking data, or persistent state unless explicitly saved</li>
        </ol>
      </div>

      <h3 className="report-subsection-title">14.6 Troubleshooting Guide</h3>
      <p className="report-paragraph">
        The following table addresses common issues users may encounter:
      </p>

      <table className="report-table text-xs">
        <thead>
          <tr>
            <th>Issue</th>
            <th>Possible Cause</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Board doesn't display</td>
            <td>JavaScript disabled</td>
            <td>Enable JavaScript in browser settings</td>
          </tr>
          <tr>
            <td>AI doesn't respond</td>
            <td>Game is over (checkmate/draw)</td>
            <td>Check game status indicator; start a new game</td>
          </tr>
          <tr>
            <td>Can't click pieces</td>
            <td>Not your turn / AI thinking</td>
            <td>Wait for AI to finish its move</td>
          </tr>
          <tr>
            <td>Saved games missing</td>
            <td>Browser data cleared</td>
            <td>localStorage was cleared; saves cannot be recovered</td>
          </tr>
          <tr>
            <td>Slow AI response</td>
            <td>Hard difficulty on slow device</td>
            <td>Switch to Medium/Easy difficulty</td>
          </tr>
          <tr>
            <td>Layout broken on mobile</td>
            <td>Very small screen (&lt;320px)</td>
            <td>Use landscape orientation or larger device</td>
          </tr>
          <tr>
            <td>Undo button disabled</td>
            <td>Fewer than 2 moves played</td>
            <td>Play at least one full move (player + AI) first</td>
          </tr>
          <tr>
            <td>Pieces appear as boxes</td>
            <td>Font rendering issue</td>
            <td>Update browser; ensure Unicode font support</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">14.7 Frequently Asked Questions</h3>

      <div className="space-y-4">
        <div className="report-note">
          <p className="text-sm font-semibold">Q: Does this application collect any personal data?</p>
          <p className="text-sm mt-1">A: No. The application runs entirely in your browser. No data is sent to any server. Saved games are stored locally in your browser's localStorage and never leave your device.</p>
        </div>
        <div className="report-note">
          <p className="text-sm font-semibold">Q: Can I play offline?</p>
          <p className="text-sm mt-1">A: After the initial page load, the application can function offline if cached by the browser. However, a full PWA (Progressive Web App) implementation for guaranteed offline support is planned for future versions.</p>
        </div>
        <div className="report-note">
          <p className="text-sm font-semibold">Q: How strong is the AI at maximum difficulty?</p>
          <p className="text-sm mt-1">A: At "Hard" difficulty, the AI plays at approximately 1800-2000 Elo rating, equivalent to a strong club player. It evaluates positions using material balance, piece-square tables, and searches 5 plies deep with alpha-beta pruning.</p>
        </div>
        <div className="report-note">
          <p className="text-sm font-semibold">Q: Why can't I play as Black?</p>
          <p className="text-sm mt-1">A: The current version supports playing as White only. Playing as Black with board flip functionality is planned as a high-priority enhancement for version 1.1.</p>
        </div>
        <div className="report-note">
          <p className="text-sm font-semibold">Q: Can I import/export games in PGN format?</p>
          <p className="text-sm mt-1">A: The game internally uses PGN for move history storage. Full PGN import/export functionality (loading games from external sources) is planned for version 1.2.</p>
        </div>
        <div className="report-note">
          <p className="text-sm font-semibold">Q: Is the source code available?</p>
          <p className="text-sm mt-1">A: Yes. The project is developed using open-source technologies (React, TypeScript, chess.js) and the complete source code is documented in Chapter 19 of this report.</p>
        </div>
      </div>

      <h3 className="report-subsection-title">14.8 Keyboard Shortcuts Reference</h3>
      <p className="report-paragraph">
        While the current version is primarily mouse/touch-driven, the following browser-level shortcuts are useful:
      </p>
      <table className="report-table">
        <thead>
          <tr>
            <th>Shortcut</th>
            <th>Action</th>
            <th>Context</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Ctrl+P / Cmd+P</td><td>Print / Save as PDF</td><td>Report page</td></tr>
          <tr><td>Ctrl+R / Cmd+R</td><td>Reload application</td><td>Any page</td></tr>
          <tr><td>F11</td><td>Toggle fullscreen</td><td>Any page</td></tr>
          <tr><td>Ctrl+S / Cmd+S</td><td>Trigger browser save dialog</td><td>Any page</td></tr>
          <tr><td>Tab</td><td>Navigate between UI elements</td><td>Sidebar controls</td></tr>
          <tr><td>Enter / Space</td><td>Activate focused button</td><td>Sidebar controls</td></tr>
        </tbody>
      </table>

      <div className="report-info-box">
        <p className="text-sm font-semibold mb-2">Planned Keyboard Shortcuts (Future Version):</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li><strong>Ctrl+Z:</strong> Undo last move</li>
          <li><strong>Ctrl+N:</strong> New game</li>
          <li><strong>Ctrl+S:</strong> Save current game</li>
          <li><strong>Ctrl+L:</strong> Load saved game</li>
          <li><strong>Arrow keys:</strong> Navigate move history</li>
          <li><strong>Algebraic input:</strong> Type moves like "e4", "Nf3" directly</li>
        </ul>
      </div>
    </>
  );
};

export default UserGuideSection;
