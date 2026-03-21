import React from 'react';

const DatabaseSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        The current implementation uses browser localStorage for data persistence, providing a serverless approach that requires no backend infrastructure. Below is the comprehensive database design that documents both the current client-side storage schema and the conceptual relational database schema that would be used in a full-stack implementation with PostgreSQL. This dual-schema approach ensures the application is designed for scalability while maintaining simplicity in its current deployment.
      </p>

      <h3 className="report-subsection-title">12.1 Entity-Relationship Diagram</h3>
      <p className="report-paragraph">
        The database schema consists of four main entities: Users, Games, Moves, and Settings. The relationships between these entities follow standard relational database design principles with referential integrity constraints. The entity-relationship model was designed using Chen notation and follows Third Normal Form (3NF) to minimize data redundancy and prevent update anomalies.
      </p>

      <ul className="report-list">
        <li><strong>Users → Games:</strong> One-to-Many (a user can have multiple games). Each game must belong to exactly one user. Cascade delete ensures orphaned games are removed when a user account is deleted.</li>
        <li><strong>Games → Moves:</strong> One-to-Many (a game contains multiple moves). Moves are ordered by move_number within each game. Cascade delete removes all moves when a game is deleted.</li>
        <li><strong>Users → Settings:</strong> One-to-One (each user has one settings record). Default settings are created automatically upon user registration through a database trigger.</li>
      </ul>

      <div className="report-note">
        <p className="text-sm font-semibold mb-1">Normalization Analysis:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li><strong>1NF:</strong> All tables have atomic values in each cell, no repeating groups</li>
          <li><strong>2NF:</strong> All non-key attributes are fully dependent on the entire primary key</li>
          <li><strong>3NF:</strong> No transitive dependencies exist — all non-key attributes depend only on the primary key</li>
          <li><strong>BCNF:</strong> Every determinant is a candidate key — achieved for all tables</li>
        </ul>
      </div>

      <h3 className="report-subsection-title">12.2 SQL Schema Definitions</h3>

      <p className="report-paragraph"><strong>Users Table:</strong></p>
      <p className="report-paragraph">
        The users table stores authentication credentials and profile information. Passwords are stored as bcrypt hashes with a cost factor of 12. The elo_rating field tracks the user's estimated playing strength based on game outcomes against the AI.
      </p>
      <div className="report-code-block">
{`CREATE TABLE users (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username       VARCHAR(50) UNIQUE NOT NULL,
    email          VARCHAR(255) UNIQUE NOT NULL,
    password_hash  VARCHAR(255) NOT NULL,
    display_name   VARCHAR(100),
    elo_rating     INTEGER DEFAULT 1200,
    games_played   INTEGER DEFAULT 0,
    games_won      INTEGER DEFAULT 0,
    games_lost     INTEGER DEFAULT 0,
    games_drawn    INTEGER DEFAULT 0,
    total_moves    INTEGER DEFAULT 0,
    avg_move_time  NUMERIC(6,2) DEFAULT 0.00,
    preferred_diff VARCHAR(10) DEFAULT 'medium',
    is_active      BOOLEAN DEFAULT true,
    last_login_at  TIMESTAMP,
    created_at     TIMESTAMP DEFAULT now(),
    updated_at     TIMESTAMP DEFAULT now(),
    
    CONSTRAINT chk_elo_range CHECK (elo_rating BETWEEN 100 AND 3500),
    CONSTRAINT chk_games_non_negative CHECK (
        games_played >= 0 AND games_won >= 0 AND 
        games_lost >= 0 AND games_drawn >= 0
    ),
    CONSTRAINT chk_games_sum CHECK (
        games_played = games_won + games_lost + games_drawn
    )
);

-- Indexes for performance
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_elo ON users(elo_rating DESC);
CREATE INDEX idx_users_active ON users(is_active) WHERE is_active = true;`}
      </div>

      <p className="report-paragraph"><strong>Games Table:</strong></p>
      <p className="report-paragraph">
        The games table records each chess game session with its current state, configuration, and outcome. The FEN and PGN fields allow complete reconstruction of the game at any point. The result field uses a CHECK constraint to ensure only valid game outcomes are stored.
      </p>
      <div className="report-code-block">
{`CREATE TABLE games (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id        UUID REFERENCES users(id) ON DELETE CASCADE,
    name           VARCHAR(100),
    pgn            TEXT,                    -- Portable Game Notation
    fen            VARCHAR(100),            -- Current position (FEN)
    initial_fen    VARCHAR(100) DEFAULT 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    difficulty     VARCHAR(10) CHECK (difficulty IN ('easy', 'medium', 'hard')),
    player_color   CHAR(1) DEFAULT 'w' CHECK (player_color IN ('w', 'b')),
    result         VARCHAR(20) CHECK (result IN (
        'in_progress', 'white_wins', 'black_wins', 
        'draw_stalemate', 'draw_repetition', 'draw_fifty_move',
        'draw_insufficient', 'draw_agreement', 'resigned'
    )),
    termination    VARCHAR(50),             -- How the game ended
    move_count     INTEGER DEFAULT 0,
    duration_secs  INTEGER DEFAULT 0,       -- Total game duration
    ai_avg_time_ms INTEGER DEFAULT 0,       -- Average AI thinking time
    opening_name   VARCHAR(100),            -- Detected opening name
    opening_eco    VARCHAR(5),              -- ECO classification code
    is_archived    BOOLEAN DEFAULT false,
    is_favorite    BOOLEAN DEFAULT false,
    notes          TEXT,                    -- User annotations
    created_at     TIMESTAMP DEFAULT now(),
    updated_at     TIMESTAMP DEFAULT now(),
    completed_at   TIMESTAMP,
    
    CONSTRAINT chk_move_count CHECK (move_count >= 0),
    CONSTRAINT chk_duration CHECK (duration_secs >= 0)
);

-- Indexes
CREATE INDEX idx_games_user_id ON games(user_id);
CREATE INDEX idx_games_created_at ON games(created_at DESC);
CREATE INDEX idx_games_result ON games(result);
CREATE INDEX idx_games_difficulty ON games(difficulty);
CREATE INDEX idx_games_active ON games(user_id, result) WHERE result = 'in_progress';
CREATE INDEX idx_games_favorites ON games(user_id, is_favorite) WHERE is_favorite = true;`}
      </div>

      <p className="report-paragraph"><strong>Moves Table:</strong></p>
      <p className="report-paragraph">
        The moves table provides a detailed record of every move in every game, enabling move-by-move replay, analysis, and statistical aggregation. Each move stores both the standard algebraic notation (SAN) and the source/destination squares for programmatic access. The eval_score field stores the AI's position evaluation at the time of the move for post-game analysis.
      </p>
      <div className="report-code-block">
{`CREATE TABLE moves (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    game_id        UUID REFERENCES games(id) ON DELETE CASCADE,
    move_number    INTEGER NOT NULL,
    ply            INTEGER NOT NULL,        -- Half-move number (1-indexed)
    color          CHAR(1) NOT NULL CHECK (color IN ('w', 'b')),
    san            VARCHAR(10) NOT NULL,    -- Standard Algebraic Notation
    uci            VARCHAR(5),              -- UCI notation (e.g., "e2e4")
    from_sq        VARCHAR(2) NOT NULL,     -- Source square
    to_sq          VARCHAR(2) NOT NULL,     -- Destination square
    piece          CHAR(1) NOT NULL,        -- Piece type: K, Q, R, B, N, P
    captured       CHAR(1),                 -- Captured piece (NULL if none)
    promotion      CHAR(1),                 -- Promotion piece (NULL if none)
    is_check       BOOLEAN DEFAULT false,
    is_checkmate   BOOLEAN DEFAULT false,
    is_castle      BOOLEAN DEFAULT false,
    castle_side    VARCHAR(10),             -- 'kingside' or 'queenside'
    is_en_passant  BOOLEAN DEFAULT false,
    is_capture     BOOLEAN DEFAULT false,
    fen_before     VARCHAR(100),            -- Board state before move
    fen_after      VARCHAR(100) NOT NULL,   -- Board state after move
    eval_score     NUMERIC(6,2),            -- Position evaluation (centipawns)
    think_time_ms  INTEGER,                 -- Time taken for this move
    nodes_searched BIGINT,                  -- AI nodes evaluated
    depth_reached  INTEGER,                 -- AI search depth
    timestamp      TIMESTAMP DEFAULT now(),
    
    CONSTRAINT chk_ply_positive CHECK (ply > 0),
    CONSTRAINT chk_valid_piece CHECK (piece IN ('K','Q','R','B','N','P'))
);

-- Indexes for efficient queries
CREATE INDEX idx_moves_game_id ON moves(game_id, ply);
CREATE INDEX idx_moves_game_move ON moves(game_id, move_number);
CREATE INDEX idx_moves_piece ON moves(piece);
CREATE INDEX idx_moves_captures ON moves(game_id) WHERE is_capture = true;`}
      </div>

      <p className="report-paragraph"><strong>Settings Table:</strong></p>
      <div className="report-code-block">
{`CREATE TABLE settings (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id        UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    difficulty     VARCHAR(10) DEFAULT 'medium',
    player_color   CHAR(1) DEFAULT 'w',
    board_theme    VARCHAR(20) DEFAULT 'classic',
    piece_style    VARCHAR(20) DEFAULT 'standard',
    sound_enabled  BOOLEAN DEFAULT true,
    auto_save      BOOLEAN DEFAULT true,
    show_hints     BOOLEAN DEFAULT true,
    show_last_move BOOLEAN DEFAULT true,
    show_coords    BOOLEAN DEFAULT true,
    auto_queen     BOOLEAN DEFAULT false,
    confirm_resign BOOLEAN DEFAULT true,
    animation_speed VARCHAR(10) DEFAULT 'normal',
    updated_at     TIMESTAMP DEFAULT now()
);`}
      </div>

      <p className="report-paragraph"><strong>Game Statistics View:</strong></p>
      <p className="report-paragraph">
        A materialized view provides pre-computed statistics for dashboard displays and performance tracking:
      </p>
      <div className="report-code-block">
{`CREATE VIEW user_statistics AS
SELECT 
    u.id AS user_id,
    u.username,
    u.elo_rating,
    u.games_played,
    u.games_won,
    u.games_lost,
    u.games_drawn,
    CASE WHEN u.games_played > 0 
         THEN ROUND(u.games_won::NUMERIC / u.games_played * 100, 1)
         ELSE 0 
    END AS win_percentage,
    COALESCE(AVG(g.move_count), 0) AS avg_moves_per_game,
    COALESCE(AVG(g.duration_secs), 0) AS avg_game_duration,
    MAX(g.created_at) AS last_game_date,
    COUNT(CASE WHEN g.difficulty = 'easy' THEN 1 END) AS easy_games,
    COUNT(CASE WHEN g.difficulty = 'medium' THEN 1 END) AS medium_games,
    COUNT(CASE WHEN g.difficulty = 'hard' THEN 1 END) AS hard_games
FROM users u
LEFT JOIN games g ON u.id = g.user_id
GROUP BY u.id, u.username, u.elo_rating, u.games_played, 
         u.games_won, u.games_lost, u.games_drawn;`}
      </div>

      <p className="report-paragraph"><strong>Database Triggers:</strong></p>
      <p className="report-paragraph">
        Triggers automate data maintenance tasks such as updating timestamps, incrementing game counters, and creating default settings for new users:
      </p>
      <div className="report-code-block">
{`-- Auto-update timestamp trigger
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_users_updated 
    BEFORE UPDATE ON users 
    FOR EACH ROW EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER trg_games_updated 
    BEFORE UPDATE ON games 
    FOR EACH ROW EXECUTE FUNCTION update_timestamp();

-- Auto-create settings for new users
CREATE OR REPLACE FUNCTION create_default_settings()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO settings (user_id) VALUES (NEW.id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_user_settings 
    AFTER INSERT ON users 
    FOR EACH ROW EXECUTE FUNCTION create_default_settings();

-- Update user stats when game completes
CREATE OR REPLACE FUNCTION update_user_stats()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.result != 'in_progress' AND 
       (OLD.result IS NULL OR OLD.result = 'in_progress') THEN
        UPDATE users SET
            games_played = games_played + 1,
            games_won = games_won + CASE 
                WHEN (NEW.player_color = 'w' AND NEW.result = 'white_wins') OR
                     (NEW.player_color = 'b' AND NEW.result = 'black_wins')
                THEN 1 ELSE 0 END,
            games_lost = games_lost + CASE 
                WHEN (NEW.player_color = 'w' AND NEW.result = 'black_wins') OR
                     (NEW.player_color = 'b' AND NEW.result = 'white_wins')
                THEN 1 ELSE 0 END,
            games_drawn = games_drawn + CASE 
                WHEN NEW.result LIKE 'draw_%' THEN 1 ELSE 0 END
        WHERE id = NEW.user_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_game_complete 
    AFTER UPDATE ON games 
    FOR EACH ROW EXECUTE FUNCTION update_user_stats();`}
      </div>

      <h3 className="report-subsection-title">12.3 Data Flow Diagrams</h3>
      <p className="report-paragraph">
        The data flows through the system in several well-defined patterns. Each flow has been designed to minimize latency and ensure data consistency. The following diagrams document the primary data flows for game operations:
      </p>

      <div className="report-info-box">
        <p className="text-sm font-semibold mb-2">Game Save Flow (Level 1 DFD):</p>
        <p className="text-sm font-mono">
          User clicks Save → Validate game state → Serialize board (FEN) → Serialize history (PGN) → Create metadata object → Generate UUID → Store in localStorage → Update save list → Display confirmation toast
        </p>
      </div>

      <div className="report-info-box mt-4">
        <p className="text-sm font-semibold mb-2">Game Load Flow (Level 1 DFD):</p>
        <p className="text-sm font-mono">
          User selects game → Read save list from localStorage → Parse JSON → Validate FEN string → Load position into chess.js → Restore move history → Restore difficulty settings → Update all UI components → Display loaded board
        </p>
      </div>

      <div className="report-info-box mt-4">
        <p className="text-sm font-semibold mb-2">Move Execution Flow (Level 2 DFD):</p>
        <p className="text-sm font-mono">
          Player clicks square → Check if piece selected → Validate move legality → Execute move in chess.js → Update board state → Check for game-ending conditions → Trigger AI response → AI evaluates position → AI selects best move → Execute AI move → Update board → Check game-ending conditions → Return control to player
        </p>
      </div>

      <div className="report-info-box mt-4">
        <p className="text-sm font-semibold mb-2">Undo Operation Flow:</p>
        <p className="text-sm font-mono">
          Player clicks Undo → Verify move history ≥ 2 → Undo AI move (chess.undo()) → Undo player move (chess.undo()) → Recalculate board state → Update move history display → Clear selection state → Update captured pieces → Refresh all UI components
        </p>
      </div>

      <p className="report-paragraph"><strong>localStorage Schema (Current Implementation):</strong></p>
      <div className="report-code-block">
{`// Storage key pattern
const STORAGE_KEY = 'chess-game-saves';

// Saved game structure
interface SavedGame {
    id: string;           // UUID v4
    name: string;         // User-provided name (max 100 chars)
    fen: string;          // Board position in FEN notation
    pgn: string;          // Complete move history in PGN
    difficulty: 'easy' | 'medium' | 'hard';
    moveCount: number;    // Total moves played
    createdAt: string;    // ISO 8601 timestamp
    updatedAt: string;    // ISO 8601 timestamp
}

// Storage structure in localStorage
{
    "chess-game-saves": [
        { 
            id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", 
            name: "Italian Game Practice", 
            fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
            pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4",
            difficulty: "medium",
            moveCount: 5,
            createdAt: "2026-03-15T10:30:00.000Z",
            updatedAt: "2026-03-15T11:45:00.000Z"
        },
        { 
            id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", 
            name: "Sicilian Defense Study", 
            fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            pgn: "1. e4 c5 2. Nf3",
            difficulty: "hard",
            moveCount: 3,
            createdAt: "2026-03-14T14:20:00.000Z",
            updatedAt: "2026-03-14T15:00:00.000Z"
        }
    ]
}

// Storage size estimation
// Average saved game: ~500 bytes
// Maximum 10 saves: ~5 KB
// localStorage limit: 5-10 MB (browser-dependent)
// Utilization: < 0.1% of available storage`}
      </div>

      <h3 className="report-subsection-title">12.4 Data Dictionary</h3>
      <p className="report-paragraph">
        The following data dictionary provides a comprehensive reference for all fields across the database schema:
      </p>

      <table className="report-table text-xs">
        <thead>
          <tr>
            <th>Table</th>
            <th>Field</th>
            <th>Type</th>
            <th>Constraints</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>users</td><td>id</td><td>UUID</td><td>PK, NOT NULL</td><td>Unique user identifier</td></tr>
          <tr><td>users</td><td>username</td><td>VARCHAR(50)</td><td>UNIQUE, NOT NULL</td><td>Login username</td></tr>
          <tr><td>users</td><td>email</td><td>VARCHAR(255)</td><td>UNIQUE, NOT NULL</td><td>Email address</td></tr>
          <tr><td>users</td><td>elo_rating</td><td>INTEGER</td><td>DEFAULT 1200</td><td>Estimated playing strength</td></tr>
          <tr><td>games</td><td>id</td><td>UUID</td><td>PK, NOT NULL</td><td>Unique game identifier</td></tr>
          <tr><td>games</td><td>user_id</td><td>UUID</td><td>FK → users</td><td>Game owner</td></tr>
          <tr><td>games</td><td>fen</td><td>VARCHAR(100)</td><td>—</td><td>Current board position</td></tr>
          <tr><td>games</td><td>pgn</td><td>TEXT</td><td>—</td><td>Complete move history</td></tr>
          <tr><td>games</td><td>difficulty</td><td>VARCHAR(10)</td><td>CHECK</td><td>AI difficulty level</td></tr>
          <tr><td>games</td><td>result</td><td>VARCHAR(20)</td><td>CHECK</td><td>Game outcome</td></tr>
          <tr><td>moves</td><td>san</td><td>VARCHAR(10)</td><td>NOT NULL</td><td>Standard Algebraic Notation</td></tr>
          <tr><td>moves</td><td>from_sq</td><td>VARCHAR(2)</td><td>NOT NULL</td><td>Source square (e.g., "e2")</td></tr>
          <tr><td>moves</td><td>to_sq</td><td>VARCHAR(2)</td><td>NOT NULL</td><td>Target square (e.g., "e4")</td></tr>
          <tr><td>moves</td><td>eval_score</td><td>NUMERIC</td><td>—</td><td>AI evaluation (centipawns)</td></tr>
          <tr><td>settings</td><td>board_theme</td><td>VARCHAR(20)</td><td>DEFAULT 'classic'</td><td>Visual board style</td></tr>
          <tr><td>settings</td><td>auto_queen</td><td>BOOLEAN</td><td>DEFAULT false</td><td>Auto-promote to queen</td></tr>
        </tbody>
      </table>
    </>
  );
};

export default DatabaseSection;
