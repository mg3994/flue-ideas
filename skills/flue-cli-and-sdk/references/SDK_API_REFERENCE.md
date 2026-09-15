# Flue Client SDK & CLI API Reference

## `@flue/sdk` API Options

```typescript
import { FlueClient } from '@flue/sdk';

const client = new FlueClient({
  baseUrl: 'http://localhost:5173/agents/assistant',
  headers: {
    'Authorization': 'Bearer <token>',
  },
});

// Stream response tokens in real-time
const stream = await client.sendMessageStream({
  sessionId: 'session-123',
  message: 'Draft release notes.',
});

for await (const chunk of stream) {
  process.stdout.write(chunk.text);
}
```

## CLI Flags Summary (`flue run`)

- `--id <string>`: Specify session ID for multi-turn persistent context.
- `--message <string>`: User input prompt string.
- `--verbose`: Enable verbose debug output for tool calls and hooks.
