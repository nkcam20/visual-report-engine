import React from 'react';

const DatabaseSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        The current implementation uses browser localStorage for data persistence, providing a serverless approach that requires no backend infrastructure. Below is the conceptual database schema that would be used in a full-stack implementation with a relational database such as PostgreSQL.
      </p>

      <h3 className="report-subsection-title">8.1 Entity-Relationship Diagram</h3>
      <p className="report-paragraph">
        The database schema consists of four main entities: Users, Games, Moves, and Settings. The relationships are as follows:
      </p>

      <ul className="report-list">
        <li><strong>Users → Games:</strong> One-to-Many (a user can have multiple games)</li>
        <li><strong>Games → Moves:</strong> One-to-Many (a game contains multiple moves)</li>
        <li><strong>Users → Settings:</strong> One-to-One (each user has one settings record)</li>
      </ul>

      <div className="report-note">
        <p className="text-sm">
          Note: The Entity-Relationship Diagram is displayed in Figure 4 in the System Architecture Diagrams section.
        </p>
      </div>

      <h3 className="report-subsection-title">8.2 SQL Schema Definitions</h3>

      <p className="report-paragraph"><strong>Users Table:</strong></p>
      <div className="report-code-block">
{`CREATE TABLE users (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username       VARCHAR(50) UNIQUE NOT NULL,
    email          VARCHAR(255) UNIQUE NOT NULL,
    password_hash  VARCHAR(255) NOT NULL,
    elo_rating     INTEGER DEFAULT 1200,
    created_at     TIMESTAMP DEFAULT now()
);

-- Indexes for performance
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email ON users(email);`}
      </div>

      <p className="report-paragraph"><strong>Games Table:</strong></p>
      <div className="report-code-block">
{`CREATE TABLE games (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id        UUID REFERENCES users(id) ON DELETE CASCADE,
    name           VARCHAR(100),
    pgn            TEXT,                    -- Portable Game Notation
    fen            VARCHAR(100),            -- Current position (FEN)
    difficulty     VARCHAR(10) CHECK (difficulty IN ('easy', 'medium', 'hard')),
    result         VARCHAR(20),             -- 'in_progress', 'white_wins', 'black_wins', 'draw'
    move_count     INTEGER DEFAULT 0,
    created_at     TIMESTAMP DEFAULT now(),
    updated_at     TIMESTAMP DEFAULT now()
);

-- Indexes
CREATE INDEX idx_games_user_id ON games(user_id);
CREATE INDEX idx_games_created_at ON games(created_at DESC);`}
      </div>

      <p className="report-paragraph"><strong>Moves Table:</strong></p>
      <div className="report-code-block">
{`CREATE TABLE moves (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    game_id        UUID REFERENCES games(id) ON DELETE CASCADE,
    move_number    INTEGER NOT NULL,
    san            VARCHAR(10) NOT NULL,    -- Standard Algebraic Notation (e.g., "e4", "Nf3")
    from_sq        VARCHAR(2),              -- Source square (e.g., "e2")
    to_sq          VARCHAR(2),              -- Target square (e.g., "e4")
    piece          CHAR(1),                 -- Piece type: K, Q, R, B, N, P
    captured       CHAR(1),                 -- Captured piece (NULL if none)
    promotion      CHAR(1),                 -- Promotion piece (NULL if none)
    is_check       BOOLEAN DEFAULT false,
    is_checkmate   BOOLEAN DEFAULT false,
    fen_after      VARCHAR(100),            -- Board state after move
    timestamp      TIMESTAMP DEFAULT now()
);

-- Index for efficient game history queries
CREATE INDEX idx_moves_game_id ON moves(game_id, move_number);`}
      </div>

      <p className="report-paragraph"><strong>Settings Table:</strong></p>
      <div className="report-code-block">
{`CREATE TABLE settings (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id        UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    difficulty     VARCHAR(10) DEFAULT 'medium',
    board_theme    VARCHAR(20) DEFAULT 'classic',
    piece_style    VARCHAR(20) DEFAULT 'standard',
    sound_enabled  BOOLEAN DEFAULT true,
    auto_save      BOOLEAN DEFAULT true,
    show_hints     BOOLEAN DEFAULT true,
    updated_at     TIMESTAMP DEFAULT now()
);`}
      </div>

      <h3 className="report-subsection-title">8.3 Data Flow Diagrams</h3>
      <p className="report-paragraph">
        The data flows through the system in the following patterns:
      </p>

      <div className="report-info-box">
        <p className="text-sm font-semibold mb-2">Game Save Flow:</p>
        <p className="text-sm font-mono">
          User clicks Save → Serialize game state → Create JSON object → Store in localStorage → Confirm save
        </p>
      </div>

      <div className="report-info-box mt-4">
        <p className="text-sm font-semibold mb-2">Game Load Flow:</p>
        <p className="text-sm font-mono">
          User selects game → Read from localStorage → Parse JSON → Restore FEN position → Reconstruct game state → Render board
        </p>
      </div>

      <p className="report-paragraph"><strong>localStorage Schema (Current Implementation):</strong></p>
      <div className="report-code-block">
{`// Storage key pattern
const STORAGE_KEY = 'chess-game-saves';

// Saved game structure
interface SavedGame {
    id: string;           // UUID
    name: string;         // User-provided name
    fen: string;          // Board position
    pgn: string;          // Move history
    difficulty: 'easy' | 'medium' | 'hard';
    moveCount: number;
    createdAt: string;    // ISO timestamp
    updatedAt: string;    // ISO timestamp
}

// Storage structure
{
    "chess-game-saves": [
        { id: "...", name: "Italian Game Practice", fen: "...", ... },
        { id: "...", name: "Sicilian Defense Study", fen: "...", ... }
    ]
}`}
      </div>
    </>
  );
};

export default DatabaseSection;
