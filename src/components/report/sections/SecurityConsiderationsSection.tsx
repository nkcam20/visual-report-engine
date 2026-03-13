import React from 'react';

const SecurityConsiderationsSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        This chapter examines the security considerations relevant to the AI-Powered Chess Game. Although the application is a client-side web application with no server-side components or user authentication, security best practices are applied to protect against common web vulnerabilities and ensure data integrity.
      </p>

      <h3 className="report-subsection-title">22.1 Threat Model</h3>
      <p className="report-paragraph">
        A threat model was developed to identify potential security risks and their mitigations. The STRIDE model (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) was applied:
      </p>

      <table className="report-table">
        <thead>
          <tr>
            <th>Threat Category</th>
            <th>Applicability</th>
            <th>Risk Level</th>
            <th>Mitigation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spoofing (Identity)</td>
            <td>Low — no authentication system</td>
            <td>Very Low</td>
            <td>N/A — no user identity to spoof</td>
          </tr>
          <tr>
            <td>Tampering (Data)</td>
            <td>Medium — localStorage can be modified</td>
            <td>Low</td>
            <td>Input validation on loaded game data; graceful handling of corrupted state</td>
          </tr>
          <tr>
            <td>Repudiation</td>
            <td>Low — no audit trail needed</td>
            <td>Very Low</td>
            <td>N/A — single-player game</td>
          </tr>
          <tr>
            <td>Information Disclosure</td>
            <td>Low — no sensitive data stored</td>
            <td>Very Low</td>
            <td>Game data is non-sensitive; no PII collected</td>
          </tr>
          <tr>
            <td>Denial of Service</td>
            <td>Medium — AI computation could hang</td>
            <td>Low</td>
            <td>Timeout mechanisms on AI calculations; search depth limits</td>
          </tr>
          <tr>
            <td>Elevation of Privilege</td>
            <td>Low — no privileged operations</td>
            <td>Very Low</td>
            <td>N/A — all operations are equal privilege</td>
          </tr>
        </tbody>
      </table>

      <h3 className="report-subsection-title">22.2 Client-Side Security Measures</h3>
      <p className="report-paragraph">
        The following security measures are implemented in the application:
      </p>

      <h4 className="text-base font-semibold mt-4 mb-2" style={{ color: 'hsl(var(--report-heading))' }}>22.2.1 Input Validation</h4>
      <ul className="report-list">
        <li><strong>Move Validation:</strong> All player moves are validated through chess.js before being applied to the game state. This prevents illegal moves from being executed, even if the client-side code is modified.</li>
        <li><strong>FEN String Validation:</strong> When loading saved games, FEN (Forsyth–Edwards Notation) strings are validated before being applied to ensure they represent valid board positions.</li>
        <li><strong>localStorage Data Validation:</strong> Saved game data retrieved from localStorage is validated for structure and type correctness before use. Malformed data is discarded gracefully.</li>
      </ul>

      <h4 className="text-base font-semibold mt-4 mb-2" style={{ color: 'hsl(var(--report-heading))' }}>22.2.2 Content Security</h4>
      <ul className="report-list">
        <li><strong>No Dynamic HTML Injection:</strong> The application uses React's JSX rendering, which automatically escapes content and prevents XSS (Cross-Site Scripting) attacks. No <code>dangerouslySetInnerHTML</code> is used.</li>
        <li><strong>No External API Calls:</strong> The application makes no network requests during gameplay, eliminating risks from CSRF, SSRF, or API injection attacks.</li>
        <li><strong>No User-Generated Content:</strong> The application does not accept or display user-generated content beyond move inputs, minimizing the attack surface.</li>
      </ul>

      <h4 className="text-base font-semibold mt-4 mb-2" style={{ color: 'hsl(var(--report-heading))' }}>22.2.3 Dependency Security</h4>
      <ul className="report-list">
        <li><strong>Regular Audits:</strong> Dependencies are regularly audited using <code>npm audit</code> to identify and resolve known vulnerabilities.</li>
        <li><strong>Minimal Dependencies:</strong> The project uses a curated set of well-maintained, widely-used libraries to minimize the supply chain attack surface.</li>
        <li><strong>Lock Files:</strong> Package lock files ensure reproducible builds and prevent unexpected dependency updates.</li>
        <li><strong>License Compliance:</strong> All dependencies use permissive open-source licenses (MIT, Apache 2.0, BSD).</li>
      </ul>

      <h3 className="report-subsection-title">22.3 Data Privacy</h3>
      <p className="report-paragraph">
        The application adheres to privacy-by-design principles:
      </p>
      <ul className="report-list">
        <li><strong>No Data Collection:</strong> The application does not collect, transmit, or store any personal information.</li>
        <li><strong>Local Storage Only:</strong> All game data (saved games, preferences) is stored exclusively in the user's browser localStorage.</li>
        <li><strong>No Cookies:</strong> The application does not set any cookies.</li>
        <li><strong>No Analytics:</strong> No usage tracking, telemetry, or analytics scripts are included.</li>
        <li><strong>No Third-Party Services:</strong> No external services are contacted during application use.</li>
      </ul>

      <div className="report-success-box">
        <p className="text-sm font-semibold mb-2">GDPR / Privacy Compliance:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>No personal data processing — GDPR obligations minimal</li>
          <li>No data controller/processor relationship — fully client-side</li>
          <li>No cross-border data transfers — data stays in user's browser</li>
          <li>User has full control over data (can clear localStorage at any time)</li>
        </ul>
      </div>

      <h3 className="report-subsection-title">22.4 Deployment Security</h3>
      <p className="report-paragraph">
        When deployed to production, the following security headers and configurations are recommended:
      </p>

      <div className="report-code-block">
        <pre className="text-xs overflow-x-auto">
{`# Recommended HTTP Security Headers

Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=31536000; includeSubDomains`}
        </pre>
      </div>

      <h3 className="report-subsection-title">22.5 Future Security Enhancements</h3>
      <p className="report-paragraph">
        If the application is extended with server-side features (multiplayer, user accounts), the following additional security measures would be required:
      </p>
      <ul className="report-list">
        <li><strong>Authentication:</strong> JWT-based authentication with secure token storage and refresh mechanisms</li>
        <li><strong>Authorization:</strong> Role-based access control (RBAC) for admin functionality</li>
        <li><strong>Database Security:</strong> Row-level security (RLS) policies, parameterized queries to prevent SQL injection</li>
        <li><strong>Rate Limiting:</strong> API rate limiting to prevent abuse and DDoS attacks</li>
        <li><strong>HTTPS:</strong> Mandatory TLS/SSL for all communications</li>
        <li><strong>Input Sanitization:</strong> Server-side validation for all user inputs</li>
        <li><strong>Security Headers:</strong> Comprehensive CSP, HSTS, and other protective headers</li>
      </ul>

      <div className="report-note">
        <p className="text-sm"><strong>Security Summary:</strong> The current application has a minimal attack surface due to its fully client-side architecture. The primary security measures focus on input validation, dependency management, and adherence to React's built-in XSS protections. The application collects no personal data and requires no authentication, resulting in a low-risk security profile.</p>
      </div>
    </>
  );
};

export default SecurityConsiderationsSection;
