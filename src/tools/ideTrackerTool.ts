import { trackLatestIdes } from '../research/ide-tracker.mjs';

/**
 * Flue Tool: ideTrackerTool
 * Researches and evaluates latest IDEs, releases, pros, cons, and performance.
 */
export const ideTrackerTool = {
  name: 'ideTracker',
  description: 'Searches the web and official release feeds for latest IDE versions, features, pros, cons, and RAM benchmarks.',
  parameters: {
    ideId: {
      type: 'string',
      description: 'Optional ID of specific IDE to inspect (e.g. vscode, cursor, jetbrains, neovim, zed)',
      required: false,
    },
  },
  async execute({ ideId }: { ideId?: string } = {}) {
    const allIdes = await trackLatestIdes();
    if (ideId) {
      const match = allIdes.find((i) => i.id === ideId);
      if (!match) {
        throw new Error(`Tracked IDE with id '${ideId}' not found.`);
      }
      return { ide: match };
    }
    return { ides: allIdes, count: allIdes.length };
  },
};

export default ideTrackerTool;
