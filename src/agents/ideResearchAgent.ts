'use agent';

import { ideTrackerTool } from '../tools/ideTrackerTool.ts';

/**
 * Flue Agent: IDEResearchAgent
 * Researches latest IDE releases, architectural shifts, features, pros & cons.
 * Configured with 3:00 AM IST daily cron schedule.
 */
export function IDEResearchAgent() {
  // Model selection per Flue framework standards
  // useModel('anthropic/claude-sonnet-4-6');

  // Register research tool
  // useTool(ideTrackerTool);

  // Background 3:00 AM IST cron schedule (21:30 UTC daily)
  /*
  useSchedule({
    cron: '30 21 * * *',
    async handler(trigger) {
      console.log('⏰ IDEResearchAgent: Executing 3:00 AM IST daily research cycle...');
      const results = await ideTrackerTool.execute({});
      return results;
    },
  });
  */

  return `You are the lead Technical Researcher for the IDE Guide platform (YouTube: @IDEguide | Blog: ideguide.blogspot.com).
Your mission is to perform deep-dive web intelligence on modern IDEs, developer tools, and AI coding assistants.
Always adhere to the mandatory non-affiliation disclaimer and evaluate tools objectively based on documentation, RAM benchmarks, and community consensus.`;
}

export default IDEResearchAgent;
