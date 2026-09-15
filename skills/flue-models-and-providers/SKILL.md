---
name: flue-models-and-providers
description: Detailed guide for selecting, configuring, and managing LLM models and provider credentials in Flue agents. Use when selecting models, configuring provider API keys, setting temperature or max tokens parameters, or handling multi-provider fallbacks.
license: Apache-2.0
compatibility: Requires Node.js >= 22.19.0
metadata:
  framework: Flue
  target: node
---

# Flue Models & Provider Configuration

This skill provides comprehensive instructions for selecting and configuring Large Language Models (LLMs) and managing model provider credentials in the **Flue framework**.

## Model Selection (`useModel`)

In Flue, models are declared inside agent functions using the `useModel` hook:

```typescript
'use agent';

import { useModel } from '@flue/runtime';

export function AssistantAgent() {
  // Select provider/model identifier
  useModel('anthropic/claude-sonnet-4-6');

  return 'You are a helpful assistant powered by Claude Sonnet.';
}
```

## Model Identifier Format

Flue supports model identifiers in `provider/model-name` format:

- `anthropic/claude-sonnet-4-6`
- `anthropic/claude-haiku-4-5`
- `openai/gpt-4o`
- `openai/gpt-4o-mini`

## Setting Model Parameters

You can pass configuration options as the second argument to `useModel`:

```typescript
'use agent';

import { useModel } from '@flue/runtime';

export function CreativeAgent() {
  useModel('anthropic/claude-sonnet-4-6', {
    temperature: 0.7,
    maxTokens: 4096,
    topP: 0.9,
  });

  return 'You generate creative software documentation and architecture diagrams.';
}
```

## Managing Provider API Keys

Set API keys in your environment (e.g. `.env` file):

```bash
# .env
ANTHROPIC_API_KEY="sk-ant-..."
OPENAI_API_KEY="sk-proj-..."
```

## Best Practices
- Use fast, low-latency models (e.g. `claude-haiku-4-5` or `gpt-4o-mini`) for routine subagent tasks or initial triaging.
- Use reasoning/capability-heavy models (e.g. `claude-sonnet-4-6` or `gpt-4o`) for complex tool execution and multi-step code generation.
- Keep provider API keys secure in environment variables and never commit raw secrets to source control.
