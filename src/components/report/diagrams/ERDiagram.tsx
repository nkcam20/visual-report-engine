import React from 'react';
import { motion } from 'framer-motion';

const ERDiagram: React.FC = () => {
  return (
    <div className="report-diagram avoid-break">
      <h3 className="report-diagram-title">Figure 4: Entity-Relationship Diagram</h3>
      
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-2 gap-8">
          {/* Users Entity */}
          <motion.div 
            className="border-2 border-blue-400 rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-blue-500 text-white px-4 py-2 font-bold text-center">
              USERS
            </div>
            <div className="bg-white p-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-amber-500">🔑</span>
                  <span className="font-mono">id</span>
                  <span className="text-muted-foreground ml-auto">UUID (PK)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0">🔑</span>
                  <span className="font-mono">username</span>
                  <span className="text-muted-foreground ml-auto">VARCHAR(50)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0">🔑</span>
                  <span className="font-mono">email</span>
                  <span className="text-muted-foreground ml-auto">VARCHAR(255)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0">🔑</span>
                  <span className="font-mono">password_hash</span>
                  <span className="text-muted-foreground ml-auto">VARCHAR(255)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0">🔑</span>
                  <span className="font-mono">elo_rating</span>
                  <span className="text-muted-foreground ml-auto">INTEGER</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0">🔑</span>
                  <span className="font-mono">created_at</span>
                  <span className="text-muted-foreground ml-auto">TIMESTAMP</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Games Entity */}
          <motion.div 
            className="border-2 border-green-400 rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-green-500 text-white px-4 py-2 font-bold text-center">
              GAMES
            </div>
            <div className="bg-white p-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-amber-500">🔑</span>
                  <span className="font-mono">id</span>
                  <span className="text-muted-foreground ml-auto">UUID (PK)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">🔗</span>
                  <span className="font-mono">user_id</span>
                  <span className="text-muted-foreground ml-auto">UUID (FK)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0">🔑</span>
                  <span className="font-mono">name</span>
                  <span className="text-muted-foreground ml-auto">VARCHAR(100)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0">🔑</span>
                  <span className="font-mono">pgn</span>
                  <span className="text-muted-foreground ml-auto">TEXT</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0">🔑</span>
                  <span className="font-mono">fen</span>
                  <span className="text-muted-foreground ml-auto">VARCHAR(100)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0">🔑</span>
                  <span className="font-mono">difficulty</span>
                  <span className="text-muted-foreground ml-auto">ENUM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0">🔑</span>
                  <span className="font-mono">result</span>
                  <span className="text-muted-foreground ml-auto">VARCHAR(10)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Moves Entity */}
          <motion.div 
            className="border-2 border-purple-400 rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-purple-500 text-white px-4 py-2 font-bold text-center">
              MOVES
            </div>
            <div className="bg-white p-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-amber-500">🔑</span>
                  <span className="font-mono">id</span>
                  <span className="text-muted-foreground ml-auto">UUID (PK)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">🔗</span>
                  <span className="font-mono">game_id</span>
                  <span className="text-muted-foreground ml-auto">UUID (FK)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0">🔑</span>
                  <span className="font-mono">move_number</span>
                  <span className="text-muted-foreground ml-auto">INTEGER</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0">🔑</span>
                  <span className="font-mono">san</span>
                  <span className="text-muted-foreground ml-auto">VARCHAR(10)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0">🔑</span>
                  <span className="font-mono">from_sq / to_sq</span>
                  <span className="text-muted-foreground ml-auto">VARCHAR(2)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0">🔑</span>
                  <span className="font-mono">fen_after</span>
                  <span className="text-muted-foreground ml-auto">VARCHAR(100)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Settings Entity */}
          <motion.div 
            className="border-2 border-amber-400 rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-amber-500 text-white px-4 py-2 font-bold text-center">
              SETTINGS
            </div>
            <div className="bg-white p-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-amber-500">🔑</span>
                  <span className="font-mono">id</span>
                  <span className="text-muted-foreground ml-auto">UUID (PK)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">🔗</span>
                  <span className="font-mono">user_id</span>
                  <span className="text-muted-foreground ml-auto">UUID (FK)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0">🔑</span>
                  <span className="font-mono">difficulty</span>
                  <span className="text-muted-foreground ml-auto">VARCHAR(10)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0">🔑</span>
                  <span className="font-mono">board_theme</span>
                  <span className="text-muted-foreground ml-auto">VARCHAR(20)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0">🔑</span>
                  <span className="font-mono">sound_enabled</span>
                  <span className="text-muted-foreground ml-auto">BOOLEAN</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-0">🔑</span>
                  <span className="font-mono">auto_save</span>
                  <span className="text-muted-foreground ml-auto">BOOLEAN</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Relationship Lines Description */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-16 h-0.5 bg-blue-500"></div>
            <span>Users → Games (1:N)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-16 h-0.5 bg-green-500"></div>
            <span>Games → Moves (1:N)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-16 h-0.5 bg-amber-500"></div>
            <span>Users → Settings (1:1)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERDiagram;
