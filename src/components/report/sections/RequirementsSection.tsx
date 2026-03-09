import React from 'react';

const RequirementsSection: React.FC = () => {
  return (
    <>
      <h3 className="report-subsection-title">4.1 Software Requirements</h3>
      <p className="report-paragraph">
        The following software components are required for development and deployment of the AI-Powered Chess Game:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Requirement</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Operating System</td>
            <td>Windows / macOS / Linux</td>
            <td>Any modern version</td>
          </tr>
          <tr>
            <td>Node.js</td>
            <td>JavaScript Runtime</td>
            <td>v18.0.0 or higher</td>
          </tr>
          <tr>
            <td>pnpm / npm</td>
            <td>Package Manager</td>
            <td>pnpm v8.0+ or npm v9.0+</td>
          </tr>
          <tr>
            <td>Web Browser</td>
            <td>Chrome / Firefox / Edge / Safari</td>
            <td>Latest version with WASM support</td>
          </tr>
          <tr>
            <td>Code Editor</td>
            <td>VS Code (recommended)</td>
            <td>Latest</td>
          </tr>
          <tr>
            <td>Git</td>
            <td>Version Control System</td>
            <td>v2.30+</td>
          </tr>
          <tr>
            <td>TypeScript</td>
            <td>Type-safe JavaScript</td>
            <td>v5.0+</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">4.2 Browser Requirements</h3>
      <p className="report-paragraph">
        End users require a modern web browser with the following capabilities:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Minimum Requirement</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>WebAssembly (WASM)</td>
            <td>Required</td>
            <td>Stockfish engine execution</td>
          </tr>
          <tr>
            <td>Web Workers</td>
            <td>Required</td>
            <td>Non-blocking AI computation</td>
          </tr>
          <tr>
            <td>localStorage</td>
            <td>Required</td>
            <td>Game save/load functionality</td>
          </tr>
          <tr>
            <td>ES2020+ Support</td>
            <td>Required</td>
            <td>Modern JavaScript features</td>
          </tr>
          <tr>
            <td>CSS Grid/Flexbox</td>
            <td>Required</td>
            <td>Responsive layout</td>
          </tr>
        </tbody>
      </table>

      <div className="report-info-box">
        <p className="text-sm font-medium mb-1">Browser Compatibility:</p>
        <p className="text-sm">Chrome 89+, Firefox 89+, Safari 15+, Edge 89+ — All support WebAssembly and Web Workers</p>
      </div>

      <h3 className="report-subsection-title">4.3 Hardware Requirements</h3>
      
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
          <tr>
            <td>Processor</td>
            <td>Dual-core 2.0 GHz</td>
            <td>Quad-core 2.5 GHz+</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>4 GB</td>
            <td>8 GB+</td>
          </tr>
          <tr>
            <td>Storage</td>
            <td>500 MB available</td>
            <td>2 GB+ SSD</td>
          </tr>
          <tr>
            <td>Display</td>
            <td>1280 × 720</td>
            <td>1920 × 1080+</td>
          </tr>
          <tr>
            <td>Network</td>
            <td>Broadband internet</td>
            <td>Broadband internet</td>
          </tr>
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
          <tr>
            <td>Processor</td>
            <td>Any modern CPU</td>
            <td>WebAssembly runs on most devices</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>2 GB</td>
            <td>Browser with Stockfish: ~100MB</td>
          </tr>
          <tr>
            <td>Display</td>
            <td>320px width (mobile)</td>
            <td>Responsive design adapts</td>
          </tr>
          <tr>
            <td>Input</td>
            <td>Mouse / Touch</td>
            <td>Click-to-move interface</td>
          </tr>
        </tbody>
      </table>

      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">Deployment Requirements:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Static file hosting (no server-side runtime required)</li>
          <li>CDN support for optimal performance</li>
          <li>HTTPS for secure deployment</li>
          <li>Compatible platforms: Vercel, Netlify, GitHub Pages, AWS S3, etc.</li>
        </ul>
      </div>
    </>
  );
};

export default RequirementsSection;
