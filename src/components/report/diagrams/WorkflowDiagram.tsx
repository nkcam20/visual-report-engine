import React from 'react';
import { motion } from 'framer-motion';

const WorkflowDiagram: React.FC = () => {
  const steps = [
    { icon: '👆', label: 'Click Piece', color: 'bg-blue-100 border-blue-400' },
    { icon: '✓', label: 'Validate', color: 'bg-green-100 border-green-400' },
    { icon: '🎯', label: 'Show Moves', color: 'bg-amber-100 border-amber-400' },
    { icon: '👆', label: 'Click Target', color: 'bg-blue-100 border-blue-400' },
    { icon: '♟', label: 'Execute Move', color: 'bg-purple-100 border-purple-400' },
    { icon: '🔄', label: 'Update Board', color: 'bg-teal-100 border-teal-400' },
    { icon: '📤', label: 'Send FEN', color: 'bg-indigo-100 border-indigo-400' },
    { icon: '🤖', label: 'AI Calculates', color: 'bg-pink-100 border-pink-400' },
    { icon: '♟', label: 'Bot Moves', color: 'bg-purple-100 border-purple-400' },
    { icon: '❓', label: 'Game Over?', color: 'bg-red-100 border-red-400', isDecision: true },
  ];

  return (
    <div className="report-diagram avoid-break">
      <h3 className="report-diagram-title">Figure 5: Game Play Workflow Diagram</h3>
      
      <div className="w-full max-w-4xl">
        {/* Start */}
        <motion.div 
          className="flex justify-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-20 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
            START
          </div>
        </motion.div>
        
        <div className="flowchart-connector"></div>

        {/* Flow Steps */}
        <div className="grid grid-cols-5 gap-x-2 gap-y-4">
          {steps.slice(0, 5).map((step, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 ${step.color} border-2 rounded-lg flex flex-col items-center justify-center`}>
                <span className="text-xl">{step.icon}</span>
              </div>
              <span className="text-xs font-medium mt-1 text-center">{step.label}</span>
              {index < 4 && (
                <span className="absolute right-0 top-1/2 text-primary font-bold translate-x-4">→</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Connector */}
        <div className="flex justify-end pr-8 my-2">
          <div className="text-primary text-2xl">↓</div>
        </div>

        <div className="grid grid-cols-5 gap-x-2 gap-y-4">
          {steps.slice(5, 10).map((step, index) => (
            <motion.div 
              key={index + 5}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 5) * 0.1 }}
            >
              <div className={`${step.isDecision ? 'rotate-45 w-14 h-14' : 'w-16 h-16'} ${step.color} border-2 ${step.isDecision ? '' : 'rounded-lg'} flex flex-col items-center justify-center`}>
                <span className={`text-xl ${step.isDecision ? '-rotate-45' : ''}`}>{step.icon}</span>
              </div>
              <span className={`text-xs font-medium mt-${step.isDecision ? '3' : '1'} text-center`}>{step.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Decision Branches */}
        <div className="flex justify-center mt-6 gap-16">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-green-600 font-bold mb-2">YES</span>
            <div className="w-24 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm">
              END
            </div>
            <span className="text-xs text-muted-foreground mt-2">Display Result</span>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <span className="text-blue-600 font-bold mb-2">NO</span>
            <div className="flex items-center gap-2">
              <span className="text-primary text-2xl">↺</span>
              <span className="text-sm">Loop to Step 1</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowDiagram;
