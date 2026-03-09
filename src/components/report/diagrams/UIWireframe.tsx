import React from 'react';
import { motion } from 'framer-motion';

const UIWireframe: React.FC = () => {
  const boardPieces = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
  ];

  return (
    <div className="report-diagram avoid-break">
      <h3 className="report-diagram-title">Figure 7: User Interface Wireframe</h3>
      
      <div className="w-full max-w-4xl">
        <motion.div 
          className="border-2 border-gray-300 rounded-xl overflow-hidden shadow-lg bg-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {/* Header Bar */}
          <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">♔</span>
              <span className="font-bold">AI Chess Game</span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="flex">
            {/* Main Board Area */}
            <div className="flex-1 p-4 bg-gray-50">
              {/* Chess Board */}
              <div className="inline-block border-2 border-gray-700 rounded">
                {boardPieces.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex">
                    {row.map((piece, colIndex) => (
                      <div 
                        key={colIndex}
                        className={`w-8 h-8 flex items-center justify-center text-lg ${
                          (rowIndex + colIndex) % 2 === 0 ? 'bg-amber-100' : 'bg-amber-700'
                        }`}
                      >
                        {piece}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Board Labels */}
              <div className="flex gap-0 mt-1 ml-1">
                {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(file => (
                  <div key={file} className="w-8 text-center text-xs text-gray-500">{file}</div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-56 bg-gray-100 border-l border-gray-200 p-4">
              {/* Status */}
              <div className="mb-4">
                <div className="text-xs font-bold text-gray-500 uppercase mb-2">Game Status</div>
                <div className="bg-green-100 text-green-800 px-3 py-2 rounded text-sm font-medium">
                  Your Turn (White)
                </div>
              </div>

              {/* Difficulty */}
              <div className="mb-4">
                <div className="text-xs font-bold text-gray-500 uppercase mb-2">Difficulty</div>
                <div className="flex gap-1">
                  <button className="px-2 py-1 text-xs rounded bg-gray-200">Easy</button>
                  <button className="px-2 py-1 text-xs rounded bg-primary text-white">Medium</button>
                  <button className="px-2 py-1 text-xs rounded bg-gray-200">Hard</button>
                </div>
              </div>

              {/* Captured Pieces */}
              <div className="mb-4">
                <div className="text-xs font-bold text-gray-500 uppercase mb-2">Captured</div>
                <div className="flex flex-wrap gap-1 text-sm">
                  <span>♟</span><span>♟</span><span>♞</span>
                </div>
              </div>

              {/* Move History */}
              <div className="mb-4">
                <div className="text-xs font-bold text-gray-500 uppercase mb-2">Moves</div>
                <div className="bg-white rounded border border-gray-200 p-2 h-24 overflow-y-auto text-xs font-mono">
                  <div>1. e4 e5</div>
                  <div>2. Nf3 Nc6</div>
                  <div>3. Bc4 ...</div>
                </div>
              </div>

              {/* Controls */}
              <div className="space-y-2">
                <button className="w-full px-3 py-2 text-xs rounded bg-primary text-white">New Game</button>
                <button className="w-full px-3 py-2 text-xs rounded bg-gray-200">Undo Move</button>
                <div className="flex gap-2">
                  <button className="flex-1 px-2 py-2 text-xs rounded bg-gray-200">Save</button>
                  <button className="flex-1 px-2 py-2 text-xs rounded bg-gray-200">Load</button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Annotations */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-start gap-2">
            <div className="w-4 h-4 rounded bg-blue-500 flex-shrink-0 mt-0.5"></div>
            <span>Interactive chessboard with click-to-move interface</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-4 h-4 rounded bg-green-500 flex-shrink-0 mt-0.5"></div>
            <span>Real-time game status and turn indicator</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-4 h-4 rounded bg-purple-500 flex-shrink-0 mt-0.5"></div>
            <span>Difficulty selection with AI skill adjustment</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-4 h-4 rounded bg-amber-500 flex-shrink-0 mt-0.5"></div>
            <span>Move history in algebraic notation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIWireframe;
