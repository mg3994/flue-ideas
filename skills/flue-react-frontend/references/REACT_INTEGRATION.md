# Flue React Integration Reference Guide

## Stream Handling in React UI

```typescript
import { FlueClient } from '@flue/sdk';

const client = new FlueClient({
  baseUrl: 'http://localhost:5173/agents/assistant',
});

// Real-time chunk streaming handler
async function streamAgentResponse(sessionId: string, prompt: string, onChunk: (text: string) => void) {
  const stream = await client.sendMessageStream({
    sessionId,
    message: prompt,
  });

  for await (const chunk of stream) {
    onChunk(chunk.text);
  }
}
```
