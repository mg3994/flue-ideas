---
name: flue-tools-and-mcp
description: Guidelines for defining typed tools in Flue using Zod schema validation, registering tools with useTool, and connecting Model Context Protocol (MCP) servers. Use when creating custom tools for Flue agents or integrating external MCP tools and servers.
license: Apache-2.0
compatibility: Requires Node.js >= 22.19.0
metadata:
  framework: Flue
  target: node
---

# Flue Tools & MCP Integration

This skill guides you through defining typed tools and connecting external Model Context Protocol (MCP) servers in the **Flue framework**.

## Creating Custom Tools

Tools in Flue are created using the `createTool` function, defining typed input parameters with Zod schemas and an `execute` handler:

```typescript
// src/tools/github.ts
import { createTool } from '@flue/runtime';
import { z } from 'zod';

export const searchCode = createTool({
  name: 'searchCode',
  description: 'Search repository codebase for specific pattern or file',
  parameters: z.object({
    query: z.string().describe('Search query string or regex pattern'),
    extension: z.string().optional().describe('File extension filter (e.g. ts, json)'),
  }),
  async execute({ query, extension }) {
    // Perform search operation
    return {
      results: [
        { file: 'src/index.ts', line: 42, match: query }
      ]
    };
  }
});
```

## Attaching Tools to Agents

Use the `useTool` hook inside your agent definition function:

```typescript
'use agent';

import { useModel, useTool } from '@flue/runtime';
import { searchCode } from '../tools/github.ts';

export function DeveloperAgent() {
  useModel('anthropic/claude-sonnet-4-6');

  // Attach the custom tool
  useTool(searchCode);

  return 'You are an agent equipped with codebase search capabilities.';
}
```

## Connecting MCP (Model Context Protocol) Servers

Flue allows agents to connect directly to standard MCP servers (stdio, SSE, HTTP) to expose authenticated tools and resources dynamically:

```typescript
'use agent';

import { useModel, useMCP } from '@flue/runtime';

export function MCPAgent() {
  useModel('anthropic/claude-sonnet-4-6');

  // Connect to an MCP server via stdio transport
  useMCP({
    name: 'filesystem-mcp',
    transport: 'stdio',
    command: 'npx',
    args: ['-y', '@modelcontextprotocol/server-filesystem', '/tmp/workspace'],
  });

  return 'You have access to tools supplied by the filesystem MCP server.';
}
```

## Best Practices
- Always write explicit Zod descriptions for tool parameters to guide model decision-making.
- Handle tool errors gracefully inside `execute` and return descriptive error objects.
- Keep tool responses structured (JSON objects) rather than unstructured text when possible.
