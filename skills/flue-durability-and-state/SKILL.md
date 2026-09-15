---
name: flue-durability-and-state
description: Instructions for managing agent session durability, step state checkpointing, crash recovery, and execution state preservation in Flue. Use when building long-running agent workflows or implementing crash recovery and persistent state.
license: Apache-2.0
compatibility: Requires Node.js >= 22.19.0
metadata:
  framework: Flue
  target: node
---

# Flue Durability & State Management

This skill provides guidelines for managing durable state execution, step checkpointing, and automatic crash recovery in **Flue**.

## How Flue Durability Works

Flue agents preserve progress through system failures, network disconnections, and process restarts:

1. **Step Checkpointing**: Whenever an agent completes an LLM generation or tool execution, Flue automatically records a durable checkpoint.
2. **Deterministic Replay**: Upon process restart, Flue replays previous turns from stored state without repeating completed external side effects (e.g. sending emails or creating database records).
3. **Session State Store**: Checkpoints are written to the configured session store (e.g., `@flue/postgres`).

## Configuring Persistent Stores

In `flue.config.ts`, configure a durable persistence adapter for Node.js production environments:

```typescript
import { defineConfig } from '@flue/runtime/config';
import { postgresStore } from '@flue/postgres';

export default defineConfig({
  target: 'node',
  store: postgresStore({
    connectionString: process.env.DATABASE_URL,
    tableName: 'flue_agent_sessions',
  }),
});
```

## Handling Long-Running Tasks

For workflows that span hours or days:

- Ensure all custom tools return JSON-serializable output so state can be checkpointed cleanly.
- Keep tool executions idempotent so that if a crash occurs mid-tool execution before checkpoint commit, re-executing the tool is safe.

## Best Practices
- Avoid storing large binary blobs in session state; store asset files in external storage (e.g. S3) and store URI references in state.
- Always configure a persistent database store (`@flue/postgres`) in production to enable cross-restart durability.
