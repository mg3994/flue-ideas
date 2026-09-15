---
name: flue-deploy-and-node-target
description: Production deployment guide for building and bundling Flue applications on Node.js targets using Vite (@flue/vite), containerization, environment variables, and CLI build pipelines. Use when preparing Flue agents for production deployment on Node.js servers or Docker.
license: Apache-2.0
compatibility: Requires Node.js >= 22.19.0
metadata:
  framework: Flue
  target: node
---

# Deploying Flue on Node.js Target

This skill covers the build, bundling, and production deployment pipeline for **Flue** applications configured for the Node.js target.

## Configuration Setup

Ensure `flue.config.ts` specifies `node` target:

```typescript
// flue.config.ts
import { defineConfig } from '@flue/runtime/config';

export default defineConfig({
  target: 'node',
});
```

Configure `vite.config.ts` with the `@flue/vite` plugin:

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import { flue } from '@flue/vite';

export default defineConfig({
  plugins: [flue()],
});
```

## Build Pipeline

Flue uses Vite to bundle agents, tools, and app routers into single production-ready output modules:

```bash
# Execute Vite production build
npx vite build
```

The build command compiles your `src/app.ts` application into a standalone Node.js server bundle at `dist/server.mjs`.

## Running Production Node.js Server

Run the generated build file using Node.js:

```bash
# Start production server
node dist/server.mjs
```

Or configure `package.json` scripts:

```json
{
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "start": "node dist/server.mjs"
  }
}
```

## Containerization (Docker)

To deploy Flue inside a Docker container:

```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "dist/server.mjs"]
```

## Production Checklist & Best Practices
- **API Keys & Secrets**: Set `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, or custom provider credentials in environment variables or cloud secret managers.
- **Process Management**: Use process managers like PM2, Kubernetes, or Docker restart policies to maintain high availability.
- **Persistent Storage**: Ensure database connection strings (e.g. `DATABASE_URL` for `@flue/postgres`) are passed for multi-replica state consistency.
