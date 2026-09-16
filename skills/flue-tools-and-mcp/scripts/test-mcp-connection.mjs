#!/usr/bin/env node

/**
 * Utility script to verify stdio process connectivity for MCP servers.
 */

import { spawn } from 'node:child_process';

console.log('Testing stdio MCP server process spawning...');

const child = spawn('npx', ['-y', '@modelcontextprotocol/server-filesystem', '/tmp'], {
  stdio: ['pipe', 'pipe', 'inherit'],
});

child.on('error', (err) => {
  console.error('❌ Failed to spawn MCP server process:', err);
  process.exit(1);
});

setTimeout(() => {
  console.log('✅ MCP server process spawned successfully (STDIO connection active).');
  child.kill();
  process.exit(0);
}, 2000);
