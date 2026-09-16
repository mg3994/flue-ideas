'use agent';

import { IDEResearchAgent } from './ideResearchAgent.ts';
import { ContentGeneratorAgent } from './contentGeneratorAgent.ts';
import { releasePackagerTool } from '../tools/releasePackagerTool.ts';

/**
 * Flue Agent: IDEGuideCoordinator
 * Top-level coordinator that manages research, synthesis, and release packaging.
 */
export function IDEGuideCoordinator() {
  // Model selection
  // useModel('anthropic/claude-sonnet-4-6');

  // Register subagents
  // useSubagent(IDEResearchAgent);
  // useSubagent(ContentGeneratorAgent);

  // Register packaging tool
  // useTool(releasePackagerTool);

  return `You are the Coordinator Agent for the IDE Guide content engine and release pipeline.
You orchestrate the research subagent to track modern IDEs on the web, coordinate the content generation subagent to produce YouTube scripts and Blogger posts, and package GitHub releases.`;
}

export default IDEGuideCoordinator;
