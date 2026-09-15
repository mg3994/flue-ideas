---
name: flue-workflows-schedules-channels
description: Best practices for building durable agent workflows, cron schedules, channel integrations (Slack, Discord, GitHub), and managing execution durability in Flue. Use when creating background scheduled agent tasks, event-driven channel integrations, or durable multi-step workflows.
license: Apache-2.0
compatibility: Requires Node.js >= 22.19.0
metadata:
  framework: Flue
  target: node
---

# Flue Workflows, Schedules & Channels

This skill outlines how to construct durable workflows, automated background cron schedules, and event-driven channel integrations in **Flue**.

## Durable Workflows & Recovery

Flue agents feature built-in durability to recover state automatically across process restarts, network interruptions, or deployment updates:

- **State Checkpointing**: Step completions, tool call results, and LLM turns are stored durably.
- **Durable Recovery**: When a node process restarts, accepted work resumes from the last checkpoint without re-running completed side effects.

## Background Schedules (`useSchedule`)

Agents can be triggered automatically on cron schedules to execute background maintenance, reporting, or triaging tasks:

```typescript
'use agent';

import { useModel, useSchedule, useTool } from '@flue/runtime';
import { generateDailyReport } from '../tools/analytics.ts';

export function DailyReportAgent() {
  useModel('anthropic/claude-sonnet-4-6');
  useTool(generateDailyReport);

  // Run every morning at 08:00 AM UTC
  useSchedule({
    cron: '0 8 * * *',
    async handler(trigger) {
      console.log('Triggering daily report cron agent workflow...');
    }
  });

  return 'You compile daily analytics reports on schedule.';
}
```

## Channel Integrations (Slack, Discord, GitHub, Teams)

Flue allows agents to receive verified webhook events from external communication platforms:

### 1. Register Channel Middleware in App Router (`src/app.ts`)

```typescript
import { Hono } from 'hono';
import { createChannelAdapter } from '@flue/runtime/channels';
import { slackAdapter } from '@flue/ecosystem/channels/slack';
import { TriageCoordinator } from './agents/triageCoordinator.ts';

const app = new Hono();

// Handle incoming Slack mention events
app.post(
  '/api/channels/slack',
  createChannelAdapter({
    adapter: slackAdapter({ signingSecret: process.env.SLACK_SIGNING_SECRET }),
    agent: TriageCoordinator,
  })
);

export default app;
```

### 2. Event Payload Verification

Flue's channel adapters automatically handle signature verification, challenge handshakes, and route verified messages directly into the agent's conversation session.

## Best Practices
- Ensure background scheduled tasks are idempotent so retries do not duplicate actions.
- Store channel credentials (tokens, secrets) securely in environment variables.
- Maintain durable persistence (`@flue/postgres`) when deploying scheduled or channel-driven agents.
