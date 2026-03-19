import React from 'react';

const CoverPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10 p-8">
      <div className="text-center max-w-3xl">
        {/* Institution Logo Placeholder */}
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/10 border-4 border-primary flex items-center justify-center">
          <span className="text-4xl">🎓</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold mb-4" style={{ color: 'hsl(var(--report-heading))' }}>
          AI-Powered Chess Game
        </h1>
        
        <h2 className="text-2xl font-medium mb-8" style={{ color: 'hsl(var(--report-subheading))' }}>
          A Web-Based Chess Application with<br />
          Stockfish AI Integration
        </h2>

        {/* Decorative Chess Pieces */}
        <div className="flex justify-center gap-4 text-6xl mb-12 opacity-80">
          <span>♔</span>
          <span>♕</span>
          <span>♖</span>
          <span>♗</span>
          <span>♘</span>
          <span>♙</span>
        </div>

        {/* Project Details */}
        <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
          <table className="mx-auto text-left">
            <tbody>
              <tr>
                <td className="py-2 pr-8 font-semibold text-muted-foreground">Author:</td>
                <td className="py-2 font-medium">Nanda Kumar</td>
              </tr>
              <tr>
                <td className="py-2 pr-8 font-semibold text-muted-foreground">Project Type:</td>
                <td className="py-2">Web Application Development</td>
              </tr>
              <tr>
                <td className="py-2 pr-8 font-semibold text-muted-foreground">Technology:</td>
                <td className="py-2">React.js, TypeScript, Stockfish.js</td>
              </tr>
              <tr>
                <td className="py-2 pr-8 font-semibold text-muted-foreground">Institution:</td>
                <td className="py-2">Department of Computer Science</td>
              </tr>
              <tr>
                <td className="py-2 pr-8 font-semibold text-muted-foreground">Date:</td>
                <td className="py-2">March 2026</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Page Number */}
        <p className="mt-12 text-sm text-muted-foreground">
          AI-Powered Chess Game — Nanda Kumar — Page 1 of 150
        </p>
      </div>
    </div>
  );
};

export default CoverPage;
