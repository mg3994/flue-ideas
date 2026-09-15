# Flue Channel Webhooks Guide

## Supported Communication Adapters

Flue provides adapters for webhook verification and payload normalization across major platforms:

- **Slack**: `@flue/ecosystem/channels/slack`
- **GitHub**: `@flue/ecosystem/channels/github`
- **Discord**: `@flue/ecosystem/channels/discord`

## GitHub App Webhook Integration Example (`src/app.ts`)

```typescript
import { Hono } from 'hono';
import { createChannelAdapter } from '@flue/runtime/channels';
import { githubAdapter } from '@flue/ecosystem/channels/github';
import { TriageAgent } from './agents/triage.ts';

const app = new Hono();

app.post(
  '/api/channels/github',
  createChannelAdapter({
    adapter: githubAdapter({
      secret: process.env.GITHUB_WEBHOOK_SECRET,
    }),
    agent: TriageAgent,
  })
);

export default app;
```
