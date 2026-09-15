---
name: flue-skills-and-subagents
description: Instructions for importing and loading Agent Skills (SKILL.md) using useSkill and composing modular multi-agent architectures using useSubagent in Flue. Use when attaching skills or delegating subtasks to specialized subagents.
license: Apache-2.0
compatibility: Requires Node.js >= 22.19.0
metadata:
  framework: Flue
  target: node
---

# Flue Skills & Subagents

This skill covers how to load Agent Skills (`SKILL.md`) for progressive instruction disclosure and delegate tasks to specialized subagents in **Flue**.

## Using Agent Skills (`useSkill`)

Agent Skills package reusable procedural expertise, domain knowledge, and instructions inside a directory with a `SKILL.md` file. In Flue, you import `SKILL.md` directly and pass it to `useSkill`:

```typescript
'use agent';

import { useModel, useSkill } from '@flue/runtime';
// Direct Markdown import supported by Flue runtime / Vite plugin
import codeReviewSkill from '../skills/code-review/SKILL.md';
import securityAuditSkill from '../skills/security-audit/SKILL.md';

export function AuditorAgent() {
  useModel('anthropic/claude-sonnet-4-6');

  // Register skills for progressive disclosure
  useSkill(codeReviewSkill);
  useSkill(securityAuditSkill);

  return 'You perform thorough code reviews and security audits using registered skills.';
}
```

### Progressive Disclosure
When `useSkill` is used:
1. **Discovery**: Only skill name and description are loaded into context initially (~100 tokens per skill).
2. **Activation**: When a user request matches a skill's description, the full `SKILL.md` body is loaded into context automatically.

## Defining & Using Subagents (`useSubagent`)

Subagents allow a main coordinator agent to delegate specialized subtasks to expert subagents rather than trying to handle every step itself.

### 1. Define Specialized Subagent Functions

```typescript
// src/agents/subagents/securityExpert.ts
'use agent';

import { useModel, useTool } from '@flue/runtime';
import { scanVulnerabilities } from '../../tools/security.ts';

export function SecurityExpert() {
  useModel('anthropic/claude-haiku-4-5');
  useTool(scanVulnerabilities);

  return 'You are a dedicated security specialist agent. Perform automated vulnerability scans.';
}
```

### 2. Register Subagents with Coordinator Agent

```typescript
// src/agents/triageCoordinator.ts
'use agent';

import { useModel, useSubagent } from '@flue/runtime';
import { SecurityExpert } from './subagents/securityExpert.ts';

export function TriageCoordinator() {
  useModel('anthropic/claude-sonnet-4-6');

  // Register child subagent
  useSubagent(SecurityExpert);

  return `
You are the primary triage coordinator.
Analyze incoming requests and delegate deep security checks to the SecurityExpert subagent.
`;
}
```

## Best Practices
- Keep individual skills modular and under 500 lines of instructions in `SKILL.md`.
- Use fast, lower-latency models (e.g. `claude-haiku-4-5`) for specialized subagents when appropriate.
- Delegate distinct domain tasks to dedicated subagents to prevent context contamination in the main coordinator.
