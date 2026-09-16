import { ALL_EPISODES, getEpisodeById } from '../catalog/index.mjs';
import { generateBloggerPostContent } from '../generators/blogger-amp.mjs';

/**
 * Flue Tool: bloggerPostTool
 * Compiles a content-only HTML post for Blogger editor with Table of Contents.
 */
export const bloggerPostTool = {
  name: 'generateBloggerPost',
  description: 'Generates pure content-only HTML with Table of Contents (TOC) for direct editing in Blogger HTML view on ideguide.blogspot.com.',
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

    const html = generateBloggerPostContent(episode);
    return {
      episodeId,
      title: episode.title,
      htmlContent: html,
      byteLength: Buffer.byteLength(html, 'utf-8'),
    };
  },
};

export default bloggerPostTool;
