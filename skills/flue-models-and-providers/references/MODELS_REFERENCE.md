# Flue LLM Models & Providers Reference

## Model Identifiers

Flue supports provider-qualified model strings:

| Model Identifier | Provider | Recommended Use |
|---|---|---|
| `anthropic/claude-sonnet-4-6` | Anthropic | Complex reasoning, multi-step coding, tool orchestration |
| `anthropic/claude-haiku-4-5` | Anthropic | Fast triaging, subagent delegation, low-latency tasks |
| `openai/gpt-4o` | OpenAI | General task execution and structured JSON outputs |
| `openai/gpt-4o-mini` | OpenAI | Lightweight conversational subagents |
| `cloudflare/llama-3.1-8b-instruct` | Cloudflare Gateway | Zero API key edge deployments on Cloudflare Workers |

## `useModel` Options API

```typescript
useModel('anthropic/claude-sonnet-4-6', {
  temperature: 0.2, // Sampling temperature (0.0 to 1.0)
  maxTokens: 4096,  // Maximum completion tokens
  topP: 0.95,       // Nucleus sampling parameter
});
```
