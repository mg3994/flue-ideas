# Flue Getting Started Reference & Cheat Sheet

## Essential NPM Commands

```bash
# Install Flue core packages
npm install @flue/runtime @flue/cli

# Install server and bundling dependencies
npm install hono vite @flue/vite

# Initialize new agent project
npx flue init
```

## Baseline Agent File (`src/agents/assistant.ts`)

```typescript
'use agent';

import { useModel } from '@flue/runtime';

export function Assistant() {
  useModel('anthropic/claude-haiku-4-5');
  return 'You are a concise AI assistant.';
}
```

## Running Agent Locally via CLI

```bash
npx flue run src/agents/assistant.ts --id demo-session --message "Hello agent!"
```
