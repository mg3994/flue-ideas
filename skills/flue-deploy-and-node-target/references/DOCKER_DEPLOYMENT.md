# Flue Docker & Node.js Production Deployment Reference

## Complete Multi-stage Dockerfile

```dockerfile
# Build Stage
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json tsconfig*.json ./
RUN npm ci

COPY . .
RUN npx vite build

# Production Stage
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/server.mjs"]
```

## PM2 Process Manager Configuration (`ecosystem.config.js`)

```javascript
module.exports = {
  apps: [
    {
      name: 'flue-agent-server',
      script: 'dist/server.mjs',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
```
