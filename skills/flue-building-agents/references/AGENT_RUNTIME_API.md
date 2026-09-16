# Flue Agent Runtime API Reference

## Summary of Core Runtime Exports

### Message Input Shape (`DeliveredMessage`)

```typescript
type DeliveredMessage =
  | { kind: 'user'; body: string; attachments?: DeliveredAttachment[] }
  | {
      kind: 'signal';
      type: string;
      body: string;
      attributes?: Record<string, string>;
      tagName?: string;
    };
```

### Messaging & Dispatching

- `dispatch(agent, request)`: Fire-and-forget message delivery to an agent instance.
- `init(agent, options)`: Returns an `AgentInstanceHandle` with `.dispatch()`, `.read()`, and `.abort()` methods.
- `getAgentInstance(agent, id)`: Looks up instance info and `uid`.

### Standalone Node Bootstrap (`start`)

```typescript
import { start } from '@flue/runtime/node';

const flue = await start({
  agents: [AssistantAgent],
});

// Run programmatic agent interactions
```
