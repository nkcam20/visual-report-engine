import React from 'react';
import { motion } from 'framer-motion';

const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="report-diagram avoid-break">
      <h3 className="report-diagram-title">Figure 1: System Architecture Overview</h3>
      
      <div className="w-full max-w-3xl">
        {/* User Layer */}
        <motion.div 
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="px-8 py-4 rounded-xl border-2 border-primary bg-primary/10 text-center">
            <div className="text-3xl mb-2">👤</div>
            <div className="font-semibold">User (Web Browser)</div>
            <div className="text-sm text-muted-foreground">Chrome / Firefox / Safari / Edge</div>
          </div>
        </motion.div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="text-primary text-3xl">↕</div>
        </div>

        {/* Presentation Layer */}
        <motion.div 
          className="bg-blue-50 rounded-xl p-4 mb-4 border-2 border-blue-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center text-sm font-bold text-blue-800 mb-3">PRESENTATION LAYER</div>
          <div className="grid grid-cols-3 gap-3">
            <div className="flowchart-box-secondary text-xs">ChessBoard Component</div>
            <div className="flowchart-box-secondary text-xs">GameSidebar Component</div>
            <div className="flowchart-box-secondary text-xs">PromotionDialog</div>
          </div>
          <div className="mt-3 text-center">
            <span className="text-xs bg-blue-100 px-2 py-1 rounded">React.js + TypeScript + Tailwind CSS</span>
          </div>
        </motion.div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="text-primary text-3xl">↕</div>
        </div>

        {/* Business Logic Layer */}
        <motion.div 
          className="bg-green-50 rounded-xl p-4 mb-4 border-2 border-green-200"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center text-sm font-bold text-green-800 mb-3">BUSINESS LOGIC LAYER</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-green-100 rounded-lg p-3 border border-green-300">
              <div className="font-semibold text-sm text-green-900">useChessGame Hook</div>
              <ul className="text-xs text-green-700 mt-1 list-disc list-inside">
                <li>Game State Management</li>
                <li>Move Validation</li>
                <li>History Tracking</li>
              </ul>
            </div>
            <div className="bg-green-100 rounded-lg p-3 border border-green-300">
              <div className="font-semibold text-sm text-green-900">useStockfish Hook</div>
              <ul className="text-xs text-green-700 mt-1 list-disc list-inside">
                <li>AI Engine Communication</li>
                <li>Difficulty Settings</li>
                <li>Best Move Calculation</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Arrows */}
        <div className="flex justify-around">
          <div className="text-primary text-3xl">↕</div>
          <div className="text-primary text-3xl">↕</div>
        </div>

        {/* External Services Layer */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-200">
            <div className="text-center text-sm font-bold text-amber-800 mb-3">CHESS LOGIC</div>
            <div className="bg-amber-100 rounded-lg p-3 border border-amber-300 text-center">
              <div className="text-2xl mb-1">♔</div>
              <div className="font-semibold text-sm">chess.js Library</div>
              <div className="text-xs text-amber-700 mt-1">Move Validation, PGN, FEN</div>
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
            <div className="text-center text-sm font-bold text-purple-800 mb-3">AI ENGINE</div>
            <div className="bg-purple-100 rounded-lg p-3 border border-purple-300 text-center">
              <div className="text-2xl mb-1">🤖</div>
              <div className="font-semibold text-sm">Stockfish.js (WASM)</div>
              <div className="text-xs text-purple-700 mt-1">Web Worker + UCI Protocol</div>
            </div>
          </div>
        </motion.div>

        {/* Arrow */}
        <div className="flex justify-center mt-4">
          <div className="text-primary text-3xl">↕</div>
        </div>

        {/* Data Layer */}
        <motion.div 
          className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center text-sm font-bold text-gray-800 mb-3">DATA PERSISTENCE LAYER</div>
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-lg p-3 border border-gray-300 text-center">
              <div className="text-2xl mb-1">💾</div>
              <div className="font-semibold text-sm">Browser localStorage</div>
              <div className="text-xs text-gray-600 mt-1">Game Save/Load, User Preferences</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
