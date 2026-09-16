import { ALL_EPISODES, getEpisodeById } from '../catalog/index.mjs';
import { generateYouTubeScript } from '../generators/youtube-script.mjs';

/**
 * Flue Tool: youtubeScriptTool
 * Compiles a full YouTube script with dual-column direction, chapters, and disclaimer.
 */
export const youtubeScriptTool = {
  name: 'generateYouTubeScript',
  description: 'Generates a full YouTube video production script for the IDE Guide channel with mandatory disclaimer and timestamps.',
  parameters: {
    episodeId: {
      type: 'string',
      description: 'Episode identifier (e.g. episode-01-vscode-vs-cursor)',
      required: true,
    },
  },
  async execute({ episodeId }: { episodeId: string }) {
    const episode = getEpisodeById(episodeId);
    if (!episode) {
      throw new Error(`Episode '${episodeId}' not found. Available: ${ALL_EPISODES.map((e) => e.id).join(', ')}`);
    }

    const script = generateYouTubeScript(episode);
    return {
      episodeId,
      title: episode.title,
      targetDuration: episode.targetDuration,
      scriptMarkdown: script,
      wordCount: script.split(/\s+/).length,
    };
  },
};

export default youtubeScriptTool;
