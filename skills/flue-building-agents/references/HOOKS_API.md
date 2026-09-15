# Flue Agent Hooks API Reference

## Summary of Runtime Hooks

| Hook | Description | Parameters |
|---|---|---|
| `useModel(id, options?)` | Sets LLM provider and model parameters | `id`: string, `options`: ModelOptions |
| `useTool(toolDefinition)` | Registers executable Zod action tool | `toolDefinition`: Tool |
| `useSkill(skillModule)` | Registers SKILL.md file for progressive disclosure | `skillModule`: Skill |
| `useSandbox(sandboxProvider)` | Attaches execution environment | `sandboxProvider`: Sandbox |
| `useSubagent(subagentFn)` | Registers specialized child subagent | `subagentFn`: AgentFunction |
| `useHook(lifecycleHooks)` | Attaches lifecycle telemetry listeners | `lifecycleHooks`: LifecycleHooks |

## Example Composite Harness

```typescript
'use agent';

import { useModel, useTool, useSkill, useSandbox, useSubagent } from '@flue/runtime';
import { local } from '@flue/runtime/node';
import triageSkill from '../skills/triage/SKILL.md';
import { searchCode } from '../tools/github.ts';
import { VerificationAgent } from './subagents/verifier.ts';

export function TriageAgent() {
  useModel('anthropic/claude-sonnet-4-6');
  useSandbox(local());
  useSkill(triageSkill);
  useTool(searchCode);
  useSubagent(VerificationAgent);

  return 'Triage bug reports end-to-end and delegate verification to subagent.';
}
```
