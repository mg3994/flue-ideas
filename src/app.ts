import { ALL_EPISODES } from './catalog/index.mjs';
import { trackLatestIdes } from './research/ide-tracker.mjs';
import { CONFIG } from './config.mjs';

/**
 * Flue Application Router
 * Defines HTTP endpoints for IDE Guide engine.
 */
export function createApp() {
  // Simple request router handling JSON responses
  return {
    async handleRequest(path: string, method: string = 'GET', body?: any) {
      if (path === '/health') {
        return { status: 'ok', framework: 'Flue', timestamp: new Date().toISOString() };
      }

      if (path === '/api/info') {
        return {
          channel: CONFIG.channel,
          blog: CONFIG.blog,
          cron: CONFIG.cronSchedule,
          disclaimer: CONFIG.legal.fullDisclaimer,
        };
      }

      if (path === '/api/catalog') {
        return {
          count: ALL_EPISODES.length,
          episodes: ALL_EPISODES.map((ep) => ({
            id: ep.id,
            episodeNumber: ep.episodeNumber,
            title: ep.title,
            targetDuration: ep.targetDuration,
          })),
        };
      }

      if (path === '/api/research') {
        const ides = await trackLatestIdes();
        return { count: ides.length, ides };
      }

      return { error: 'Not Found', path };
    },
  };
}

export default createApp;
