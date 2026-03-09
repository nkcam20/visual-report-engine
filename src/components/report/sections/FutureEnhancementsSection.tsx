import React from 'react';

const FutureEnhancementsSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        While the current implementation provides a fully functional chess playing experience, several enhancements are planned for future versions to expand functionality and improve user experience.
      </p>

      <h3 className="report-subsection-title">High Priority Enhancements</h3>

      <table className="report-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Description</th>
            <th>Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Play as Black</td>
            <td>Allow users to choose their color before starting a game</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>Opening Book</td>
            <td>Integrate opening book database for more natural AI play in openings</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>Move Hints</td>
            <td>Optional feature to suggest good moves for learning purposes</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>Game Analysis</td>
            <td>Post-game analysis showing mistakes and best moves</td>
            <td>High</td>
          </tr>
          <tr>
            <td>Chess Clock</td>
            <td>Timed games with configurable time controls</td>
            <td>Medium</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">Medium Priority Enhancements</h3>

      <table className="report-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Description</th>
            <th>Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Board Themes</td>
            <td>Multiple board and piece visual styles</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>Sound Effects</td>
            <td>Audio feedback for moves, captures, check, and game end</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>Keyboard Controls</td>
            <td>Move input via algebraic notation typing</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>PGN Import/Export</td>
            <td>Import games from PGN files, export completed games</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>Puzzle Mode</td>
            <td>Chess puzzles for tactical training</td>
            <td>High</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">Low Priority / Long-term Enhancements</h3>

      <table className="report-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Description</th>
            <th>Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Multiplayer</td>
            <td>Online human vs. human games with matchmaking</td>
            <td>Very High</td>
          </tr>
          <tr>
            <td>User Accounts</td>
            <td>Authentication, cloud save, and rating system</td>
            <td>High</td>
          </tr>
          <tr>
            <td>Leaderboards</td>
            <td>Global rankings and statistics</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>Mobile App</td>
            <td>Native iOS/Android application using React Native</td>
            <td>Very High</td>
          </tr>
          <tr>
            <td>AI Personalities</td>
            <td>Different AI playing styles (aggressive, defensive, etc.)</td>
            <td>High</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">Technical Improvements</h3>

      <ul className="report-list">
        <li><strong>Performance Optimization:</strong> Implement React.memo and useMemo for reduced re-renders</li>
        <li><strong>Progressive Web App (PWA):</strong> Enable offline play and home screen installation</li>
        <li><strong>Accessibility:</strong> Screen reader support and keyboard navigation</li>
        <li><strong>Internationalization:</strong> Multi-language support</li>
        <li><strong>Testing:</strong> Comprehensive unit and E2E test coverage</li>
        <li><strong>Analytics:</strong> Usage tracking and performance monitoring</li>
      </ul>

      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Roadmap Summary:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li><strong>v1.1:</strong> Play as Black, Board Themes, Sound Effects</li>
          <li><strong>v1.2:</strong> Opening Book, Chess Clock, Move Hints</li>
          <li><strong>v2.0:</strong> User Accounts, Cloud Save, Game Analysis</li>
          <li><strong>v3.0:</strong> Multiplayer, Leaderboards, Puzzle Mode</li>
        </ul>
      </div>
    </>
  );
};

export default FutureEnhancementsSection;
