---
name: flue-getting-started
description: Guide for initializing Flue framework projects, setting up Node.js runtime configuration, writing initial agents, and running agents locally using Flue CLI. Use when setting up a new Flue agent project, installing Flue dependencies, or running local Flue agents in Node.js.
license: Apache-2.0
compatibility: Requires Node.js >= 22.19.0
metadata:
  framework: Flue
  target: node
---

# Flue Getting Started Guide

This skill provides step-by-step instructions for initializing, configuring, and running AI agents built with the **Flue framework** using Node.js.

## Prerequisites

- **Node.js**: Minimum required version `>= 22.19.0`.
- **API Keys**: Model provider API keys (e.g., `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`) set in `.env`.

## Installation & Setup

### 1. Automatic Project Setup
To initialize a new project automatically using the Flue CLI:
```bash
npx flue init
```

### 2. Manual Installation
If initializing manually in an existing or new Node.js project:

```bash
npm install @flue/runtime @flue/cli
```

### 3. Flue Configuration (`flue.config.ts`)
Create a `flue.config.ts` file at the root of your project specifying the Node.js target:

```typescript
import { defineConfig } from '@flue/runtime/config';

export default defineConfig({
  target: 'node',
});
```

## Creating Your First Agent

Create your agent definition file (e.g. `src/agents/assistant.ts`):

```typescript
// The 'use agent' directive designates this function as a Flue agent harness
'use agent';

import { useModel } from '@flue/runtime';

export function Assistant() {
  // Select LLM model provider
  useModel('anthropic/claude-haiku-4-5');

  // Return prompt / instructions string as system context
  return 'You are a helpful assistant. Keep responses concise and structured.';
}
```

## Running Agents Locally

Use the `flue run` CLI command to run agents locally from your terminal:

```bash
# Execute single message prompt
npx flue run src/agents/assistant.ts --message "Hello! What can you help me with?"

# Persist conversation context using agent session ID (--id)
npx flue run src/agents/assistant.ts --id session-101 --message "Remember my favorite language is TypeScript."
npx flue run src/agents/assistant.ts --id session-101 --message "What is my favorite language?"
```

## Best Practices
- Always place `'use agent'` directive at top of agent function files.
- Store sensitive model credentials in `.env` files and avoid committing secrets.
- Use explicit session IDs (`--id`) when testing multi-turn conversational agents locally.
