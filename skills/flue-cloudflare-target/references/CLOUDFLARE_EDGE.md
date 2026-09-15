# Flue Cloudflare Edge Target Reference

## Edge Execution Constraints

- **No Node.js Built-in C++ Modules**: Use Web Standard APIs (`fetch`, `crypto`, `ReadableStream`).
- **Zero API Key Cloudflare Gateway**: Use `cloudflare/*` models (`cloudflare/llama-3.1-8b-instruct`) for built-in AI routing.

## `flue.config.ts` Edge Configuration

```typescript
import { defineConfig } from '@flue/runtime/config';

export default defineConfig({
  target: 'cloudflare',
});
```
