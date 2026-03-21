import React from 'react';

const FeasibilityStudySection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        A comprehensive feasibility study was conducted prior to development to evaluate the viability of building an AI-powered chess game as a browser-based web application. This study examined technical, economic, operational, schedule, and legal feasibility aspects to ensure the project could be successfully completed within the given constraints.
      </p>

      <h3 className="report-subsection-title">7.1 Technical Feasibility</h3>
      <p className="report-paragraph">
        Technical feasibility assesses whether the required technology, tools, and expertise are available to implement the proposed system. The following analysis confirms the technical viability of the project:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Requirement</th>
            <th>Available Solution</th>
            <th>Feasibility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chess move generation & validation</td>
            <td>chess.js library (MIT license, actively maintained)</td>
            <td>✅ Fully feasible</td>
          </tr>
          <tr>
            <td>AI opponent implementation</td>
            <td>Minimax with alpha-beta pruning (well-documented algorithm)</td>
            <td>✅ Fully feasible</td>
          </tr>
          <tr>
            <td>Browser-based execution</td>
            <td>React.js + Vite (industry standard tools)</td>
            <td>✅ Fully feasible</td>
          </tr>
          <tr>
            <td>Type-safe development</td>
            <td>TypeScript 5 (mature, widely adopted)</td>
            <td>✅ Fully feasible</td>
          </tr>
          <tr>
            <td>Responsive design</td>
            <td>Tailwind CSS (utility-first, responsive utilities built-in)</td>
            <td>✅ Fully feasible</td>
          </tr>
          <tr>
            <td>Client-side data persistence</td>
            <td>localStorage API (available in all modern browsers)</td>
            <td>✅ Fully feasible</td>
          </tr>
          <tr>
            <td>Performance for AI computation</td>
            <td>Modern JavaScript engines (V8) handle minimax at 4-5 ply depth</td>
            <td>✅ Feasible with optimization</td>
          </tr>
        </tbody>
      </table>

      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Technical Feasibility Verdict: FEASIBLE</p>
        <p className="text-sm">All required technologies are mature, well-documented, and freely available. The chess.js library handles complex rule implementation, and modern JavaScript engines provide sufficient computational power for the AI algorithms at the target search depths.</p>
      </div>

      <h3 className="report-subsection-title">7.2 Economic Feasibility</h3>
      <p className="report-paragraph">
        Economic feasibility evaluates the cost-benefit analysis of the project. As an academic project utilizing entirely free and open-source tools, the economic barriers are minimal:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Cost Category</th>
            <th>Item</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Development Tools</td>
            <td>VS Code, Git, Node.js</td>
            <td>$0 (Free/Open Source)</td>
          </tr>
          <tr>
            <td>Libraries & Frameworks</td>
            <td>React, TypeScript, chess.js, Tailwind CSS</td>
            <td>$0 (MIT License)</td>
          </tr>
          <tr>
            <td>UI Components</td>
            <td>shadcn/ui, Radix UI primitives</td>
            <td>$0 (Open Source)</td>
          </tr>
          <tr>
            <td>Hosting (Development)</td>
            <td>localhost via Vite dev server</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>Hosting (Production)</td>
            <td>GitHub Pages / Lovable</td>
            <td>$0 (Free tier)</td>
          </tr>
          <tr>
            <td>Hardware</td>
            <td>Standard laptop/desktop computer</td>
            <td>Pre-existing</td>
          </tr>
          <tr>
            <td>Domain Name</td>
            <td>Optional custom domain</td>
            <td>~$10/year (optional)</td>
          </tr>
          <tr>
            <td colSpan={2}><strong>Total Estimated Cost</strong></td>
            <td><strong>$0 – $10</strong></td>
          </tr>
        </tbody>
      </table>

      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Economic Feasibility Verdict: HIGHLY FEASIBLE</p>
        <p className="text-sm">The project can be developed and deployed at virtually zero cost using freely available tools and hosting platforms. The return on investment is high considering the educational value and portfolio enhancement.</p>
      </div>

      <h3 className="report-subsection-title">7.3 Operational Feasibility</h3>
      <p className="report-paragraph">
        Operational feasibility assesses whether the system can be effectively used by its target audience. Key considerations include:
      </p>
      <ul className="report-list">
        <li><strong>User Familiarity:</strong> Chess is a universally known game with established conventions. The board layout, piece movements, and notation are standardized, reducing the learning curve for the interface.</li>
        <li><strong>Browser Accessibility:</strong> The application runs in any modern web browser without installation, downloads, or plugins, making it immediately accessible to any user with internet access.</li>
        <li><strong>Intuitive Interface:</strong> The drag-and-drop (click-to-move) interaction model is familiar from popular chess platforms, ensuring users can start playing without tutorials.</li>
        <li><strong>No Account Required:</strong> Users can begin playing immediately without registration, reducing friction and increasing adoption.</li>
        <li><strong>Maintenance:</strong> As a static web application with no server-side dependencies, maintenance requirements are minimal — limited to occasional dependency updates and bug fixes.</li>
      </ul>

      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Operational Feasibility Verdict: FEASIBLE</p>
        <p className="text-sm">The application leverages familiar chess conventions and modern web UX patterns, ensuring ease of use across all skill levels. Zero-installation deployment maximizes accessibility.</p>
      </div>

      <h3 className="report-subsection-title">7.4 Schedule Feasibility</h3>
      <p className="report-paragraph">
        The project was planned for completion within a 14-week timeframe, broken down as follows:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Week</th>
            <th>Phase</th>
            <th>Milestones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1–2</td>
            <td>Planning & Research</td>
            <td>Project proposal, literature review, technology selection</td>
          </tr>
          <tr>
            <td>3–4</td>
            <td>System Design</td>
            <td>Architecture design, UI wireframes, component hierarchy</td>
          </tr>
          <tr>
            <td>5–8</td>
            <td>Core Development</td>
            <td>Chess board UI, move validation, game state management</td>
          </tr>
          <tr>
            <td>9–11</td>
            <td>AI Integration</td>
            <td>Minimax algorithm, evaluation function, difficulty levels</td>
          </tr>
          <tr>
            <td>12–13</td>
            <td>Testing & Polish</td>
            <td>Bug fixes, UI refinement, cross-browser testing</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Documentation</td>
            <td>Project report, deployment, final submission</td>
          </tr>
        </tbody>
      </table>

      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Schedule Feasibility Verdict: FEASIBLE</p>
        <p className="text-sm">The 14-week timeline provides adequate buffer for each development phase. The use of established libraries (chess.js) significantly reduces development time for complex chess rule implementation.</p>
      </div>

      <h3 className="report-subsection-title">7.5 Legal Feasibility</h3>
      <p className="report-paragraph">
        All technologies and libraries used in this project are available under permissive open-source licenses:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Technology</th>
            <th>License</th>
            <th>Commercial Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React.js</td>
            <td>MIT License</td>
            <td>✅ Permitted</td>
          </tr>
          <tr>
            <td>TypeScript</td>
            <td>Apache 2.0</td>
            <td>✅ Permitted</td>
          </tr>
          <tr>
            <td>chess.js</td>
            <td>BSD 2-Clause</td>
            <td>✅ Permitted</td>
          </tr>
          <tr>
            <td>Vite</td>
            <td>MIT License</td>
            <td>✅ Permitted</td>
          </tr>
          <tr>
            <td>Tailwind CSS</td>
            <td>MIT License</td>
            <td>✅ Permitted</td>
          </tr>
          <tr>
            <td>shadcn/ui</td>
            <td>MIT License</td>
            <td>✅ Permitted</td>
          </tr>
          <tr>
            <td>Framer Motion</td>
            <td>MIT License</td>
            <td>✅ Permitted</td>
          </tr>
        </tbody>
      </table>

      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Legal Feasibility Verdict: FULLY COMPLIANT</p>
        <p className="text-sm">All dependencies use permissive open-source licenses (MIT, Apache 2.0, BSD) that allow free use, modification, and distribution for both academic and commercial purposes.</p>
      </div>

      <h3 className="report-subsection-title">7.6 Feasibility Summary</h3>
      <table className="report-table">
        <thead>
          <tr>
            <th>Feasibility Dimension</th>
            <th>Assessment</th>
            <th>Risk Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Technical</td>
            <td>Feasible</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>Economic</td>
            <td>Highly Feasible</td>
            <td>Very Low</td>
          </tr>
          <tr>
            <td>Operational</td>
            <td>Feasible</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>Schedule</td>
            <td>Feasible</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>Legal</td>
            <td>Fully Compliant</td>
            <td>Very Low</td>
          </tr>
        </tbody>
      </table>

      <div className="report-note">
        <p className="text-sm"><strong>Overall Conclusion:</strong> The feasibility study confirms that the AI-Powered Chess Game project is viable across all dimensions. The primary risk factor is schedule adherence, which is mitigated by the availability of well-documented libraries and frameworks that accelerate development.</p>
      </div>
    </>
  );
};

export default FeasibilityStudySection;
