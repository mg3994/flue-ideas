---
name: flue-sandboxes
description: Guide for configuring execution sandboxes, isolating tool execution, managing workspace filesystem access, and running shell commands safely in Flue agents. Use when enabling sandbox environments, safe code execution, or container isolation in Flue.
license: Apache-2.0
compatibility: Requires Node.js >= 22.19.0
metadata:
  framework: Flue
  target: node
---

# Flue Sandboxes & Execution Isolation

This skill explains how to configure sandboxes in **Flue** to provide agents with isolated environments for tool execution, filesystem operations, and shell commands.

## Overview

Sandboxes provide isolated workspace environments where agents can run bash commands, edit files, and run code safely without risking host system corruption.

## Local Sandbox Provider (`local()`)

For local development or controlled Node.js environments, use the `local()` sandbox provider from `@flue/runtime/node`:

```typescript
'use agent';

import { useModel, useSandbox } from '@flue/runtime';
import { local } from '@flue/runtime/node';

export function LocalDeveloperAgent() {
  useModel('anthropic/claude-sonnet-4-6');

  // Attach local sandbox restricted to a workspace directory
  useSandbox(local({
    rootDir: './workspace',
    allowProcessExecution: true,
  }));

  return 'You operate inside a local workspace sandbox to modify files and run commands.';
}
```

## Remote Container Sandboxes (e.g. Daytona / Docker)

For production environments, agents can be attached to remote cloud sandboxes or ephemeral containers:

```typescript
'use agent';

import { useModel, useSandbox } from '@flue/runtime';
import { daytona } from '@flue/ecosystem/sandboxes/daytona';

export function CloudWorkerAgent() {
  useModel('anthropic/claude-sonnet-4-6');

  // Attach cloud container sandbox
  useSandbox(daytona({
    snapshot: 'node-22-default',
  }));

  return 'You execute tasks inside an isolated remote cloud container sandbox.';
}
```

## Filesystem & Process Operations inside Sandboxes

Once a sandbox is attached via `useSandbox`, standard built-in agent actions (file read, file write, terminal command execution) run within the sandbox boundary:

- File reads/writes are contained within the sandbox root directory.
- Environment variables and credentials from the host machine are restricted unless explicitly forwarded.
- Command execution timeouts and resource constraints are automatically enforced.

## Security Best Practices
- Never run unconstrained local sandboxes with root host access in production.
- Use ephemeral container sandboxes for untrusted user inputs or external code execution.
- Set explicit timeouts on process execution commands inside sandbox options.
