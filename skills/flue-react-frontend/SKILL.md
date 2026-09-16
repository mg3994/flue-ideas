---
name: flue-react-frontend
description: Guide for integrating deployed Flue agents with React frontend user interfaces using @flue/sdk and React integration hooks. Use when building chat interfaces, agent status displays, or streaming agent outputs in React applications.
license: Apache-2.0
compatibility: Requires Node.js >= 22.19.0 and React >= 18.0.0
metadata:
  framework: Flue
  target: node
---

# Flue React Frontend Integration

This skill outlines how to connect deployed **Flue** agents to React frontend web applications using `@flue/sdk`.

## Installing Client SDK Dependencies

```bash
npm install @flue/sdk
```

## Basic React Agent Component

Connect to deployed Flue agent HTTP endpoints (`POST /agents/assistant/:id`) directly using `@flue/sdk`:

```tsx
import React, { useState } from 'react';
import { FlueClient } from '@flue/sdk';

const flueClient = new FlueClient({
  baseUrl: 'http://localhost:5173/agents/assistant',
});

export function AgentChatComponent() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await flueClient.sendMessage({
        sessionId: 'user-session-101',
        message: userMsg,
      });

      setMessages((prev) => [...prev, { role: 'assistant', content: response.text }]);
    } catch (err) {
      console.error('Failed to query agent:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages-list">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role}`}>
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
        {isLoading && <div className="loading">Agent is processing...</div>}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Flue agent..."
        />
        <button type="submit" disabled={isLoading}>Send</button>
      </form>
    </div>
  );
}
```

## Best Practices
- Pass unique user session IDs to maintain isolated conversation history across component mounts.
- Wrap network requests in standard React error boundaries or error state banners.
- Disable submit buttons during pending network operations.
