#!/usr/bin/env node

/**
 * Environment validation script for Flue Framework
 */

const nodeVersion = process.versions.node;
const [major, minor] = nodeVersion.split('.').map(Number);

console.log(`Checking Node.js version: v${nodeVersion}...`);

if (major < 22 || (major === 22 && minor < 19)) {
  console.error(`❌ Flue requires Node.js >= 22.19.0. Found v${nodeVersion}.`);
  process.exit(1);
}

console.log('✅ Node.js version requirement met.');

const requiredKeys = ['ANTHROPIC_API_KEY', 'OPENAI_API_KEY'];
const presentKeys = requiredKeys.filter((key) => Boolean(process.env[key]));

if (presentKeys.length === 0) {
  console.warn('⚠️  No LLM API keys found in process.env (ANTHROPIC_API_KEY or OPENAI_API_KEY). Set keys in .env when running agents.');
} else {
  console.log(`✅ Found active API key(s): ${presentKeys.join(', ')}.`);
}
