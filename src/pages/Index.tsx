import React from 'react';
import CoverPage from '@/components/report/CoverPage';
import TableOfContents from '@/components/report/TableOfContents';
import ReportSection from '@/components/report/ReportSection';
import AbstractSection from '@/components/report/sections/AbstractSection';
import ObjectiveSection from '@/components/report/sections/ObjectiveSection';
import IntroductionSection from '@/components/report/sections/IntroductionSection';
import RequirementsSection from '@/components/report/sections/RequirementsSection';
import TechStackSection from '@/components/report/sections/TechStackSection';
import ArchitectureDiagram from '@/components/report/diagrams/ArchitectureDiagram';
import ComponentDiagram from '@/components/report/diagrams/ComponentDiagram';
import DataFlowDiagram from '@/components/report/diagrams/DataFlowDiagram';
import ERDiagram from '@/components/report/diagrams/ERDiagram';
import WorkflowDiagram from '@/components/report/diagrams/WorkflowDiagram';
import SequenceDiagram from '@/components/report/diagrams/SequenceDiagram';
import UIWireframe from '@/components/report/diagrams/UIWireframe';
import FolderStructureSection from '@/components/report/sections/FolderStructureSection';
import DatabaseSection from '@/components/report/sections/DatabaseSection';
import DevelopmentSection from '@/components/report/sections/DevelopmentSection';
import UserGuideSection from '@/components/report/sections/UserGuideSection';
import CodeImplementationSection from '@/components/report/sections/CodeImplementationSection';
import FutureEnhancementsSection from '@/components/report/sections/FutureEnhancementsSection';
import ConclusionSection from '@/components/report/sections/ConclusionSection';
import ReferencesSection from '@/components/report/sections/ReferencesSection';
import { Button } from '@/components/ui/button';
import { Printer, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Print Controls - Hidden when printing */}
      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <Button onClick={handlePrint} className="shadow-lg">
          <Printer className="w-4 h-4 mr-2" />
          Print / Save as PDF
        </Button>
      </div>

      {/* Cover Page */}
      <CoverPage />

      {/* Table of Contents */}
      <TableOfContents />

      {/* Section 1: Abstract */}
      <ReportSection number="1" title="Abstract" pageStart={3} pageEnd={3}>
        <AbstractSection />
      </ReportSection>

      {/* Section 2: Objective */}
      <ReportSection number="2" title="Objective" pageStart={4} pageEnd={4}>
        <ObjectiveSection />
      </ReportSection>

      {/* Section 3: Introduction */}
      <ReportSection number="3" title="Introduction" pageStart={5} pageEnd={8}>
        <IntroductionSection />
      </ReportSection>

      {/* Section 4: System Requirements */}
      <ReportSection number="4" title="System Requirements" pageStart={9} pageEnd={10}>
        <RequirementsSection />
      </ReportSection>

      {/* Section 5: Technology Stack */}
      <ReportSection number="5" title="Technology Stack" pageStart={11} pageEnd={14}>
        <TechStackSection />
      </ReportSection>

      {/* Section 6: System Architecture Diagrams */}
      <ReportSection number="6" title="System Architecture Diagrams" pageStart={15} pageEnd={17}>
        <p className="report-paragraph">
          This section presents visual representations of the system architecture, component hierarchy, and data flow patterns.
        </p>
        <ArchitectureDiagram />
        <ComponentDiagram />
        <DataFlowDiagram />
      </ReportSection>

      {/* Section 7: Folder Structure */}
      <ReportSection number="7" title="Folder Structure" pageStart={18} pageEnd={18}>
        <FolderStructureSection />
      </ReportSection>

      {/* Section 8: Database Schema */}
      <ReportSection number="8" title="Database Schema" pageStart={19} pageEnd={23}>
        <DatabaseSection />
        <ERDiagram />
      </ReportSection>

      {/* Section 9: Development Steps */}
      <ReportSection number="9" title="Development Steps" pageStart={24} pageEnd={31}>
        <DevelopmentSection />
      </ReportSection>

      {/* Section 10: User Guide */}
      <ReportSection number="10" title="User Guide" pageStart={32} pageEnd={35}>
        <UserGuideSection />
      </ReportSection>

      {/* Section 11: System Workflow Diagrams */}
      <ReportSection number="11" title="System Workflow Diagrams" pageStart={36} pageEnd={37}>
        <p className="report-paragraph">
          The following diagrams illustrate the system workflow and interaction sequences.
        </p>
        <WorkflowDiagram />
        <SequenceDiagram />
      </ReportSection>

      {/* Section 12: Code Implementation */}
      <ReportSection number="12" title="Code Implementation" pageStart={38} pageEnd={44}>
        <CodeImplementationSection />
      </ReportSection>

      {/* Section 13: UI Screenshots & Mockups */}
      <ReportSection number="13" title="UI Screenshots & Mockups" pageStart={45} pageEnd={46}>
        <p className="report-paragraph">
          The following wireframe illustrates the user interface design and layout of the chess application.
        </p>
        <UIWireframe />
      </ReportSection>

      {/* Section 14: Future Enhancements */}
      <ReportSection number="14" title="Future Enhancements" pageStart={47} pageEnd={48}>
        <FutureEnhancementsSection />
      </ReportSection>

      {/* Section 15: Conclusion */}
      <ReportSection number="15" title="Conclusion" pageStart={49} pageEnd={49}>
        <ConclusionSection />
      </ReportSection>

      {/* Section 16: References */}
      <ReportSection number="16" title="References" pageStart={50} pageEnd={50}>
        <ReferencesSection />
      </ReportSection>
    </div>
  );
};

export default Index;
