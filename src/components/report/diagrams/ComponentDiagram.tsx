import React from 'react';
import { motion } from 'framer-motion';

const ComponentDiagram: React.FC = () => {
  return (
    <div className="report-diagram avoid-break">
      <h3 className="report-diagram-title">Figure 2: React Component Hierarchy</h3>
      
      <div className="w-full max-w-3xl">
        {/* App Root */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold">
            App.tsx
          </div>
        </motion.div>
        
        <div className="flowchart-connector"></div>

        {/* Router Level */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="px-6 py-3 rounded-lg bg-blue-100 border-2 border-blue-400 font-medium">
            BrowserRouter + Routes
          </div>
        </motion.div>

        <div className="flowchart-connector"></div>

        {/* Pages Level */}
        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="px-4 py-2 rounded-lg bg-green-100 border-2 border-green-400 text-sm font-medium">
            Index.tsx
          </div>
          <div className="px-4 py-2 rounded-lg bg-gray-100 border-2 border-gray-300 text-sm">
            NotFound.tsx
          </div>
        </motion.div>

        <div className="flowchart-connector"></div>

        {/* Main Components */}
        <motion.div 
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col items-center">
            <div className="px-4 py-3 rounded-lg bg-purple-100 border-2 border-purple-400 font-medium">
              ChessBoard.tsx
            </div>
            <div className="w-0.5 h-4 bg-purple-400"></div>
            <div className="flex gap-2">
              <div className="px-2 py-1 rounded bg-purple-50 border border-purple-300 text-xs">Square</div>
              <div className="px-2 py-1 rounded bg-purple-50 border border-purple-300 text-xs">Piece</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="px-4 py-3 rounded-lg bg-amber-100 border-2 border-amber-400 font-medium">
              GameSidebar.tsx
            </div>
            <div className="w-0.5 h-4 bg-amber-400"></div>
            <div className="grid grid-cols-2 gap-1">
              <div className="px-2 py-1 rounded bg-amber-50 border border-amber-300 text-xs">Controls</div>
              <div className="px-2 py-1 rounded bg-amber-50 border border-amber-300 text-xs">History</div>
              <div className="px-2 py-1 rounded bg-amber-50 border border-amber-300 text-xs">Captured</div>
              <div className="px-2 py-1 rounded bg-amber-50 border border-amber-300 text-xs">Status</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="px-4 py-3 rounded-lg bg-teal-100 border-2 border-teal-400 font-medium">
              PromotionDialog.tsx
            </div>
            <div className="w-0.5 h-4 bg-teal-400"></div>
            <div className="px-2 py-1 rounded bg-teal-50 border border-teal-300 text-xs">Piece Select</div>
          </div>
        </motion.div>

        {/* Hooks Layer */}
        <div className="mt-8 pt-6 border-t-2 border-dashed border-muted">
          <h4 className="text-center text-sm font-bold text-muted-foreground mb-4">CUSTOM HOOKS</h4>
          <motion.div 
            className="flex justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="px-4 py-3 rounded-lg bg-indigo-100 border-2 border-indigo-400">
              <div className="font-medium text-indigo-800">useChessGame</div>
              <div className="text-xs text-indigo-600 mt-1">Game State + Moves</div>
            </div>
            <div className="px-4 py-3 rounded-lg bg-pink-100 border-2 border-pink-400">
              <div className="font-medium text-pink-800">useStockfish</div>
              <div className="text-xs text-pink-600 mt-1">AI Engine Control</div>
            </div>
          </motion.div>
        </div>

        {/* Libraries Layer */}
        <div className="mt-6 pt-4 border-t border-muted">
          <h4 className="text-center text-sm font-bold text-muted-foreground mb-4">EXTERNAL LIBRARIES</h4>
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="px-3 py-2 rounded bg-gray-800 text-white text-sm">chess.js</div>
            <div className="px-3 py-2 rounded bg-gray-800 text-white text-sm">stockfish.js</div>
            <div className="px-3 py-2 rounded bg-gray-800 text-white text-sm">localStorage</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComponentDiagram;
