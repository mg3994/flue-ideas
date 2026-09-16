-- SQL Schema for Flue Agent Persistence Table

CREATE TABLE IF NOT EXISTS flue_agent_sessions (
  id VARCHAR(255) PRIMARY KEY,
  agent_name VARCHAR(255) NOT NULL,
  state JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_flue_agent_sessions_agent_name ON flue_agent_sessions(agent_name);
