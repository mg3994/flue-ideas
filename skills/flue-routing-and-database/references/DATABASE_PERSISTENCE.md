# Database Persistence Reference (`@flue/postgres`)

## Postgres Schema Setup

When using `@flue/postgres`, Flue automatically manages or expects a sessions table with the following schema:

```sql
CREATE TABLE IF NOT EXISTS flue_agent_sessions (
  id VARCHAR(255) PRIMARY KEY,
  agent_name VARCHAR(255) NOT NULL,
  state JSONB NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## `flue.config.ts` Configuration

```typescript
import { defineConfig } from '@flue/runtime/config';
import { postgresStore } from '@flue/postgres';

export default defineConfig({
  target: 'node',
  store: postgresStore({
    connectionString: process.env.DATABASE_URL,
    maxConnections: 10,
    idleTimeoutMillis: 30000,
  }),
});
```
