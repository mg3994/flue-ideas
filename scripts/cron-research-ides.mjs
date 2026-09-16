import fs from 'node:fs';
import path from 'node:path';
import { trackLatestIdes } from '../src/research/ide-tracker.mjs';
import { CONFIG } from '../src/config.mjs';
import { generateYouTubeScript } from '../src/generators/youtube-script.mjs';
import { generateBloggerAmpHtml, generateBloggerPostSnippet } from '../src/generators/blogger-amp.mjs';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const REPORT_PATH = path.join(DIST_DIR, 'DAILY_IDE_REPORT.md');
const DAILY_DIR = path.join(DIST_DIR, 'releases', 'daily-trending');

fs.mkdirSync(DAILY_DIR, { recursive: true });

console.log('⏰ Executing IDE Guide Daily 3:00 AM IST Research Cron...');

const now = new Date();
const istTime = new Date(now.getTime() + 5.5 * 60 * 60 * 1000).toUTCString().replace('GMT', 'IST');

console.log(`🌐 Current Time: UTC: ${now.toISOString()} | IST: ${istTime}`);

const idesData = await trackLatestIdes();

// 1. Generate Markdown Report
let report = `# 📅 IDE Guide: Daily Web Intelligence Report
**Execution Time**: ${istTime} (Scheduled 3:00 AM IST Daily Cron)  
**Channel**: [${CONFIG.channel.name}](${CONFIG.channel.url})  
**Blog**: [${CONFIG.blog.name}](${CONFIG.blog.url})  

---

## ⚠️ Mandatory Non-Affiliation Disclaimer
> **Transparency Notice**: ${CONFIG.legal.fullDisclaimer}

---

## 🎯 Executive Overview of Tracked Environments

| IDE / AI Coding Tool | Vendor / Team | Category | Latest Release | Idle RAM | Startup Speed |
|---|---|---|---|---|---|
`;

for (const ide of idesData) {
  report += `| **${ide.name}** | ${ide.vendor} | ${ide.category} | \`${ide.latestRelease.version}\` | ${ide.performanceMetrics.idleRam} | ${ide.performanceMetrics.startup} |\n`;
}

report += `\n---\n\n## 🔍 Deep-Dive Feature, Pros & Cons Analysis\n\n`;

for (const ide of idesData) {
  const pros = ide.pros.map((p) => `- ✅ ${p}`).join('\n');
  const cons = ide.cons.map((c) => `- ⚠️ ${c}`).join('\n');
  const features = ide.topFeatures.map((f) => `- 🔹 ${f}`).join('\n');

  report += `### 💻 ${ide.name}
- **Developer/Vendor**: ${ide.vendor}
- **Category**: ${ide.category}
- **Official Site**: [${ide.officialSite}](${ide.officialSite})
- **Recommended For**: ${ide.recommendedFor}
- **Community Pulse**: _"${ide.recentCommunityBuzz}"_

#### Key Features & Workflows:
${features}

#### Strengths (Pros):
${pros}

#### Limitations (Cons):
${cons}

\n`;
}

// 2. Pick Daily Trending Topic and synthesize YouTube Script & Blogger AMP HTML
const trendingIde = idesData[Math.floor(Math.random() * idesData.length)] || idesData[0];
console.log(`\n🌟 Selected Daily Trending Feature Focus: ${trendingIde.name}`);

