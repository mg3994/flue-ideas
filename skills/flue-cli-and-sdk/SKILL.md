---
name: flue-cli-and-sdk
description: Overview and reference for the Flue Command Line Interface (flue) and Client Agent SDK (@flue/sdk). Use when interacting with agents via terminal CLI flags or consuming agent conversation streams programmatically using @flue/sdk.
license: Apache-2.0
compatibility: Requires Node.js >= 22.19.0
metadata:
  framework: Flue
  target: node
---

# Flue CLI & Client SDK Guide

This skill covers how to use the **Flue CLI (`@flue/cli`)** for local development and the **Flue Client SDK (`@flue/sdk`)** for consuming agent sessions programmatically.

## Flue CLI Commands (`@flue/cli`)

The `flue` binary provides local execution, project initialization, and utility commands:

### `flue init`
Initializes a new Flue project or configures an existing project with baseline dependencies and configuration files.
```bash
npx flue init
```

### `flue run`
Runs an agent locally from the command line:
```bash
# Execute single message prompt
npx flue run src/agents/assistant.ts --message "Explain TypeScript generics."

# Persist conversation session context
npx flue run src/agents/assistant.ts --id session-1 --message "Remember my name is Alice."
npx flue run src/agents/assistant.ts --id session-1 --message "What is my name?"
```

## Flue Client SDK (`@flue/sdk`)

The `@flue/sdk` package allows Node.js backend services or frontend clients to interact with deployed Flue agents over HTTP REST/WebSocket APIs:

### Installation
```bash
npm install @flue/sdk
```

### Basic SDK Usage

```typescript
import { FlueClient } from '@flue/sdk';

// Initialize client pointing to deployed agent server endpoint
const client = new FlueClient({
  baseUrl: 'http://localhost:5173/agents/assistant',
});

// Send message to agent session
const response = await client.sendMessage({
  sessionId: 'user-session-101',
  message: 'Summarize today\'s triage log.',
});

console.log('Agent Response:', response.text);

// Read conversation history
const history = await client.getHistory('user-session-101');
console.log('Conversation History:', history);
```

## Best Practices
- Use explicit session IDs in both CLI and SDK interactions to maintain multi-turn conversation memory.
- Configure proper timeout and retry handlers in `@flue/sdk` when interacting with long-running agent execution pipelines.
