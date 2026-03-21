import React from 'react';
import { motion } from 'framer-motion';

const SequenceDiagram: React.FC = () => {
  const actors = [
    { name: 'User', color: 'bg-blue-500' },
    { name: 'ChessBoard', color: 'bg-purple-500' },
    { name: 'useChessGame', color: 'bg-green-500' },
    { name: 'chess.js', color: 'bg-amber-500' },
    { name: 'useStockfish', color: 'bg-pink-500' },
    { name: 'Stockfish', color: 'bg-red-500' },
  ];

  return (
    <div className="report-diagram avoid-break">
      <h3 className="report-diagram-title">Figure 6: Move Execution Sequence Diagram</h3>
      
      <div className="w-full overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Actors */}
          <div className="flex justify-between mb-4 px-4">
            {actors.map((actor, index) => (
              <motion.div 
                key={actor.name}
                className={`${actor.color} text-white px-3 py-2 rounded-lg text-xs font-medium text-center min-w-[90px]`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {actor.name}
              </motion.div>
            ))}
          </div>

          {/* Lifelines */}
          <div className="relative px-4" style={{ height: '480px' }}>
            {/* Vertical lines */}
            {actors.map((actor, index) => (
              <div 
                key={index}
                className="absolute top-0 bottom-0 w-0.5 bg-gray-300"
                style={{ left: `calc(${(index * 100) / (actors.length - 1)}% - 1px + ${index === 0 ? 45 : index === actors.length - 1 ? -45 : 0}px)` }}
              />
            ))}

            {/* Messages */}
            <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
              {/* Message 1: User clicks square */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <line x1="50" y1="30" x2="150" y2="30" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />
                <text x="80" y="22" fontSize="10" fill="#1e40af">1. onClick(square)</text>
              </motion.g>

              {/* Message 2: ChessBoard calls hook */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <line x1="160" y1="60" x2="290" y2="60" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrow)" />
                <text x="190" y="52" fontSize="10" fill="#6d28d9">2. handleSquareClick()</text>
              </motion.g>

              {/* Message 3: Hook calls chess.js */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                <line x1="300" y1="90" x2="430" y2="90" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrow)" />
                <text x="330" y="82" fontSize="10" fill="#15803d">3. move(from, to)</text>
              </motion.g>

              {/* Message 4: Validate move */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                <line x1="430" y1="120" x2="300" y2="120" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arrow)" />
                <text x="330" y="112" fontSize="10" fill="#b45309">4. return Move | null</text>
              </motion.g>

              {/* Message 5: Update UI */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                <line x1="290" y1="150" x2="160" y2="150" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arrow)" />
                <text x="190" y="142" fontSize="10" fill="#15803d">5. setState(newBoard)</text>
              </motion.g>

              {/* Message 6: Trigger AI */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
                <line x1="300" y1="190" x2="570" y2="190" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrow)" />
                <text x="400" y="182" fontSize="10" fill="#15803d">6. getBestMove(fen)</text>
              </motion.g>

              {/* Message 7: Send to Stockfish */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
                <line x1="580" y1="220" x2="710" y2="220" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrow)" />
                <text x="610" y="212" fontSize="10" fill="#be185d">7. postMessage(uci)</text>
              </motion.g>

              {/* Stockfish processing box */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                <rect x="700" y="240" width="30" height="60" fill="#fecaca" stroke="#ef4444" strokeWidth="2" />
                <text x="715" y="275" fontSize="8" fill="#dc2626" textAnchor="middle">calc</text>
              </motion.g>

              {/* Message 8: Return best move */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
                <line x1="700" y1="320" x2="580" y2="320" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arrow)" />
                <text x="610" y="312" fontSize="10" fill="#dc2626">8. bestmove e2e4</text>
              </motion.g>

              {/* Message 9: Execute AI move */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
                <line x1="570" y1="350" x2="300" y2="350" stroke="#ec4899" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arrow)" />
                <text x="400" y="342" fontSize="10" fill="#be185d">9. executeMove()</text>
              </motion.g>

              {/* Message 10: Final UI update */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                <line x1="290" y1="380" x2="160" y2="380" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arrow)" />
                <text x="190" y="372" fontSize="10" fill="#15803d">10. re-render</text>
              </motion.g>

              {/* Message 11: Display to user */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
                <line x1="150" y1="410" x2="50" y2="410" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arrow)" />
                <text x="80" y="402" fontSize="10" fill="#6d28d9">11. Updated board</text>
              </motion.g>

              {/* Arrow marker definition */}
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SequenceDiagram;
