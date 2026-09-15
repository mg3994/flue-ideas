---
name: flue-routing-and-database
description: Instructions for setting up HTTP app routers with Hono and createAgentRouter, mounting agent REST endpoints in src/app.ts, and configuring database state persistence. Use when exposing Flue agents over HTTP APIs or setting up database persistence.
license: Apache-2.0
compatibility: Requires Node.js >= 22.19.0
metadata:
  framework: Flue
  target: node
---

# Flue Routing & Database Persistence

This skill details how to mount Flue agents on HTTP web servers using **Hono** and configure state persistence with database adapters like **Postgres**.

## Mounting Agent Routes (`src/app.ts`)

Flue uses [Hono](https://hono.dev/) to serve agent APIs over HTTP. You mount agent harness functions into Hono using `createAgentRouter`:

```typescript
// src/app.ts
import { Hono } from 'hono';
import { createAgentRouter } from '@flue/runtime/routing';
import { Assistant } from './agents/assistant.ts';
import { Triage } from './agents/triage.ts';

// 1. Instantiate Hono application
const app = new Hono();

// 2. Mount agent routes
app.route('/agents/assistant', createAgentRouter(Assistant));
app.route('/agents/triage', createAgentRouter(Triage));

// 3. Export application instance for Vite / server runtime
export default app;
```

## Generated HTTP Endpoints

`createAgentRouter(AgentFunction)` automatically registers standard REST endpoints:

- `POST /agents/<agent-name>/:id` — Send a message prompt to session `:id` (returns HTTP `202 Accepted`).
- `GET /agents/<agent-name>/:id` — Retrieve current status and conversation state for session `:id`.
- `GET /agents/<agent-name>/:id?view=history` — Fetch complete message history for session `:id`.
- `POST /agents/<agent-name>/:id/abort` — Abort an in-flight execution for session `:id`.

### Example Client Request

```bash
curl -X POST http://localhost:5173/agents/assistant/session-123 \
  -H 'content-type: application/json' \
  -d '{"kind":"user","body":"Generate a summary of project updates."}'
```

## Database State Persistence (`@flue/postgres`)

By default, session state can be stored in memory during local dev. For production Node.js deployments, configure durable persistence with Postgres:

```typescript
// flue.config.ts
import { defineConfig } from '@flue/runtime/config';
import { postgresStore } from '@flue/postgres';

export default defineConfig({
  target: 'node',
  store: postgresStore({
    connectionString: process.env.DATABASE_URL,
  }),
});
```

## Best Practices
- Keep `src/app.ts` clean by mounting agents at semantic URL subpaths (e.g. `/agents/triage`).
- Use persistent database stores in production to preserve agent session history across process restarts.
- Set appropriate CORS headers and authentication middleware on your Hono app router.
