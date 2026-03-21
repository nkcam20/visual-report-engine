import React from 'react';
import { motion } from 'framer-motion';

const DataFlowDiagram: React.FC = () => {
  return (
    <div className="report-diagram avoid-break">
      <h3 className="report-diagram-title">Figure 3: Game Play Data Flow Diagram</h3>
      
      <div className="w-full max-w-4xl">
        {/* Level 0 - Context Diagram */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-center mb-4" style={{ color: 'hsl(var(--primary))' }}>
            Level 0: Context Diagram
          </h4>
          <div className="flex items-center justify-center gap-8">
            <motion.div 
              className="w-24 h-24 rounded-lg bg-blue-100 border-2 border-blue-300 flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-2xl">👤</span>
              <span className="text-xs font-medium mt-1">Player</span>
            </motion.div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="text-sm">Move Input</span>
                <span className="text-primary text-xl">→</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary text-xl">←</span>
                <span className="text-sm">Game State</span>
              </div>
            </div>
            
            <motion.div 
              className="w-32 h-32 rounded-full bg-primary/20 border-4 border-primary flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-2xl">♟️</span>
              <span className="text-sm font-bold mt-1">Chess</span>
              <span className="text-sm font-bold">System</span>
            </motion.div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="text-sm">Position</span>
                <span className="text-primary text-xl">→</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary text-xl">←</span>
                <span className="text-sm">Best Move</span>
              </div>
            </div>
            
            <motion.div 
              className="w-24 h-24 rounded-lg bg-purple-100 border-2 border-purple-300 flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-2xl">🤖</span>
              <span className="text-xs font-medium mt-1">Stockfish AI</span>
            </motion.div>
          </div>
        </div>

        {/* Level 1 - Expanded Diagram */}
        <div className="border-t-2 border-dashed border-muted pt-8">
          <h4 className="text-sm font-bold text-center mb-4" style={{ color: 'hsl(var(--primary))' }}>
            Level 1: Expanded Process Flow
          </h4>
          
          <div className="grid grid-cols-5 gap-4 items-start">
            {/* Player Input */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-16 h-16 mx-auto rounded-lg bg-blue-100 border-2 border-blue-300 flex items-center justify-center">
                <span className="text-xl">👆</span>
              </div>
              <span className="text-xs font-medium block mt-2">1. Click Square</span>
            </motion.div>

            {/* Process 1 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-green-100 border-2 border-green-400 flex flex-col items-center justify-center">
                <span className="text-lg">✓</span>
                <span className="text-xs font-medium">Validate</span>
              </div>
              <span className="text-xs block mt-2">2. Check Move</span>
            </motion.div>

            {/* Process 2 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 border-2 border-amber-400 flex flex-col items-center justify-center">
                <span className="text-lg">🔄</span>
                <span className="text-xs font-medium">Update</span>
              </div>
              <span className="text-xs block mt-2">3. Apply Move</span>
            </motion.div>

            {/* Process 3 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 border-2 border-purple-400 flex flex-col items-center justify-center">
                <span className="text-lg">🧠</span>
                <span className="text-xs font-medium">AI Think</span>
              </div>
              <span className="text-xs block mt-2">4. Get AI Move</span>
            </motion.div>

            {/* Output */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-16 h-16 mx-auto rounded-lg bg-teal-100 border-2 border-teal-300 flex items-center justify-center">
                <span className="text-xl">♔</span>
              </div>
              <span className="text-xs font-medium block mt-2">5. Render Board</span>
            </motion.div>
          </div>

          {/* Data Stores */}
          <div className="flex justify-center gap-8 mt-8">
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-32 h-8 border-t-2 border-b-2 border-gray-400 flex items-center justify-center bg-gray-50">
                <span className="text-xs font-medium">D1: Game State</span>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="w-32 h-8 border-t-2 border-b-2 border-gray-400 flex items-center justify-center bg-gray-50">
                <span className="text-xs font-medium">D2: Move History</span>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="w-32 h-8 border-t-2 border-b-2 border-gray-400 flex items-center justify-center bg-gray-50">
                <span className="text-xs font-medium">D3: localStorage</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataFlowDiagram;
