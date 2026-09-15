---
name: flue-architecture-and-layout
description: Guidelines for organizing Flue AI agent project structures, understanding core framework concepts, project layout standards, and migrating legacy agent implementations to Flue. Use when structuring a Flue application directory, organizing agents, tools, skills, and routes, or migrating to Flue.
license: Apache-2.0
compatibility: Requires Node.js >= 22.19.0
metadata:
  framework: Flue
  target: node
---

# Flue Architecture & Project Layout

This skill outlines project layout conventions, architectural concepts, and migration guidelines for building scalable Node.js applications with the **Flue AI Framework**.

## Recommended Directory Structure

Flue projects follow a modular convention separating agents, tools, skills, routes, and server configuration:

```
my-flue-app/
├── src/
│   ├── agents/            # Flue agent harnesses ('use agent')
│   │   ├── assistant.ts
│   │   └── triage.ts
│   ├── tools/             # Custom agent tools
│   │   ├── github.ts
│   │   └── database.ts
│   ├── skills/            # Agent skills (SKILL.md & workflows)
│   │   └── code-review/
│   │       └── SKILL.md
│   ├── app.ts             # Main Hono app router & agent endpoint mounts
│   └── index.ts           # Server entrypoint
├── flue.config.ts         # Flue runtime target configuration
├── vite.config.ts         # Vite build setup with @flue/vite
├── package.json
└── tsconfig.json
```

## Core Architectural Concepts

1. **Programmable Harness Function**:
   In Flue, an agent is defined as a TypeScript function decorated with `'use agent'`. The return string serves as system context/instructions, while hooks inject capabilities (models, sandboxes, skills, tools, subagents).

2. **Decoupled Skills & Tools**:
   - **Tools**: Typed executable functions that agents can call.
   - **Skills**: Markdown-based knowledge and procedural context (`SKILL.md`) loaded progressively on demand.

3. **Isolated Sandboxes**:
   Agents execute within isolated execution environments (e.g. local or remote container sandboxes) to safely run shell commands or modify files.

4. **App Router (`src/app.ts`)**:
   Flue integrates natively with Hono web servers. Routes are mounted using agent router helpers (`createAgentRouter`) exposing standardized HTTP REST APIs.

## Why Flue? Framework Comparison & Migration

### Why Choose Flue?
- **Programmable Control**: Unlike rigid pipeline SDKs, Flue gives full TypeScript control over agent context, hooks, and session lifecycles.
- **Progressive Context Disclosure**: Agent skills load metadata first, pulling full instruction files only when activated.
- **Durable Persistence**: Built-in state durability handles server restarts and long-running agent workflows seamlessly.

### Migration Guidelines
When migrating from legacy agent SDKs or custom LLM loops:
- Extract direct LLM completion loops into Flue agent functions (`'use agent'`).
- Convert function calling schemas into Flue typed tools (`createTool`).
- Move system prompt documentation into modular Agent Skills (`SKILL.md`).
- Replace custom HTTP server wrappers with `createAgentRouter` in `src/app.ts`.
