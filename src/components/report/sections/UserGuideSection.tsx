import React from 'react';

const UserGuideSection: React.FC = () => {
  return (
    <>
      <h3 className="report-subsection-title">10.1 Player Workflow</h3>
      <p className="report-paragraph">
        The following steps guide users through the complete gameplay experience:
      </p>

      <div className="space-y-4">
        <div className="report-info-box">
          <p className="text-sm font-semibold mb-2">Step 1: Start a New Game</p>
          <p className="text-sm">
            The application loads with a fresh chessboard in the starting position. You automatically play as White (pieces at the bottom of the board). The game status indicator shows "Your Turn".
          </p>
        </div>

        <div className="report-info-box">
          <p className="text-sm font-semibold mb-2">Step 2: Select Difficulty</p>
          <p className="text-sm">
            Choose your preferred difficulty level from the sidebar before or during the game:
          </p>
          <ul className="text-sm list-disc list-inside mt-2 space-y-1">
            <li><strong>Easy:</strong> AI makes occasional mistakes, good for beginners</li>
            <li><strong>Medium:</strong> Balanced play, suitable for intermediate players</li>
            <li><strong>Hard:</strong> AI plays at maximum strength, very challenging</li>
          </ul>
        </div>

        <div className="report-info-box">
          <p className="text-sm font-semibold mb-2">Step 3: Make a Move</p>
          <ol className="text-sm list-decimal list-inside mt-2 space-y-1">
            <li>Click on one of your pieces to select it (piece highlights)</li>
            <li>Valid destination squares are highlighted in green</li>
            <li>Click on a highlighted square to complete the move</li>
            <li>Click elsewhere to deselect and choose a different piece</li>
          </ol>
        </div>

        <div className="report-info-box">
          <p className="text-sm font-semibold mb-2">Step 4: Pawn Promotion</p>
          <p className="text-sm">
            When a pawn reaches the opposite end of the board (8th rank), a dialog appears allowing you to choose the promotion piece: Queen, Rook, Bishop, or Knight. Select your preference to complete the move.
          </p>
        </div>

        <div className="report-info-box">
          <p className="text-sm font-semibold mb-2">Step 5: AI Response</p>
          <p className="text-sm">
            After your move, the AI bot automatically calculates and plays its response. A "thinking" indicator appears during computation (typically 0.5-2 seconds depending on difficulty). The bot's move is then executed and highlighted on the board.
          </p>
        </div>

        <div className="report-info-box">
          <p className="text-sm font-semibold mb-2">Step 6: Undo Move</p>
          <p className="text-sm">
            Click the "Undo" button to take back your last move along with the bot's response. This allows you to experiment with different strategies without losing your progress.
          </p>
        </div>

        <div className="report-info-box">
          <p className="text-sm font-semibold mb-2">Step 7: Save Game</p>
          <p className="text-sm">
            Click "Save" to store the current game state. Enter a descriptive name (e.g., "Sicilian Defense Practice") and confirm. The game is saved to your browser's local storage.
          </p>
        </div>

        <div className="report-info-box">
          <p className="text-sm font-semibold mb-2">Step 8: Load Game</p>
          <p className="text-sm">
            Click "Load" to view your saved games. Select a game from the list to resume playing from where you left off. All game state including move history is restored.
          </p>
        </div>

        <div className="report-info-box">
          <p className="text-sm font-semibold mb-2">Step 9: New Game</p>
          <p className="text-sm">
            Click "New Game" to reset the board and start a fresh game. You'll be prompted to confirm if you have an active game in progress.
          </p>
        </div>
      </div>

      <h3 className="report-subsection-title">10.2 Admin Workflow (Full-Stack Version)</h3>
      <p className="report-paragraph">
        In a full-stack deployment with user authentication, administrators would have access to:
      </p>

      <ul className="report-list">
        <li>Manage user accounts (create, suspend, delete)</li>
        <li>View aggregate game statistics and analytics</li>
        <li>Configure default application settings</li>
        <li>Monitor system performance and engine status</li>
        <li>Manage game database and storage quotas</li>
        <li>View audit logs of user activity</li>
      </ul>

      <h3 className="report-subsection-title">10.3 Example Scenarios</h3>
      
      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Scenario 1: Beginner Practice Session</p>
        <ol className="text-sm list-decimal list-inside space-y-1">
          <li>Open the application in a web browser</li>
          <li>Set difficulty to "Easy" for a forgiving opponent</li>
          <li>Practice basic opening moves: 1. e4 e5 2. Nf3 Nc6 3. Bc4</li>
          <li>Observe the AI's responses and learn from mistakes</li>
          <li>Use "Undo" to try alternative moves</li>
          <li>Save the game as "Opening Practice" for later review</li>
        </ol>
      </div>

      <div className="report-success-box mt-4">
        <p className="text-sm font-semibold mb-2">Scenario 2: Advanced Endgame Study</p>
        <ol className="text-sm list-decimal list-inside space-y-1">
          <li>Load a previously saved endgame position</li>
          <li>Set difficulty to "Hard" for maximum challenge</li>
          <li>Practice converting winning endgame advantages</li>
          <li>Study the AI's defensive techniques</li>
          <li>Save different variations for comparison</li>
        </ol>
      </div>

      <div className="report-success-box mt-4">
        <p className="text-sm font-semibold mb-2">Scenario 3: Quick Casual Game</p>
        <ol className="text-sm list-decimal list-inside space-y-1">
          <li>Open the application—no login required</li>
          <li>Play at default "Medium" difficulty</li>
          <li>Enjoy a full game against the AI</li>
          <li>Close browser when finished (no need to save)</li>
        </ol>
      </div>
    </>
  );
};

export default UserGuideSection;
