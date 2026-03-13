import React from 'react';

const ProjectManagementSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        This chapter documents the project management practices, timeline, resource allocation, and risk management strategies employed throughout the development of the AI-Powered Chess Game. Effective project management was essential to deliver a comprehensive application within the academic timeline.
      </p>

      <h3 className="report-subsection-title">23.1 Project Timeline (Gantt Chart)</h3>
      <p className="report-paragraph">
        The following table presents the project timeline across 14 weeks, showing the duration and overlap of each development phase:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>W1</th><th>W2</th><th>W3</th><th>W4</th><th>W5</th><th>W6</th><th>W7</th>
            <th>W8</th><th>W9</th><th>W10</th><th>W11</th><th>W12</th><th>W13</th><th>W14</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="whitespace-nowrap">Requirements</td>
            <td className="bg-primary/30">█</td><td className="bg-primary/30">█</td>
            <td></td><td></td><td></td><td></td><td></td>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          </tr>
          <tr>
            <td className="whitespace-nowrap">System Design</td>
            <td></td><td className="bg-blue-200">█</td><td className="bg-blue-200">█</td><td className="bg-blue-200">█</td>
            <td></td><td></td><td></td>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          </tr>
          <tr>
            <td className="whitespace-nowrap">Chess Logic</td>
            <td></td><td></td><td></td><td></td>
            <td className="bg-green-200">█</td><td className="bg-green-200">█</td><td className="bg-green-200">█</td>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          </tr>
          <tr>
            <td className="whitespace-nowrap">Board UI</td>
            <td></td><td></td><td></td><td></td><td></td>
            <td className="bg-yellow-200">█</td><td className="bg-yellow-200">█</td><td className="bg-yellow-200">█</td>
            <td></td><td></td><td></td><td></td><td></td><td></td>
          </tr>
          <tr>
            <td className="whitespace-nowrap">AI Engine</td>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            <td className="bg-orange-200">█</td><td className="bg-orange-200">█</td><td className="bg-orange-200">█</td>
            <td></td><td></td><td></td><td></td>
          </tr>
          <tr>
            <td className="whitespace-nowrap">Game Features</td>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            <td className="bg-purple-200">█</td><td className="bg-purple-200">█</td>
            <td></td><td></td><td></td>
          </tr>
          <tr>
            <td className="whitespace-nowrap">Testing</td>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            <td className="bg-red-200">█</td><td className="bg-red-200">█</td>
            <td></td><td></td>
          </tr>
          <tr>
            <td className="whitespace-nowrap">Documentation</td>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            <td className="bg-pink-200">█</td><td className="bg-pink-200">█</td><td className="bg-pink-200">█</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">23.2 Resource Allocation</h3>
      <p className="report-paragraph">
        As a single-developer academic project, resource allocation focused on time management across different development activities:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Estimated Hours</th>
            <th>Actual Hours</th>
            <th>Variance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Research & Literature Review</td>
            <td>20</td>
            <td>25</td>
            <td>+25%</td>
          </tr>
          <tr>
            <td>Requirements & Design</td>
            <td>15</td>
            <td>12</td>
            <td>-20%</td>
          </tr>
          <tr>
            <td>Chess Logic Implementation</td>
            <td>30</td>
            <td>22</td>
            <td>-27% (chess.js saved time)</td>
          </tr>
          <tr>
            <td>UI/UX Development</td>
            <td>40</td>
            <td>45</td>
            <td>+12.5%</td>
          </tr>
          <tr>
            <td>AI Algorithm Development</td>
            <td>35</td>
            <td>40</td>
            <td>+14%</td>
          </tr>
          <tr>
            <td>Testing & Debugging</td>
            <td>25</td>
            <td>30</td>
            <td>+20%</td>
          </tr>
          <tr>
            <td>Documentation & Report</td>
            <td>30</td>
            <td>35</td>
            <td>+17%</td>
          </tr>
          <tr>
            <td>Deployment & CI/CD</td>
            <td>5</td>
            <td>4</td>
            <td>-20%</td>
          </tr>
          <tr className="font-bold">
            <td>Total</td>
            <td>200 hours</td>
            <td>213 hours</td>
            <td>+6.5%</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">23.3 Risk Management</h3>
      <p className="report-paragraph">
        A risk register was maintained throughout the project to identify, assess, and mitigate potential risks:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Risk ID</th>
            <th>Risk Description</th>
            <th>Probability</th>
            <th>Impact</th>
            <th>Mitigation Strategy</th>
            <th>Outcome</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>R-001</td>
            <td>AI computation too slow for browser</td>
            <td>Medium</td>
            <td>High</td>
            <td>Alpha-beta pruning; depth limits; timeout fallback</td>
            <td>Mitigated ✅</td>
          </tr>
          <tr>
            <td>R-002</td>
            <td>chess.js library insufficient for all rules</td>
            <td>Low</td>
            <td>High</td>
            <td>Validated library covers all FIDE rules before selection</td>
            <td>Not realized ✅</td>
          </tr>
          <tr>
            <td>R-003</td>
            <td>Cross-browser compatibility issues</td>
            <td>Medium</td>
            <td>Medium</td>
            <td>Use standard APIs; test across browsers early</td>
            <td>Mitigated ✅</td>
          </tr>
          <tr>
            <td>R-004</td>
            <td>UI responsiveness on mobile devices</td>
            <td>High</td>
            <td>Medium</td>
            <td>Mobile-first design; Tailwind responsive utilities</td>
            <td>Mitigated ✅</td>
          </tr>
          <tr>
            <td>R-005</td>
            <td>Schedule overrun due to AI tuning</td>
            <td>Medium</td>
            <td>Medium</td>
            <td>Fixed difficulty presets; iterative refinement</td>
            <td>Minor delay, mitigated ✅</td>
          </tr>
          <tr>
            <td>R-006</td>
            <td>Dependency security vulnerabilities</td>
            <td>Low</td>
            <td>Low</td>
            <td>Regular npm audit; minimal dependency set</td>
            <td>Not realized ✅</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">23.4 Milestones and Deliverables</h3>
      <table className="report-table">
        <thead>
          <tr>
            <th>Milestone</th>
            <th>Planned Date</th>
            <th>Actual Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Project Proposal Approved</td>
            <td>Week 1</td>
            <td>Week 1</td>
            <td>✅ On time</td>
          </tr>
          <tr>
            <td>Literature Review Complete</td>
            <td>Week 2</td>
            <td>Week 3</td>
            <td>⚠️ 1 week late</td>
          </tr>
          <tr>
            <td>Design Document Finalized</td>
            <td>Week 4</td>
            <td>Week 4</td>
            <td>✅ On time</td>
          </tr>
          <tr>
            <td>Chess Board + Basic Moves Working</td>
            <td>Week 7</td>
            <td>Week 6</td>
            <td>✅ 1 week early</td>
          </tr>
          <tr>
            <td>AI Opponent Functional</td>
            <td>Week 10</td>
            <td>Week 10</td>
            <td>✅ On time</td>
          </tr>
          <tr>
            <td>All Features Complete</td>
            <td>Week 11</td>
            <td>Week 11</td>
            <td>✅ On time</td>
          </tr>
          <tr>
            <td>Testing Complete</td>
            <td>Week 12</td>
            <td>Week 12</td>
            <td>✅ On time</td>
          </tr>
          <tr>
            <td>Final Report Submitted</td>
            <td>Week 14</td>
            <td>Week 14</td>
            <td>✅ On time</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">23.5 Lessons Learned</h3>
      <p className="report-paragraph">
        Several important lessons were learned during the project management process:
      </p>
      <ul className="report-list">
        <li><strong>Library Evaluation Saves Time:</strong> The decision to use chess.js for rule implementation saved an estimated 30+ hours of development compared to implementing chess rules from scratch.</li>
        <li><strong>Early Prototyping:</strong> Building a minimal playable prototype early (Week 5) provided motivation and enabled early feedback collection.</li>
        <li><strong>AI Tuning is Iterative:</strong> The evaluation function required multiple iterations of testing and adjustment. Fixed time blocks for "AI tuning" proved more effective than open-ended optimization.</li>
        <li><strong>Documentation Should be Concurrent:</strong> Writing documentation alongside development (rather than at the end) resulted in more accurate and detailed descriptions.</li>
        <li><strong>TypeScript Catches Bugs Early:</strong> The type system prevented numerous potential runtime errors, particularly in the chess logic and AI modules where data structures are complex.</li>
      </ul>

      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Project Management Summary:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Project completed within planned 14-week timeline</li>
          <li>Total effort: 213 hours (6.5% over initial estimate of 200 hours)</li>
          <li>All 8 milestones achieved (7 on time, 1 early, none missed)</li>
          <li>All 6 identified risks successfully mitigated</li>
          <li>All "Must Have" and "Should Have" requirements delivered</li>
        </ul>
      </div>
    </>
  );
};

export default ProjectManagementSection;
