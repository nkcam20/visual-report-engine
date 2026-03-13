import React from 'react';

const MethodologySection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        This chapter outlines the systematic methodology adopted for the design, development, and evaluation of the AI-Powered Chess Game. The project follows an iterative software development lifecycle (SDLC) model, combining elements of Agile methodology with structured engineering practices to ensure quality, maintainability, and timely delivery.
      </p>

      <h3 className="report-subsection-title">6.1 Software Development Methodology</h3>
      <p className="report-paragraph">
        The project employs an Iterative Incremental Development model, chosen for its suitability to projects where requirements are well-understood but implementation complexity necessitates progressive refinement. This model allows for continuous feedback integration and risk mitigation through early prototyping.
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Phase</th>
            <th>Duration</th>
            <th>Key Activities</th>
            <th>Deliverables</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Phase 1: Planning & Research</td>
            <td>2 weeks</td>
            <td>Requirements gathering, literature review, technology evaluation</td>
            <td>Project plan, SRS document</td>
          </tr>
          <tr>
            <td>Phase 2: System Design</td>
            <td>2 weeks</td>
            <td>Architecture design, database schema, UI wireframing</td>
            <td>Design document, wireframes</td>
          </tr>
          <tr>
            <td>Phase 3: Core Implementation</td>
            <td>4 weeks</td>
            <td>Chess engine, board UI, game logic, move validation</td>
            <td>Functional prototype</td>
          </tr>
          <tr>
            <td>Phase 4: AI Integration</td>
            <td>3 weeks</td>
            <td>Minimax algorithm, evaluation function, difficulty levels</td>
            <td>AI opponent module</td>
          </tr>
          <tr>
            <td>Phase 5: Testing & Refinement</td>
            <td>2 weeks</td>
            <td>Unit testing, integration testing, user testing, bug fixes</td>
            <td>Test reports, refined application</td>
          </tr>
          <tr>
            <td>Phase 6: Documentation & Deployment</td>
            <td>1 week</td>
            <td>Final documentation, deployment configuration, submission</td>
            <td>Project report, deployed application</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">6.2 Requirements Engineering</h3>
      <p className="report-paragraph">
        Requirements were gathered through multiple techniques to ensure comprehensive coverage:
      </p>
      <ul className="report-list">
        <li><strong>Domain Analysis:</strong> Study of existing chess platforms (Lichess, Chess.com) to identify essential features and user expectations. Feature matrices were created to compare functionality across platforms.</li>
        <li><strong>User Interviews:</strong> Informal interviews with chess players of varying skill levels (beginners, intermediate, advanced) to understand their needs and pain points with existing solutions.</li>
        <li><strong>Competitive Analysis:</strong> Evaluation of open-source chess projects on GitHub to identify common architectural patterns and technical approaches.</li>
        <li><strong>Standards Review:</strong> Review of FIDE (Fédération Internationale des Échecs) rules to ensure complete and accurate implementation of chess rules, including special moves (castling, en passant, pawn promotion).</li>
      </ul>

      <p className="report-paragraph">
        Requirements were categorized using the MoSCoW prioritization framework:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Priority</th>
            <th>Requirements</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Must Have</strong></td>
            <td>Complete chess rule implementation, AI opponent, responsive board UI, move validation, game state management</td>
          </tr>
          <tr>
            <td><strong>Should Have</strong></td>
            <td>Multiple difficulty levels, move history display, undo functionality, pawn promotion dialog</td>
          </tr>
          <tr>
            <td><strong>Could Have</strong></td>
            <td>Game save/load, captured pieces display, move animations, check/checkmate indicators</td>
          </tr>
          <tr>
            <td><strong>Won't Have (this version)</strong></td>
            <td>Multiplayer, user accounts, online leaderboards, opening book integration</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">6.3 Design Methodology</h3>
      <p className="report-paragraph">
        The system design follows established software engineering principles to ensure modularity, maintainability, and extensibility:
      </p>

      <h4 className="text-base font-semibold mt-4 mb-2" style={{ color: 'hsl(var(--report-heading))' }}>6.3.1 Separation of Concerns (SoC)</h4>
      <p className="report-paragraph">
        The application strictly separates concerns across three dimensions: presentation (React components), business logic (custom hooks), and data management (utility functions). This separation enables independent testing, modification, and replacement of each layer without affecting others.
      </p>

      <h4 className="text-base font-semibold mt-4 mb-2" style={{ color: 'hsl(var(--report-heading))' }}>6.3.2 Component-Based Design</h4>
      <p className="report-paragraph">
        Following React's compositional model, the UI is decomposed into reusable, self-contained components. Each component has a single responsibility and communicates through well-defined props interfaces. This approach facilitates:
      </p>
      <ul className="report-list">
        <li>Independent development and testing of UI elements</li>
        <li>Consistent styling through shared design tokens</li>
        <li>Easy replacement or extension of individual components</li>
        <li>Reduced cognitive load for developers working on specific features</li>
      </ul>

      <h4 className="text-base font-semibold mt-4 mb-2" style={{ color: 'hsl(var(--report-heading))' }}>6.3.3 Custom Hook Pattern</h4>
      <p className="report-paragraph">
        Game logic is encapsulated in custom React hooks (<code>useChessGame</code>), following the pattern recommended by the React documentation. This pattern enables:
      </p>
      <ul className="report-list">
        <li>Stateful logic reuse across multiple components</li>
        <li>Clean separation between state management and UI rendering</li>
        <li>Easier unit testing of game logic without UI dependencies</li>
        <li>Simplified component code that focuses on presentation</li>
      </ul>

      <h3 className="report-subsection-title">6.4 Implementation Strategy</h3>
      <p className="report-paragraph">
        The implementation followed a bottom-up approach, starting with the core chess logic layer and progressively building the UI and AI layers on top:
      </p>

      <div className="report-info-box">
        <p className="text-sm font-semibold mb-2">Implementation Order:</p>
        <ol className="text-sm list-decimal list-inside space-y-1">
          <li><strong>Type Definitions:</strong> TypeScript interfaces for all chess-related data structures</li>
          <li><strong>Chess Logic Layer:</strong> Integration of chess.js for move generation and validation</li>
          <li><strong>Game State Hook:</strong> Custom hook managing board state, turns, and game progression</li>
          <li><strong>Board Component:</strong> Interactive chess board with piece rendering and move handling</li>
          <li><strong>AI Engine:</strong> Minimax algorithm with alpha-beta pruning and position evaluation</li>
          <li><strong>Supporting UI:</strong> Sidebar, promotion dialog, game controls, and status indicators</li>
          <li><strong>Polish:</strong> Animations, responsive design, accessibility features</li>
        </ol>
      </div>

      <h3 className="report-subsection-title">6.5 Testing Strategy</h3>
      <p className="report-paragraph">
        A multi-layered testing strategy was adopted to ensure correctness at every level:
      </p>
      <ul className="report-list">
        <li><strong>Unit Testing:</strong> Individual functions (evaluation, move generation) tested with Vitest framework</li>
        <li><strong>Component Testing:</strong> React components tested with React Testing Library for correct rendering and interaction handling</li>
        <li><strong>Integration Testing:</strong> End-to-end game flows tested to verify correct interaction between components, hooks, and AI</li>
        <li><strong>Manual Testing:</strong> Systematic playtesting at all difficulty levels, testing edge cases (stalemate, threefold repetition, insufficient material)</li>
        <li><strong>Cross-Browser Testing:</strong> Verified functionality in Chrome, Firefox, Safari, and Edge</li>
        <li><strong>Responsive Testing:</strong> Validated layout on mobile, tablet, and desktop viewports</li>
      </ul>

      <h3 className="report-subsection-title">6.6 Tools and Environment</h3>
      <table className="report-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Tool</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>IDE</td>
            <td>Visual Studio Code</td>
            <td>Primary development environment with TypeScript support</td>
          </tr>
          <tr>
            <td>Version Control</td>
            <td>Git + GitHub</td>
            <td>Source code management and collaboration</td>
          </tr>
          <tr>
            <td>Package Manager</td>
            <td>npm / pnpm</td>
            <td>Dependency management</td>
          </tr>
          <tr>
            <td>Build Tool</td>
            <td>Vite 5</td>
            <td>Fast development server and production bundling</td>
          </tr>
          <tr>
            <td>Linting</td>
            <td>ESLint</td>
            <td>Code quality and consistency enforcement</td>
          </tr>
          <tr>
            <td>Testing</td>
            <td>Vitest</td>
            <td>Unit and integration test execution</td>
          </tr>
          <tr>
            <td>Browser DevTools</td>
            <td>Chrome DevTools</td>
            <td>Debugging, performance profiling, network analysis</td>
          </tr>
          <tr>
            <td>Design</td>
            <td>Figma</td>
            <td>UI wireframing and mockup creation</td>
          </tr>
          <tr>
            <td>Documentation</td>
            <td>Markdown + JSDoc</td>
            <td>Code documentation and project notes</td>
          </tr>
          <tr>
            <td>Deployment</td>
            <td>GitHub Pages / Lovable</td>
            <td>Static site hosting and CI/CD</td>
          </tr>
        </tbody>
      </table>

      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Methodology Highlights:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Iterative development with 2-week sprint cycles</li>
          <li>MoSCoW prioritization ensuring critical features first</li>
          <li>Bottom-up implementation from core logic to UI polish</li>
          <li>Multi-layered testing strategy covering all abstraction levels</li>
          <li>Continuous integration via GitHub Actions</li>
        </ul>
      </div>
    </>
  );
};

export default MethodologySection;
