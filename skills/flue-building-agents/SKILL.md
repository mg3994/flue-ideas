---
name: flue-building-agents
description: Best practices for building AI agents in Flue using agent hooks, model configurations, lifecycle control, state persistence, and Agent API reference. Use when developing Flue agent functions, configuring models, adding runtime capabilities via hooks, or managing session state.
license: Apache-2.0
compatibility: Requires Node.js >= 22.19.0
metadata:
  framework: Flue
  target: node
---

# Building Agents in Flue

This skill provides comprehensive instructions for constructing, configuring, and managing agents in the **Flue framework**.

## Defining an Agent Harness

In Flue, an agent is a TypeScript function marked with `'use agent'`. Inside the function body, you use Flue runtime hooks to compose the agent's harness, and return the system instructions.

```typescript
'use agent';

import { useModel, useTool, useSkill, useSandbox } from '@flue/runtime';
import { local } from '@flue/runtime/node';

export function CodeReviewer() {
  // 1. Set the LLM model
  useModel('anthropic/claude-sonnet-4-6');

  // 2. Attach sandbox execution environment
  useSandbox(local());

  // 3. System prompt instructions
  return `
You are an expert code reviewer.
Analyze incoming pull requests for code quality, security flaws, and performance bottlenecks.
Verify changes carefully before rendering your verdict.
`;
}
```

## Agent Hooks Reference

Flue uses React-like runtime hooks inside agent functions to attach capabilities:

- `useModel(modelIdentifier, options?)`: Configures model provider and parameters (temperature, max tokens, etc.).
- `useTool(toolDefinition)`: Attaches typed executable actions/tools to the agent context.
- `useSkill(skillModule)`: Imports and registers a SKILL.md file for progressive knowledge disclosure.
- `useSandbox(sandboxProvider)`: Provides an isolated sandbox environment (e.g., `local()`, Daytona remote container).
- `useSubagent(subagentFunction)`: Registers specialized child agents for task delegation.
- `useHook(lifecycleHooks)`: Intercepts agent execution lifecycle events (`onStart`, `onToolCall`, `onFinish`, `onError`).

## Agent Hook Lifecycle & Intercepts

You can monitor and intercept agent operations using agent lifecycle hooks:

```typescript
'use agent';

import { useModel, useHook } from '@flue/runtime';

export function MonitoredAgent() {
  useModel('anthropic/claude-haiku-4-5');

  useHook({
    onStart(session) {
      console.log(`Agent session started: ${session.id}`);
    },
    onToolCall({ name, args }) {
      console.log(`Executing tool ${name} with arguments:`, args);
    },
    onFinish({ result }) {
      console.log(`Agent completed task successfully.`);
    },
    onError(error) {
      console.error(`Agent encountered error:`, error);
    }
  });

  return 'You are an agent with lifecycle observability.';
}
```

## Session State & Multi-turn Interactions

Flue automatically maintains conversation history and session context based on unique agent IDs:

- Conversations persist across HTTP/CLI invocations using the session ID (`--id` flag in CLI or `/:id` route in HTTP API).
- State can be queried or reset via runtime APIs.

## Key Rules & Guidelines
- Always declare `'use agent'` at the top of agent function files.
- Keep system instruction strings focused, modular, and clear.
- Group reusable capabilities into custom hooks or skills rather than monolithic agent functions.
