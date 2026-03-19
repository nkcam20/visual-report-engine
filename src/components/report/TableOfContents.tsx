import React from 'react';

interface TOCItem {
  number: string;
  title: string;
  page: number;
  subItems?: { title: string; page: number }[];
}

const tocItems: TOCItem[] = [
  { number: '1', title: 'Acknowledgements', page: 3 },
  { number: '2', title: 'Abstract', page: 4 },
  { number: '3', title: 'Objective', page: 5 },
  { 
    number: '4', 
    title: 'Introduction', 
    page: 7,
    subItems: [
      { title: '4.1 Background', page: 7 },
      { title: '4.2 Chess Engines', page: 8 },
      { title: '4.3 Project Relevance', page: 9 },
      { title: '4.4 Problem Statement', page: 10 },
      { title: '4.5 Scope and Limitations', page: 11 },
      { title: '4.6 Project Motivation', page: 11 },
    ]
  },
  { 
    number: '5', 
    title: 'Literature Review', 
    page: 12,
    subItems: [
      { title: '5.1 History of Computer Chess', page: 12 },
      { title: '5.2 Evolution of Chess Engines', page: 13 },
      { title: '5.3 Minimax Algorithm & Alpha-Beta Pruning', page: 14 },
      { title: '5.4 Position Evaluation Functions', page: 16 },
      { title: '5.5 Web-Based Game Development', page: 17 },
      { title: '5.6 React.js & Component Architecture', page: 18 },
      { title: '5.7 WebAssembly & Chess Engines', page: 19 },
      { title: '5.8 Human-Computer Interaction in Chess', page: 20 },
      { title: '5.9 Research Gap Identification', page: 21 },
    ]
  },
  { 
    number: '6', 
    title: 'Methodology', 
    page: 22,
    subItems: [
      { title: '6.1 Software Development Methodology', page: 22 },
      { title: '6.2 Requirements Engineering', page: 23 },
      { title: '6.3 Design Methodology', page: 24 },
      { title: '6.4 Implementation Strategy', page: 25 },
      { title: '6.5 Testing Strategy', page: 26 },
      { title: '6.6 Tools and Environment', page: 27 },
    ]
  },
  { 
    number: '7', 
    title: 'Feasibility Study', 
    page: 28,
    subItems: [
      { title: '7.1 Technical Feasibility', page: 28 },
      { title: '7.2 Economic Feasibility', page: 29 },
      { title: '7.3 Operational Feasibility', page: 30 },
      { title: '7.4 Schedule Feasibility', page: 31 },
      { title: '7.5 Legal Feasibility', page: 32 },
      { title: '7.6 Feasibility Summary', page: 33 },
    ]
  },
  { 
    number: '8', 
    title: 'System Requirements', 
    page: 34,
    subItems: [
      { title: '8.1 Software Requirements', page: 34 },
      { title: '8.2 Browser Requirements', page: 35 },
      { title: '8.3 Hardware Requirements', page: 36 },
    ]
  },
  { 
    number: '9', 
    title: 'Technology Stack', 
    page: 37,
    subItems: [
      { title: '9.1 Architecture Overview', page: 38 },
      { title: '9.2 Frontend Technologies', page: 39 },
      { title: '9.3 Chess Engine Integration', page: 40 },
    ]
  },
  { number: '10', title: 'System Architecture Diagrams', page: 41 },
  { number: '11', title: 'Folder Structure', page: 44 },
  { 
    number: '12', 
    title: 'Database Schema', 
    page: 46,
    subItems: [
      { title: '12.1 Entity-Relationship Diagram', page: 46 },
      { title: '12.2 SQL Schema Definitions', page: 47 },
      { title: '12.3 Data Flow Diagrams', page: 49 },
    ]
  },
  { 
    number: '13', 
    title: 'Development Steps', 
    page: 51,
    subItems: [
      { title: '13.1 Environment Setup', page: 51 },
      { title: '13.2 Backend API Design', page: 52 },
      { title: '13.3 Frontend UI Development', page: 53 },
      { title: '13.4 Chess Engine Integration', page: 55 },
      { title: '13.5 Testing Strategy', page: 57 },
      { title: '13.6 Deployment', page: 58 },
    ]
  },
  { 
    number: '14', 
    title: 'User Guide', 
    page: 59,
    subItems: [
      { title: '14.1 Player Workflow', page: 59 },
      { title: '14.2 Admin Workflow', page: 62 },
      { title: '14.3 Example Scenarios', page: 63 },
    ]
  },
  { number: '15', title: 'System Workflow Diagrams', page: 64 },
  { 
    number: '16', 
    title: 'Testing & Quality Assurance', 
    page: 66,
    subItems: [
      { title: '16.1 Testing Methodology', page: 66 },
      { title: '16.2 Unit Testing', page: 67 },
      { title: '16.3 Integration Testing', page: 68 },
      { title: '16.4 System Testing', page: 70 },
      { title: '16.5 Usability Testing', page: 71 },
      { title: '16.6 Cross-Browser Testing', page: 72 },
      { title: '16.7 Responsive Design Testing', page: 73 },
      { title: '16.8 Test Summary', page: 73 },
    ]
  },
  { 
    number: '17', 
    title: 'Results & Analysis', 
    page: 74,
    subItems: [
      { title: '17.1 AI Performance Analysis', page: 74 },
      { title: '17.2 Evaluation Function Accuracy', page: 75 },
      { title: '17.3 Alpha-Beta Pruning Efficiency', page: 76 },
      { title: '17.4 Game Outcome Analysis', page: 77 },
      { title: '17.5 User Experience Metrics', page: 78 },
      { title: '17.6 Application Size & Load Performance', page: 79 },
    ]
  },
  { 
    number: '18', 
    title: 'Performance Analysis', 
    page: 80,
    subItems: [
      { title: '18.1 Runtime Performance Profiling', page: 80 },
      { title: '18.2 Memory Usage Analysis', page: 81 },
      { title: '18.3 Search Tree Analysis', page: 82 },
      { title: '18.4 React Rendering Performance', page: 83 },
      { title: '18.5 Network Performance', page: 84 },
      { title: '18.6 Bundle Size Breakdown', page: 84 },
    ]
  },
  { 
    number: '19', 
    title: 'Code Implementation', 
    page: 85,
    subItems: [
      { title: '19.1 ChessBoard Component', page: 85 },
      { title: '19.2 useChessGame Hook', page: 87 },
      { title: '19.3 Chess AI Module', page: 89 },
      { title: '19.4 Game Storage Utilities', page: 90 },
    ]
  },
  { number: '20', title: 'UI Screenshots & Mockups', page: 91 },
  { 
    number: '21', 
    title: 'Comparative Study', 
    page: 92,
    subItems: [
      { title: '21.1 Comparison with Existing Platforms', page: 92 },
      { title: '21.2 Unique Advantages', page: 93 },
      { title: '21.3 Academic Project Comparison', page: 94 },
      { title: '21.4 AI Strength Comparison', page: 94 },
      { title: '21.5 SWOT Analysis', page: 95 },
    ]
  },
  { number: '22', title: 'Security Considerations', page: 96 },
  { number: '23', title: 'Project Management', page: 97 },
  { number: '24', title: 'Future Enhancements', page: 98 },
  { number: '25', title: 'Conclusion', page: 99 },
  { number: '26', title: 'References', page: 100 },
  { number: '', title: 'Appendices', page: 101 },
];

const TableOfContents: React.FC = () => {
  return (
    <div className="page-break report-container">
      <h1 className="report-section-title" style={{ marginTop: 0 }}>Table of Contents</h1>
      
      <div className="space-y-1.5">
        {tocItems.map((item, idx) => (
          <div key={idx}>
            <div className="flex items-baseline">
              <span className="font-bold text-base" style={{ color: 'hsl(var(--primary))' }}>
                {item.number}{item.number && '.'}
              </span>
              <span className="ml-2 font-semibold text-base">{item.title}</span>
              <span className="flex-1 mx-2 border-b border-dotted border-muted-foreground/40" />
              <span className="font-medium text-muted-foreground text-sm">{item.page}</span>
            </div>
            
            {item.subItems && (
              <div className="ml-8 mt-0.5 space-y-0.5">
                {item.subItems.map((subItem) => (
                  <div key={subItem.title} className="flex items-baseline text-xs">
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

      <p className="mt-8 text-sm text-muted-foreground text-center">
        AI-Powered Chess Game — Nanda Kumar — Page 2 of 150
      </p>
    </div>
  );
};

export default TableOfContents;
