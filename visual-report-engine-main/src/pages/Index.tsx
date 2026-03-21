import React from 'react';
import CoverPage from '@/components/report/CoverPage';
import TableOfContents from '@/components/report/TableOfContents';
import ReportSection from '@/components/report/ReportSection';
import AcknowledgementsSection from '@/components/report/sections/AcknowledgementsSection';
import AbstractSection from '@/components/report/sections/AbstractSection';
import ObjectiveSection from '@/components/report/sections/ObjectiveSection';
import IntroductionSection from '@/components/report/sections/IntroductionSection';
import LiteratureReviewSection from '@/components/report/sections/LiteratureReviewSection';
import MethodologySection from '@/components/report/sections/MethodologySection';
import FeasibilityStudySection from '@/components/report/sections/FeasibilityStudySection';
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
import TestingSection from '@/components/report/sections/TestingSection';
import ResultsAnalysisSection from '@/components/report/sections/ResultsAnalysisSection';
import PerformanceAnalysisSection from '@/components/report/sections/PerformanceAnalysisSection';
import CodeImplementationSection from '@/components/report/sections/CodeImplementationSection';
import ComparativeStudySection from '@/components/report/sections/ComparativeStudySection';
import SecurityConsiderationsSection from '@/components/report/sections/SecurityConsiderationsSection';
import ProjectManagementSection from '@/components/report/sections/ProjectManagementSection';
import FutureEnhancementsSection from '@/components/report/sections/FutureEnhancementsSection';
import ConclusionSection from '@/components/report/sections/ConclusionSection';
import ReferencesSection from '@/components/report/sections/ReferencesSection';
import AppendicesSection from '@/components/report/sections/AppendicesSection';
import { Button } from '@/components/ui/button';
import { Printer, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <Link to="/game">
          <Button variant="secondary" className="shadow-lg">
            <Gamepad2 className="w-4 h-4 mr-2" />
            Play Game
          </Button>
        </Link>
        <Button onClick={handlePrint} className="shadow-lg">
          <Printer className="w-4 h-4 mr-2" />
          Print / Save as PDF
        </Button>
      </div>

      <CoverPage />
      <TableOfContents />

      <ReportSection number="1" title="Acknowledgements" pageStart={3} pageEnd={3}>
        <AcknowledgementsSection />
      </ReportSection>

      <ReportSection number="2" title="Abstract" pageStart={4} pageEnd={5}>
        <AbstractSection />
      </ReportSection>

      <ReportSection number="3" title="Objective" pageStart={5} pageEnd={6}>
        <ObjectiveSection />
      </ReportSection>

      <ReportSection number="4" title="Introduction" pageStart={7} pageEnd={11}>
        <IntroductionSection />
      </ReportSection>

      <ReportSection number="5" title="Literature Review" pageStart={12} pageEnd={21}>
        <LiteratureReviewSection />
      </ReportSection>

      <ReportSection number="6" title="Methodology" pageStart={22} pageEnd={27}>
        <MethodologySection />
      </ReportSection>

      <ReportSection number="7" title="Feasibility Study" pageStart={28} pageEnd={33}>
        <FeasibilityStudySection />
      </ReportSection>

      <ReportSection number="8" title="System Requirements" pageStart={34} pageEnd={36}>
        <RequirementsSection />
      </ReportSection>

      <ReportSection number="9" title="Technology Stack" pageStart={37} pageEnd={40}>
        <TechStackSection />
      </ReportSection>

      <ReportSection number="10" title="System Architecture Diagrams" pageStart={41} pageEnd={43}>
        <p className="report-paragraph">
          This section presents visual representations of the system architecture, component hierarchy, and data flow patterns that illustrate the overall design of the AI-Powered Chess Game application.
        </p>
        <ArchitectureDiagram />
        <ComponentDiagram />
        <DataFlowDiagram />
      </ReportSection>

      <ReportSection number="11" title="Folder Structure" pageStart={44} pageEnd={45}>
        <FolderStructureSection />
      </ReportSection>

      <ReportSection number="12" title="Database Schema" pageStart={46} pageEnd={50}>
        <DatabaseSection />
        <ERDiagram />
      </ReportSection>

      <ReportSection number="13" title="Development Steps" pageStart={51} pageEnd={58}>
        <DevelopmentSection />
      </ReportSection>

      <ReportSection number="14" title="User Guide" pageStart={59} pageEnd={63}>
        <UserGuideSection />
      </ReportSection>

      <ReportSection number="15" title="System Workflow Diagrams" pageStart={64} pageEnd={65}>
        <p className="report-paragraph">
          The following diagrams illustrate the system workflow and interaction sequences during gameplay.
        </p>
        <WorkflowDiagram />
        <SequenceDiagram />
      </ReportSection>

      <ReportSection number="16" title="Testing & Quality Assurance" pageStart={66} pageEnd={73}>
        <TestingSection />
      </ReportSection>

      <ReportSection number="17" title="Results & Analysis" pageStart={74} pageEnd={79}>
        <ResultsAnalysisSection />
      </ReportSection>

      <ReportSection number="18" title="Performance Analysis" pageStart={80} pageEnd={84}>
        <PerformanceAnalysisSection />
      </ReportSection>

      <ReportSection number="19" title="Code Implementation" pageStart={85} pageEnd={90}>
        <CodeImplementationSection />
      </ReportSection>

      <ReportSection number="20" title="UI Screenshots & Mockups" pageStart={91} pageEnd={91}>
        <p className="report-paragraph">
          The following wireframe illustrates the user interface design and layout of the chess application.
        </p>
        <UIWireframe />
      </ReportSection>

      <ReportSection number="21" title="Comparative Study" pageStart={92} pageEnd={95}>
        <ComparativeStudySection />
      </ReportSection>

      <ReportSection number="22" title="Security Considerations" pageStart={96} pageEnd={97}>
        <SecurityConsiderationsSection />
      </ReportSection>

      <ReportSection number="23" title="Project Management" pageStart={97} pageEnd={98}>
        <ProjectManagementSection />
      </ReportSection>

      <ReportSection number="24" title="Future Enhancements" pageStart={98} pageEnd={99}>
        <FutureEnhancementsSection />
      </ReportSection>

      <ReportSection number="25" title="Conclusion" pageStart={99} pageEnd={99}>
        <ConclusionSection />
      </ReportSection>

      <ReportSection number="26" title="References" pageStart={100} pageEnd={100}>
        <ReferencesSection />
      </ReportSection>

      <ReportSection number="27" title="Appendices" pageStart={101} pageEnd={106}>
        <AppendicesSection />
      </ReportSection>
    </div>
  );
};

export default Index;
