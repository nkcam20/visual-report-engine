import React from 'react';

interface SectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
  pageStart: number;
  pageEnd: number;
}

const ReportSection: React.FC<SectionProps> = ({ number, title, children, pageStart }) => {
  return (
    <div className="page-break report-container">
      <h2 className="report-section-title">
        {number}. {title}
      </h2>
      {children}
      <p className="mt-8 text-sm text-muted-foreground text-center">
        AI-Powered Chess Game — Nanda Kumar — Page {pageStart} of 150
      </p>
    </div>
  );
};

export default ReportSection;
