# Model Context Protocol (MCP) Reference

## Transport Options in `useMCP`

Flue supports standard MCP transport protocols:

### 1. STDIO Transport
Connects to an MCP server spawned as a local child process:

```typescript
useMCP({
  name: 'git-mcp',
  transport: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-git'],
});
```

### 2. SSE (Server-Sent Events) Transport
Connects to a remote HTTP MCP server over SSE:

```typescript
useMCP({
  name: 'remote-mcp',
  transport: 'sse',
  url: 'https://mcp.internal.company.com/sse',
});
```