const candidateEpisode = {
  id: `daily-${trendingIde.id}`,
  episodeNumber: 99,
  title: `${trendingIde.name}: Latest Features, Pros & Cons Deep Dive`,
  targetDuration: '10:30',
  slug: `${trendingIde.id}-features-pros-and-cons-guide`,
  heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  youtubeVideoId: 'DAILY_TRENDING_DEMO',
  summary: `In this daily intelligence breakdown from IDE Guide, we analyze the latest version of ${trendingIde.name}. We explore top features, community pros & cons, performance trade-offs, and who should use it in 2026.`,
  hook: `Is ${trendingIde.name} the right coding environment for your workflow today? With rapid updates happening across the development ecosystem, let us break down what makes ${trendingIde.name} stand out and where it falls short.`,
  ides: [
    {
      name: trendingIde.name,
      vendor: trendingIde.vendor,
      license: 'Active Distribution',
      architecture: trendingIde.category,
      aiEngine: trendingIde.topFeatures[0],
      memoryIdle: trendingIde.performanceMetrics.idleRam,
      startupTime: trendingIde.performanceMetrics.startup,
      pricing: 'See official site',
    },
  ],
  featureComparisons: [
    {
      category: 'Key Feature Capabilities',
      vsCodeNotes: trendingIde.topFeatures.slice(0, 2).join('; '),
      cursorNotes: trendingIde.topFeatures.slice(2).join('; ') || trendingIde.topFeatures[0],
      verdict: `Strong execution for ${trendingIde.recommendedFor}`,
    },
    {
      category: 'Resource Efficiency & Latency',
      vsCodeNotes: `Idle RAM: ${trendingIde.performanceMetrics.idleRam}`,
      cursorNotes: `Startup: ${trendingIde.performanceMetrics.startup}`,
      verdict: trendingIde.performanceMetrics.indexSpeed,
    },
  ],
  talkingPoints: [
    {
      timestamp: '00:00 - 00:40',
      topic: 'Introduction & Hook',
      visualCue: `Screen recording showing ${trendingIde.name} launch and main developer workspace.`,
      dialogue: `Welcome to IDE Guide! Today, our daily intelligence scan focuses on ${trendingIde.name}. Whether you are considering adopting it or optimizing your daily configuration, here is what you need to know.`,
    },
    {
      timestamp: '00:40 - 01:00',
      topic: 'Mandatory Legal Disclaimer',
      visualCue: 'Official non-affiliation disclaimer banner shown clearly on screen.',
      dialogue: `First, our required disclaimer: IDE Guide is an independent educational platform. We are not affiliated with, sponsored by, or endorsed by ${trendingIde.vendor} or any software vendor mentioned. All guides are based on public web documentation and independent testing.`,
    },
    {
      timestamp: '01:00 - 04:00',
      topic: 'Top Features & Architecture',
      visualCue: `Walkthrough of top features: ${trendingIde.topFeatures.join(', ')}.`,
      dialogue: `Let us examine the architecture. ${trendingIde.name} brings key innovations including ${trendingIde.topFeatures[0]}, giving developers a distinct workflow advantage.`,
    },
    {
      timestamp: '04:00 - 07:30',
      topic: 'Pros & Cons Breakdown',
      visualCue: 'Side-by-side graphic of Strengths vs Limitations.',
      dialogue: `On the positive side, ${trendingIde.pros[0]}. However, you should also be mindful that ${trendingIde.cons[0]}.`,
    },
    {
      timestamp: '07:30 - 10:30',
      topic: 'Verdict & Recommendations',
      visualCue: 'Summary checklist on screen. Outro cards for YouTube channel and Blogger blog.',
      dialogue: `In conclusion, ${trendingIde.name} is ideally suited for ${trendingIde.recommendedFor}. For the full comparison matrix, visit ideguide.blogspot.com, and make sure to subscribe to IDE Guide for your daily developer tooling insights!`,
    },
  ],
  prosCons: {
    [trendingIde.id]: {
      pros: trendingIde.pros,
      cons: trendingIde.cons,
    },
  },
  youtubeTags: [
    trendingIde.name,
    'IDE Guide',
    'Developer Tools',
    'Programming',
    'Code Editor',
    'Software Development',
    'Tech Review',
  ],
};

// Write YouTube Script
const ytScript = generateYouTubeScript(candidateEpisode);
fs.writeFileSync(path.join(DAILY_DIR, 'daily-trending-youtube-script.md'), ytScript, 'utf-8');

// Write Blogger Post Content (Content-only for Blogger HTML Editor with TOC)
const bloggerHtml = generateBloggerPostContent(candidateEpisode);
fs.writeFileSync(path.join(DAILY_DIR, 'daily-trending-blogger-post.html'), bloggerHtml, 'utf-8');

report += `\n---\n\n## 🎬 Daily Synthesized Content Package: ${trendingIde.name}
The daily cron synthesized ready-to-publish assets in \`dist/releases/daily-trending/\`:
- 📄 **YouTube Script**: \`daily-trending-youtube-script.md\`
- ⚡ **Blogger Post HTML (Content Only + TOC)**: \`daily-trending-blogger-post.html\`
`;

fs.writeFileSync(REPORT_PATH, report, 'utf-8');
console.log(`✅ Daily IDE intelligence report generated at: ${REPORT_PATH}`);
console.log(`🎉 Daily synthesized assets saved to: ${DAILY_DIR}`);
