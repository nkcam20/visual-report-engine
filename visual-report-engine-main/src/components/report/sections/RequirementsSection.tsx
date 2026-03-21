import React from 'react';

const RequirementsSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        This chapter documents the complete system requirements for the AI-Powered Chess Game, covering software prerequisites, browser capabilities, hardware specifications, and both functional and non-functional requirements. A thorough requirements analysis is essential for establishing clear success criteria and guiding the development process.
      </p>

      <h3 className="report-subsection-title">8.1 Software Requirements</h3>
      <p className="report-paragraph">
        The following software components are required for development and deployment of the AI-Powered Chess Game:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Requirement</th>
            <th>Version</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Operating System</td><td>Windows / macOS / Linux</td><td>Any modern version</td><td>Development platform</td></tr>
          <tr><td>Node.js</td><td>JavaScript Runtime</td><td>v18.0.0 or higher</td><td>Package management, build tools</td></tr>
          <tr><td>pnpm / npm / bun</td><td>Package Manager</td><td>pnpm v8+ / npm v9+ / bun v1+</td><td>Dependency management</td></tr>
          <tr><td>Web Browser</td><td>Chrome / Firefox / Edge / Safari</td><td>Latest with WASM support</td><td>Testing and debugging</td></tr>
          <tr><td>Code Editor</td><td>VS Code (recommended)</td><td>Latest</td><td>Development environment</td></tr>
          <tr><td>Git</td><td>Version Control System</td><td>v2.30+</td><td>Source code management</td></tr>
          <tr><td>TypeScript</td><td>Type-safe JavaScript</td><td>v5.0+</td><td>Compile-time type checking</td></tr>
        </tbody>
      </table>

      <h4 className="text-base font-semibold mt-4 mb-2" style={{ color: 'hsl(var(--report-heading))' }}>8.1.1 Development Environment Setup</h4>
      <p className="report-paragraph">
        The following VS Code extensions are recommended for optimal development experience:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Extension</th>
            <th>Purpose</th>
            <th>Required</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>TypeScript and JavaScript Language Features</td><td>Built-in TypeScript support</td><td>Built-in</td></tr>
          <tr><td>Tailwind CSS IntelliSense</td><td>Tailwind class autocomplete</td><td>Recommended</td></tr>
          <tr><td>ESLint</td><td>Code linting integration</td><td>Recommended</td></tr>
          <tr><td>Prettier</td><td>Code formatting</td><td>Optional</td></tr>
          <tr><td>ES7+ React/Redux/React-Native snippets</td><td>Code snippets</td><td>Optional</td></tr>
          <tr><td>GitLens</td><td>Git history visualization</td><td>Optional</td></tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">8.2 Browser Requirements</h3>
      <p className="report-paragraph">
        End users require a modern web browser with the following capabilities. The application leverages several modern Web APIs that determine the minimum browser version requirements:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Minimum Requirement</th>
            <th>Purpose</th>
            <th>Fallback Available</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>WebAssembly (WASM)</td><td>Required</td><td>Stockfish engine execution</td><td>Custom minimax fallback</td></tr>
          <tr><td>Web Workers</td><td>Required</td><td>Non-blocking AI computation</td><td>Synchronous fallback</td></tr>
          <tr><td>localStorage</td><td>Required</td><td>Game save/load functionality</td><td>Session-only mode</td></tr>
          <tr><td>ES2020+ Support</td><td>Required</td><td>Modern JavaScript features</td><td>Transpiled via Vite</td></tr>
          <tr><td>CSS Grid/Flexbox</td><td>Required</td><td>Responsive layout</td><td>No fallback (critical)</td></tr>
          <tr><td>CSS Custom Properties</td><td>Required</td><td>Theme system</td><td>No fallback (critical)</td></tr>
          <tr><td>Pointer Events</td><td>Recommended</td><td>Touch/mouse unification</td><td>Mouse events fallback</td></tr>
        </tbody>
      </table>

      <h4 className="text-base font-semibold mt-4 mb-2" style={{ color: 'hsl(var(--report-heading))' }}>8.2.1 Browser Compatibility Matrix</h4>

      <table className="report-table">
        <thead>
          <tr>
            <th>Browser</th>
            <th>Minimum Version</th>
            <th>Release Date</th>
            <th>Global Usage</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Google Chrome</td><td>89+</td><td>March 2021</td><td>65%</td><td>✅ Full Support</td></tr>
          <tr><td>Mozilla Firefox</td><td>89+</td><td>June 2021</td><td>7%</td><td>✅ Full Support</td></tr>
          <tr><td>Apple Safari</td><td>15+</td><td>Sept 2021</td><td>18%</td><td>✅ Full Support</td></tr>
          <tr><td>Microsoft Edge</td><td>89+</td><td>March 2021</td><td>5%</td><td>✅ Full Support</td></tr>
          <tr><td>Samsung Internet</td><td>15+</td><td>2021</td><td>3%</td><td>✅ Full Support</td></tr>
          <tr><td>Opera</td><td>75+</td><td>2021</td><td>2%</td><td>✅ Full Support</td></tr>
          <tr><td>Internet Explorer</td><td>Any</td><td>Discontinued</td><td>&lt;0.5%</td><td>❌ Not Supported</td></tr>
        </tbody>
      </table>

      <div className="report-info-box">
        <p className="text-sm font-medium mb-1">Browser Compatibility Note:</p>
        <p className="text-sm">The supported browsers cover approximately 99.5% of global web users as of 2024. Internet Explorer is explicitly not supported as it lacks essential features (ES modules, CSS Grid, Web Workers) and was officially retired by Microsoft in June 2022.</p>
      </div>

      <h3 className="report-subsection-title">8.3 Hardware Requirements</h3>
      
      <p className="report-paragraph">
        <strong>For Development:</strong>
      </p>
      <table className="report-table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Minimum</th>
            <th>Recommended</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Processor</td><td>Dual-core 2.0 GHz</td><td>Quad-core 2.5 GHz+</td></tr>
          <tr><td>RAM</td><td>4 GB</td><td>8 GB+</td></tr>
          <tr><td>Storage</td><td>500 MB available</td><td>2 GB+ SSD</td></tr>
          <tr><td>Display</td><td>1280 × 720</td><td>1920 × 1080+</td></tr>
          <tr><td>Network</td><td>Broadband internet</td><td>Broadband internet</td></tr>
        </tbody>
      </table>

      <p className="report-paragraph">
        <strong>For End Users:</strong>
      </p>
      <table className="report-table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Minimum</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Processor</td><td>Any modern CPU</td><td>WebAssembly runs on most devices</td></tr>
          <tr><td>RAM</td><td>2 GB</td><td>Browser with game: ~100MB usage</td></tr>
          <tr><td>Display</td><td>320px width (mobile)</td><td>Responsive design adapts to all sizes</td></tr>
          <tr><td>Input</td><td>Mouse / Touch</td><td>Click-to-move interface supports both</td></tr>
          <tr><td>Network</td><td>Initial download only</td><td>~180KB; plays fully offline after load</td></tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">8.4 Functional Requirements</h3>
      <p className="report-paragraph">
        The following functional requirements define the specific behaviors and features the application must provide. Each requirement is assigned a unique identifier, priority level (using MoSCoW prioritization), and acceptance criteria:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Requirement</th>
            <th>Priority</th>
            <th>Acceptance Criteria</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>FR-001</td><td>Display 8×8 chess board with pieces</td><td>Must</td><td>Board renders correctly with all 32 pieces</td></tr>
          <tr><td>FR-002</td><td>Implement all standard chess rules</td><td>Must</td><td>All piece movements, captures, and special moves work</td></tr>
          <tr><td>FR-003</td><td>Highlight legal moves on piece selection</td><td>Must</td><td>Valid squares highlighted when piece clicked</td></tr>
          <tr><td>FR-004</td><td>AI opponent with 3 difficulty levels</td><td>Must</td><td>Easy, Medium, Hard modes with distinct playing strength</td></tr>
          <tr><td>FR-005</td><td>Detect checkmate and end game</td><td>Must</td><td>Game over message displayed on checkmate</td></tr>
          <tr><td>FR-006</td><td>Detect stalemate and draw conditions</td><td>Must</td><td>Draw detected for stalemate, repetition, 50-move, insufficient material</td></tr>
          <tr><td>FR-007</td><td>Support pawn promotion</td><td>Must</td><td>Promotion dialog appears; all 4 piece choices available</td></tr>
          <tr><td>FR-008</td><td>Support castling (kingside/queenside)</td><td>Must</td><td>Castling works when legal; prevented when conditions not met</td></tr>
          <tr><td>FR-009</td><td>Support en passant capture</td><td>Must</td><td>En passant available when conditions are met</td></tr>
          <tr><td>FR-010</td><td>Display move history</td><td>Should</td><td>PGN notation shown in sidebar</td></tr>
          <tr><td>FR-011</td><td>Undo last move(s)</td><td>Should</td><td>Both player and AI moves reverted correctly</td></tr>
          <tr><td>FR-012</td><td>Reset/new game</td><td>Should</td><td>Board returns to starting position</td></tr>
          <tr><td>FR-013</td><td>Display captured pieces</td><td>Could</td><td>Captured pieces shown with material count</td></tr>
          <tr><td>FR-014</td><td>Board orientation flip</td><td>Could</td><td>Board can be viewed from white or black perspective</td></tr>
          <tr><td>FR-015</td><td>Sound effects for moves</td><td>Won't (v1)</td><td>Deferred to future version</td></tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">8.5 Non-Functional Requirements</h3>
      <p className="report-paragraph">
        Non-functional requirements define the quality attributes, performance constraints, and system-level characteristics that the application must satisfy:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Requirement</th>
            <th>Target</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>NFR-001</td><td>Performance</td><td>Initial page load time</td><td>&lt;3 seconds on 4G</td></tr>
          <tr><td>NFR-002</td><td>Performance</td><td>AI response time (easy)</td><td>&lt;500ms</td></tr>
          <tr><td>NFR-003</td><td>Performance</td><td>AI response time (medium)</td><td>&lt;1.5 seconds</td></tr>
          <tr><td>NFR-004</td><td>Performance</td><td>AI response time (hard)</td><td>&lt;3 seconds</td></tr>
          <tr><td>NFR-005</td><td>Performance</td><td>Bundle size (gzipped)</td><td>&lt;500 KB</td></tr>
          <tr><td>NFR-006</td><td>Usability</td><td>Lighthouse Accessibility score</td><td>&gt;85/100</td></tr>
          <tr><td>NFR-007</td><td>Usability</td><td>Mobile-friendly responsive design</td><td>320px–4K support</td></tr>
          <tr><td>NFR-008</td><td>Reliability</td><td>Zero crashes during gameplay</td><td>100% stability</td></tr>
          <tr><td>NFR-009</td><td>Reliability</td><td>Graceful error handling</td><td>No unhandled exceptions</td></tr>
          <tr><td>NFR-010</td><td>Compatibility</td><td>Cross-browser support</td><td>Chrome, Firefox, Safari, Edge</td></tr>
          <tr><td>NFR-011</td><td>Maintainability</td><td>Code coverage</td><td>&gt;85%</td></tr>
          <tr><td>NFR-012</td><td>Maintainability</td><td>TypeScript strict mode</td><td>100% type coverage</td></tr>
          <tr><td>NFR-013</td><td>Security</td><td>No known vulnerabilities</td><td>npm audit clean</td></tr>
          <tr><td>NFR-014</td><td>Security</td><td>No personal data collection</td><td>Privacy compliant</td></tr>
          <tr><td>NFR-015</td><td>Portability</td><td>Static deployment</td><td>Any CDN/static host</td></tr>
        </tbody>
      </table>

      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Deployment Requirements:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Static file hosting (no server-side runtime required)</li>
          <li>CDN support for optimal global performance</li>
          <li>HTTPS for secure deployment</li>
          <li>Compatible platforms: Vercel, Netlify, GitHub Pages, AWS S3+CloudFront, Firebase Hosting</li>
          <li>Estimated monthly hosting cost: $0 (free tier) to $5 (custom domain)</li>
        </ul>
      </div>
    </>
  );
};

export default RequirementsSection;
