import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { IDEGuideCoordinator } from './agents/coordinatorAgent.ts';
import { IDEResearchAgent } from './agents/ideResearchAgent.ts';
import { ContentGeneratorAgent } from './agents/contentGeneratorAgent.ts';
import { createApp } from './app.ts';
import { CONFIG } from './config.mjs';

/**
 * IDE Guide - Flue Agent Framework Bootstrap
 */
export async function bootstrap() {
  console.log('⚡ Initializing IDE Guide on Flue Framework...');
  console.log(`📺 Channel: ${CONFIG.channel.name} (${CONFIG.channel.url})`);
  console.log(`⚡ Blog: ${CONFIG.blog.name} (${CONFIG.blog.url})`);
  console.log(`⏰ Cron Schedule: ${CONFIG.cronSchedule.description}`);

  const app = createApp();
  const info = await app.handleRequest('/api/info');
  console.log('✅ Flue agent engine ready with 3 registered agents:');
  console.log('  - IDEGuideCoordinator');
  console.log('  - IDEResearchAgent (3:00 AM IST Cron)');
  console.log('  - ContentGeneratorAgent');

  return { app, info };
}

// Auto-run if executed directly
if (process.argv[1] && path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1])) {
  bootstrap();
}

export default bootstrap;
