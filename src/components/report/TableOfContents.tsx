import React from 'react';

interface TOCItem {
  number: string;
  title: string;
  page: number;
  subItems?: { title: string; page: number }[];
}

const tocItems: TOCItem[] = [
  { number: '1', title: 'Abstract', page: 3 },
  { number: '2', title: 'Objective', page: 4 },
  { 
    number: '3', 
    title: 'Introduction', 
    page: 5,
    subItems: [
      { title: '3.1 Background', page: 5 },
      { title: '3.2 Chess Engines', page: 6 },
      { title: '3.3 Project Relevance', page: 7 },
      { title: '3.4 Problem Statement', page: 8 },
      { title: '3.5 Scope and Limitations', page: 8 },
    ]
  },
  { 
    number: '4', 
    title: 'System Requirements', 
    page: 9,
    subItems: [
      { title: '4.1 Software Requirements', page: 9 },
      { title: '4.2 Browser Requirements', page: 10 },
      { title: '4.3 Hardware Requirements', page: 10 },
    ]
  },
  { 
    number: '5', 
    title: 'Technology Stack', 
    page: 11,
    subItems: [
      { title: '5.1 Architecture Overview', page: 12 },
      { title: '5.2 Frontend Technologies', page: 13 },
      { title: '5.3 Chess Engine Integration', page: 14 },
    ]
  },
  { number: '6', title: 'System Architecture Diagrams', page: 15 },
  { number: '7', title: 'Folder Structure', page: 18 },
  { 
    number: '8', 
    title: 'Database Schema', 
    page: 19,
    subItems: [
      { title: '8.1 Entity-Relationship Diagram', page: 19 },
      { title: '8.2 SQL Schema Definitions', page: 20 },
      { title: '8.3 Data Flow Diagrams', page: 22 },
    ]
  },
  { 
    number: '9', 
    title: 'Development Steps', 
    page: 24,
    subItems: [
      { title: '9.1 Environment Setup', page: 24 },
      { title: '9.2 Backend API Design', page: 25 },
      { title: '9.3 Frontend UI Development', page: 26 },
      { title: '9.4 Chess Engine Integration', page: 28 },
      { title: '9.5 Testing Strategy', page: 30 },
      { title: '9.6 Deployment', page: 31 },
    ]
  },
  { 
    number: '10', 
    title: 'User Guide', 
    page: 32,
    subItems: [
      { title: '10.1 Player Workflow', page: 32 },
      { title: '10.2 Admin Workflow', page: 34 },
      { title: '10.3 Example Scenarios', page: 35 },
    ]
  },
  { number: '11', title: 'System Workflow Diagrams', page: 36 },
  { 
    number: '12', 
    title: 'Code Implementation', 
    page: 38,
    subItems: [
      { title: '12.1 ChessBoard Component', page: 38 },
      { title: '12.2 useChessGame Hook', page: 40 },
      { title: '12.3 useStockfish Hook', page: 42 },
      { title: '12.4 Game Storage Utilities', page: 44 },
    ]
  },
  { number: '13', title: 'UI Screenshots & Mockups', page: 45 },
  { number: '14', title: 'Future Enhancements', page: 47 },
  { number: '15', title: 'Conclusion', page: 49 },
  { number: '16', title: 'References', page: 50 },
];

const TableOfContents: React.FC = () => {
  return (
    <div className="page-break report-container">
      <h1 className="report-section-title" style={{ marginTop: 0 }}>Table of Contents</h1>
      
      <div className="space-y-2">
        {tocItems.map((item) => (
          <div key={item.number}>
            <div className="flex items-baseline">
              <span className="font-bold text-lg" style={{ color: 'hsl(var(--primary))' }}>
                {item.number}.
              </span>
              <span className="ml-2 font-semibold text-lg">{item.title}</span>
              <span className="flex-1 mx-2 border-b border-dotted border-muted-foreground/40" />
              <span className="font-medium text-muted-foreground">{item.page}</span>
            </div>
            
            {item.subItems && (
              <div className="ml-8 mt-1 space-y-1">
                {item.subItems.map((subItem) => (
                  <div key={subItem.title} className="flex items-baseline text-sm">
                    <span className="text-muted-foreground">{subItem.title}</span>
                    <span className="flex-1 mx-2 border-b border-dotted border-muted-foreground/30" />
                    <span className="text-muted-foreground">{subItem.page}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm text-muted-foreground text-center">
        AI-Powered Chess Game — Nanda Kumar — Page 2 of 50
      </p>
    </div>
  );
};

export default TableOfContents;
