---
name: flue-cloudflare-target
description: Guide for deploying Flue agents on Cloudflare Workers targets, configuring built-in Cloudflare AI gateway models, and building edge agent deployments with Vite. Use when building or deploying Flue agents on Cloudflare runtime target.
license: Apache-2.0
compatibility: Requires Node.js >= 22.19.0
metadata:
  framework: Flue
  target: cloudflare
---

# Flue Cloudflare Target & Edge Deployments

This skill covers how to configure and deploy **Flue** agents targeting Cloudflare Workers and utilizing built-in Cloudflare AI gateway integrations.

## Target Configuration (`flue.config.ts`)

To target Cloudflare Workers, update `flue.config.ts` to set `target: 'cloudflare'`:

```typescript
// flue.config.ts
import { defineConfig } from '@flue/runtime/config';

export default defineConfig({
  target: 'cloudflare',
});
```

## Built-in Cloudflare AI Gateway

When targeting Cloudflare, Flue automatically routes model requests through Cloudflare's built-in AI gateway (`cloudflare/*` models), requiring zero external LLM API key setup:

```typescript
'use agent';

import { useModel } from '@flue/runtime';

export function EdgeAssistant() {
  // Use built-in Cloudflare AI gateway model
  useModel('cloudflare/llama-3.1-8b-instruct');

  return 'You are an edge AI assistant running directly on Cloudflare Workers.';
}
```

## Vite Build Configuration for Cloudflare

Configure `vite.config.ts` with the `@flue/vite` plugin for Cloudflare deployments:

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import { flue } from '@flue/vite';

export default defineConfig({
  plugins: [flue()],
});
```

Build the agent bundle for Cloudflare:

```bash
npx vite build
```

The output bundle is compiled for edge execution without Node.js standard library dependencies.

## Best Practices
- Utilize `cloudflare/*` AI gateway models when deploying on Cloudflare to eliminate external API key management.
- Ensure all custom tools rely on Web-standard APIs (`fetch`, Web Streams) rather than Node.js native C++ modules.
- Use stateless or durable object stores for persisting session state at the edge.
