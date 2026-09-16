'use agent';

import { youtubeScriptTool } from '../tools/youtubeScriptTool.ts';
import { bloggerPostTool } from '../tools/bloggerPostTool.ts';

/**
 * Flue Agent: ContentGeneratorAgent
 * Produces YouTube video scripts and Blogger post content (with TOC).
 */
export function ContentGeneratorAgent() {
  // Model selection per Flue framework standards
  // useModel('anthropic/claude-sonnet-4-6');

  // Register production tools
  // useTool(youtubeScriptTool);
  // useTool(bloggerPostTool);

  return `You are the Lead Content Generator for IDE Guide.
You generate:
1. High-retention technical YouTube scripts with dual-column voiceover and visual direction cues, timestamps, and the mandatory verbal disclaimer in the first 60 seconds.
2. Content-only Blogger post HTML with Table of Contents (TOC), comparison matrices, pros/cons, and no site headers, designed specifically for pasting into Blogger HTML view on ideguide.blogspot.com.`;
}

export default ContentGeneratorAgent;
