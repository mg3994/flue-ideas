import fs from 'node:fs';
import path from 'node:path';
import { ALL_EPISODES } from '../catalog/index.mjs';
import { CONFIG } from '../config.mjs';

/**
 * Flue Tool: releasePackagerTool
 * Generates release notes and organizes assets for GitHub Releases.
 */
export const releasePackagerTool = {
  name: 'packageRelease',
  description: 'Prepares GitHub release notes and catalogs generated release assets for distribution.',
  parameters: {
    tagName: {
      type: 'string',
      description: 'Release tag name (e.g. v1.0.0)',
      required: false,
    },
  },
  async execute({ tagName = 'v1.0.0' }: { tagName?: string } = {}) {
    const distDir = path.resolve(process.cwd(), 'dist');
    const releasesDir = path.resolve(distDir, 'releases');

    const episodesSummary = ALL_EPISODES.map((ep) => ({
      episodeNumber: ep.episodeNumber,
      title: ep.title,
      targetDuration: ep.targetDuration,
      files: [
        `${ep.id}-youtube-script.md`,
        `${ep.id}-blogger-post.html`,
      ],
    }));

    return {
      releaseTag: tagName,
      channel: CONFIG.channel.name,
      blog: CONFIG.blog.name,
      episodesCount: ALL_EPISODES.length,
      episodes: episodesSummary,
      releasesPath: releasesDir,
      status: 'ready_for_github_release',
    };
  },
};

export default releasePackagerTool;
