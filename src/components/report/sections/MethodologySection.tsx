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
          <tr><td>Phase 1: Planning & Research</td><td>2 weeks</td><td>Requirements gathering, literature review, technology evaluation</td><td>Project plan, SRS document</td></tr>
          <tr><td>Phase 2: System Design</td><td>2 weeks</td><td>Architecture design, database schema, UI wireframing</td><td>Design document, wireframes</td></tr>
          <tr><td>Phase 3: Core Implementation</td><td>4 weeks</td><td>Chess engine, board UI, game logic, move validation</td><td>Functional prototype</td></tr>
          <tr><td>Phase 4: AI Integration</td><td>3 weeks</td><td>Minimax algorithm, evaluation function, difficulty levels</td><td>AI opponent module</td></tr>
          <tr><td>Phase 5: Testing & Refinement</td><td>2 weeks</td><td>Unit testing, integration testing, user testing, bug fixes</td><td>Test reports, refined application</td></tr>
          <tr><td>Phase 6: Documentation & Deployment</td><td>1 week</td><td>Final documentation, deployment configuration, submission</td><td>Project report, deployed application</td></tr>
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
          <tr><td><strong>Must Have</strong></td><td>Complete chess rule implementation, AI opponent, responsive board UI, move validation, game state management</td></tr>
          <tr><td><strong>Should Have</strong></td><td>Multiple difficulty levels, move history display, undo functionality, pawn promotion dialog</td></tr>
          <tr><td><strong>Could Have</strong></td><td>Game save/load, captured pieces display, move animations, check/checkmate indicators</td></tr>
          <tr><td><strong>Won't Have (this version)</strong></td><td>Multiplayer, user accounts, online leaderboards, opening book integration</td></tr>
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
          <tr><td>IDE</td><td>Visual Studio Code</td><td>Primary development environment with TypeScript support</td></tr>
          <tr><td>Version Control</td><td>Git + GitHub</td><td>Source code management and collaboration</td></tr>
          <tr><td>Package Manager</td><td>npm / pnpm</td><td>Dependency management</td></tr>
          <tr><td>Build Tool</td><td>Vite 5</td><td>Fast development server and production bundling</td></tr>
          <tr><td>Linting</td><td>ESLint</td><td>Code quality and consistency enforcement</td></tr>
          <tr><td>Testing</td><td>Vitest</td><td>Unit and integration test execution</td></tr>
          <tr><td>Browser DevTools</td><td>Chrome DevTools</td><td>Debugging, performance profiling, network analysis</td></tr>
          <tr><td>Design</td><td>Figma</td><td>UI wireframing and mockup creation</td></tr>
          <tr><td>Documentation</td><td>Markdown + JSDoc</td><td>Code documentation and project notes</td></tr>
          <tr><td>Deployment</td><td>GitHub Pages / Lovable</td><td>Static site hosting and CI/CD</td></tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">6.7 Risk Management</h3>
      <p className="report-paragraph">
        A comprehensive risk assessment was conducted at the project planning stage. Each risk was evaluated using a probability-impact matrix and assigned appropriate mitigation strategies:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Risk ID</th>
            <th>Risk Description</th>
            <th>Probability</th>
            <th>Impact</th>
            <th>Risk Level</th>
            <th>Mitigation Strategy</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>R-001</td><td>AI computation exceeds acceptable response time</td><td>Medium</td><td>High</td><td>High</td><td>Alpha-beta pruning, depth limits per difficulty, potential Web Worker offloading</td></tr>
          <tr><td>R-002</td><td>chess.js library bugs or missing rule coverage</td><td>Low</td><td>High</td><td>Medium</td><td>Extensive unit testing against known positions, library version pinning</td></tr>
          <tr><td>R-003</td><td>Cross-browser rendering inconsistencies</td><td>Medium</td><td>Medium</td><td>Medium</td><td>CSS Grid/Flexbox standards, progressive enhancement, cross-browser testing</td></tr>
          <tr><td>R-004</td><td>Mobile touch interaction unreliable</td><td>Medium</td><td>Medium</td><td>Medium</td><td>Touch event handlers, larger tap targets, device-specific testing</td></tr>
          <tr><td>R-005</td><td>Memory leaks in long gaming sessions</td><td>Low</td><td>Medium</td><td>Low</td><td>DevTools heap snapshots, proper cleanup in useEffect hooks</td></tr>
          <tr><td>R-006</td><td>Scope creep beyond timeline</td><td>High</td><td>Medium</td><td>High</td><td>MoSCoW prioritization, strict sprint boundaries, feature freeze dates</td></tr>
          <tr><td>R-007</td><td>Build tool compatibility issues</td><td>Low</td><td>Low</td><td>Low</td><td>Version pinning, lock files, documented setup process</td></tr>
          <tr><td>R-008</td><td>Accessibility compliance gaps</td><td>Medium</td><td>Low</td><td>Low</td><td>ARIA attributes, keyboard navigation, screen reader testing</td></tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">6.8 Quality Assurance Framework</h3>
      <p className="report-paragraph">
        A structured quality assurance framework was established to maintain code quality throughout the development lifecycle. The framework encompasses automated and manual processes:
      </p>

      <h4 className="text-base font-semibold mt-4 mb-2" style={{ color: 'hsl(var(--report-heading))' }}>6.8.1 Code Quality Gates</h4>
      <table className="report-table">
        <thead>
          <tr>
            <th>Gate</th>
            <th>Tool</th>
            <th>Criteria</th>
            <th>Enforcement</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Static Analysis</td><td>ESLint + TypeScript</td><td>Zero errors, zero warnings</td><td>Pre-commit hook</td></tr>
          <tr><td>Type Safety</td><td>TypeScript strict mode</td><td>No implicit any, strict null checks</td><td>Build-time</td></tr>
          <tr><td>Unit Tests</td><td>Vitest</td><td>All tests pass, &gt;80% coverage target</td><td>CI pipeline</td></tr>
          <tr><td>Bundle Size</td><td>Vite build output</td><td>&lt;200 KB gzipped</td><td>Manual review</td></tr>
          <tr><td>Performance</td><td>Lighthouse</td><td>Score &gt;90 on all categories</td><td>Pre-release</td></tr>
          <tr><td>Accessibility</td><td>axe-core / manual</td><td>WCAG 2.1 AA compliance</td><td>Pre-release</td></tr>
        </tbody>
      </table>

      <h4 className="text-base font-semibold mt-4 mb-2" style={{ color: 'hsl(var(--report-heading))' }}>6.8.2 Code Review Checklist</h4>
      <p className="report-paragraph">
        Every code change was reviewed against the following checklist before merging:
      </p>
      <ul className="report-list">
        <li><strong>Functionality:</strong> Does the code implement the specified requirement correctly?</li>
        <li><strong>Type Safety:</strong> Are all types properly defined with no use of <code>any</code>?</li>
        <li><strong>Error Handling:</strong> Are edge cases and error states properly handled?</li>
        <li><strong>Performance:</strong> Does the change introduce unnecessary re-renders or heavy computation?</li>
        <li><strong>Accessibility:</strong> Are ARIA labels, keyboard handlers, and focus management included?</li>
        <li><strong>Responsiveness:</strong> Does the UI work correctly at all viewport sizes?</li>
        <li><strong>Naming:</strong> Are variables, functions, and components named clearly and consistently?</li>
        <li><strong>Documentation:</strong> Are complex logic blocks commented? Are public APIs documented with JSDoc?</li>
      </ul>

      <h3 className="report-subsection-title">6.9 Data Collection and Evaluation Methodology</h3>
      <p className="report-paragraph">
        The project evaluation was conducted using both quantitative and qualitative methods to assess the system's performance, usability, and correctness:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Type</th>
            <th>Data Collected</th>
            <th>Sample Size</th>
            <th>Analysis Technique</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Automated Testing</td><td>Quantitative</td><td>Pass/fail rates, coverage %</td><td>150+ test cases</td><td>Statistical summary</td></tr>
          <tr><td>Performance Profiling</td><td>Quantitative</td><td>Response times, memory, FPS</td><td>100+ measurements</td><td>Mean, median, P95, P99</td></tr>
          <tr><td>User Testing (SUS)</td><td>Quantitative</td><td>Usability scores (1–5 scale)</td><td>15 participants</td><td>SUS score computation</td></tr>
          <tr><td>Gameplay Analysis</td><td>Quantitative</td><td>Win rates, move quality (cp loss)</td><td>200+ games</td><td>Statistical comparison</td></tr>
          <tr><td>User Interviews</td><td>Qualitative</td><td>Feature feedback, UX impressions</td><td>8 participants</td><td>Thematic analysis</td></tr>
          <tr><td>Expert Review</td><td>Qualitative</td><td>Code quality, architecture feedback</td><td>2 reviewers</td><td>Heuristic evaluation</td></tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">6.10 Ethical Considerations</h3>
      <p className="report-paragraph">
        Although this project primarily involves a single-player game without user data collection, several ethical considerations were addressed:
      </p>
      <ul className="report-list">
        <li><strong>Open Source Licensing:</strong> All third-party libraries used (React, chess.js, Tailwind CSS) are MIT-licensed, ensuring legal compliance and the ability to distribute the application freely.</li>
        <li><strong>Accessibility:</strong> The application was designed to be usable by individuals with visual or motor impairments through keyboard navigation, screen reader support, and sufficient color contrast ratios.</li>
        <li><strong>Fair AI Difficulty:</strong> The AI difficulty levels were calibrated to provide a fair and enjoyable experience across skill levels. The "Easy" level intentionally introduces randomness to avoid frustrating beginners.</li>
        <li><strong>No Data Collection:</strong> The application does not collect, transmit, or store any personal user data. All game state is maintained locally in the browser's memory and is discarded on page close.</li>
        <li><strong>Transparency:</strong> The AI's decision-making process is deterministic and can be inspected through the source code. There are no hidden mechanics or deceptive patterns.</li>
      </ul>

      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Methodology Highlights:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Iterative development with 2-week sprint cycles</li>
          <li>MoSCoW prioritization ensuring critical features first</li>
          <li>Bottom-up implementation from core logic to UI polish</li>
          <li>Multi-layered testing strategy covering all abstraction levels</li>
          <li>Continuous integration via GitHub Actions</li>
          <li>Comprehensive risk management with 8 identified risks and mitigation strategies</li>
          <li>Quality gates enforced at build-time, pre-commit, and CI pipeline levels</li>
        </ul>
      </div>
    </>
  );
};

export default MethodologySection;
