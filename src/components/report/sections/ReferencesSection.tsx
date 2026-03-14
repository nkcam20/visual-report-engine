import React from 'react';

const ReferencesSection: React.FC = () => {
  const references = [
    {
      number: 1,
      author: 'Shannon, C. E.',
      year: '1950',
      title: 'Programming a Computer for Playing Chess',
      source: 'Philosophical Magazine, Ser. 7, Vol. 41, No. 314',
      url: 'https://vision.unipv.it/IA1/ProgramsijogandoChess.pdf'
    },
    {
      number: 2,
      author: 'Silver, D., et al.',
      year: '2018',
      title: 'A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play',
      source: 'Science, Vol. 362, Issue 6419, pp. 1140-1144',
      url: 'https://www.science.org/doi/10.1126/science.aar6404'
    },
    {
      number: 3,
      author: 'Stockfish Developers',
      year: '2024',
      title: 'Stockfish: Open Source Chess Engine',
      source: 'Official Repository',
      url: 'https://github.com/official-stockfish/Stockfish'
    },
    {
      number: 4,
      author: 'Stockfish.js Contributors',
      year: '2024',
      title: 'Stockfish.js: Stockfish Chess Engine Compiled to JavaScript',
      source: 'npm Package',
      url: 'https://www.npmjs.com/package/stockfish.js'
    },
    {
      number: 5,
      author: 'Jhlywa, J.',
      year: '2024',
      title: 'chess.js: A TypeScript Chess Library',
      source: 'GitHub Repository',
      url: 'https://github.com/jhlywa/chess.js'
    },
    {
      number: 6,
      author: 'React Team',
      year: '2024',
      title: 'React: A JavaScript library for building user interfaces',
      source: 'Official Documentation',
      url: 'https://react.dev/'
    },
    {
      number: 7,
      author: 'Microsoft',
      year: '2024',
      title: 'TypeScript: JavaScript with Syntax for Types',
      source: 'Official Documentation',
      url: 'https://www.typescriptlang.org/'
    },
    {
      number: 8,
      author: 'Evan You',
      year: '2024',
      title: 'Vite: Next Generation Frontend Tooling',
      source: 'Official Documentation',
      url: 'https://vitejs.dev/'
    },
    {
      number: 9,
      author: 'Tailwind Labs',
      year: '2024',
      title: 'Tailwind CSS: A Utility-First CSS Framework',
      source: 'Official Documentation',
      url: 'https://tailwindcss.com/'
    },
    {
      number: 10,
      author: 'shadcn',
      year: '2024',
      title: 'shadcn/ui: Beautifully designed components',
      source: 'Official Website',
      url: 'https://ui.shadcn.com/'
    },
    {
      number: 11,
      author: 'WebAssembly Community Group',
      year: '2024',
      title: 'WebAssembly Specification',
      source: 'W3C Working Group',
      url: 'https://webassembly.org/'
    },
    {
      number: 12,
      author: 'MDN Web Docs',
      year: '2024',
      title: 'Web Workers API',
      source: 'Mozilla Developer Network',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API'
    },
    {
      number: 13,
      author: 'FIDE',
      year: '2024',
      title: 'Laws of Chess',
      source: 'World Chess Federation',
      url: 'https://www.fide.com/FIDE/handbook/LawsOfChess.pdf'
    },
    {
      number: 14,
      author: 'Edwards, S. J.',
      year: '1994',
      title: 'Portable Game Notation Specification and Implementation Guide',
      source: 'Internet Chess Library',
      url: 'https://www.saremba.de/chessgml/standards/pgn/pgn-complete.htm'
    },
    {
      number: 15,
      author: 'Forsyth, D.',
      year: '1883',
      title: 'Forsyth–Edwards Notation',
      source: 'Chess Position Notation Standard',
      url: 'https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation'
    },
  ];

  return (
    <>
      <p className="report-paragraph">
        The following references were consulted during the development of this project:
      </p>

      <div className="space-y-4">
        {references.map((ref) => (
          <div key={ref.number} className="flex gap-4">
            <span className="text-muted-foreground font-mono text-sm">[{ref.number}]</span>
            <div className="text-sm">
              <span className="font-medium">{ref.author}</span>{' '}
              <span className="text-muted-foreground">({ref.year}).</span>{' '}
              <span className="italic">{ref.title}.</span>{' '}
              <span>{ref.source}.</span>{' '}
              <a 
                href={ref.url} 
                className="text-primary hover:underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                {ref.url}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <h3 className="report-subsection-title">Document Information</h3>
        <table className="report-table">
          <tbody>
            <tr>
              <td className="font-medium">Document Title</td>
              <td>AI-Powered Chess Game — Technical Documentation and Project Report</td>
            </tr>
            <tr>
              <td className="font-medium">Author</td>
              <td>Nanda Kumar</td>
            </tr>
            <tr>
              <td className="font-medium">Institution</td>
              <td>Department of Computer Science</td>
            </tr>
            <tr>
              <td className="font-medium">Date</td>
              <td>March 2026</td>
            </tr>
            <tr>
              <td className="font-medium">Version</td>
              <td>1.0</td>
            </tr>
            <tr>
              <td className="font-medium">Total Pages</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-12 text-center text-muted-foreground text-sm">
        <p>— End of Document —</p>
      </div>
    </>
  );
};

export default ReferencesSection;
