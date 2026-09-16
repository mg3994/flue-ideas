import { CONFIG } from '../config.mjs';

/**
 * Generates a YouTube Video Script in Markdown format for the IDE Guide channel.
 *
 * @param {object} episode
 * @returns {string} Markdown content
 */
export function generateYouTubeScript(episode) {
  const { channel, blog, legal } = CONFIG;

  const timestampsBlock = episode.talkingPoints
    .map((tp) => {
      const startTime = tp.timestamp.split('-')[0].trim().replace(/^0/, '');
      return `${startTime} - ${tp.topic}`;
    })
    .join('\n');

  const talkingPointsTable = episode.talkingPoints
    .map((tp) => {
      return `| **${tp.timestamp}** | **${tp.topic}**<br>_${tp.visualCue}_ | "${tp.dialogue}" |`;
    })
    .join('\n');

  const idesSummary = episode.ides
    .map((ide) => `- **${ide.name}** (${ide.vendor}): ${ide.architecture}. Pricing: ${ide.pricing}`)
    .join('\n');

  return `# Episode ${episode.episodeNumber}: ${episode.title}

> **Channel**: [${channel.name}](${channel.url})  
> **Companion Blog**: [${blog.name}](${blog.url})  
> **Target Video Duration**: ${episode.targetDuration}  
> **Content Target**: YouTube Video Script & Production Guide  

---

## ⚠️ Mandatory Non-Affiliation Disclaimer
> **LEGAL NOTICE**: ${legal.fullDisclaimer}

---

## 🎯 Episode Overview & Covered Tools
${episode.summary}

### Featured Tools:
${idesSummary}

---

## 🎬 Dual-Column Production Script

| Timestamp | Visual Cue / Screen Direction (What Viewers See) | Spoken Audio / Voiceover Dialogue (What Host Says) |
|---|---|---|
${talkingPointsTable}

---

## 📝 YouTube Publishing Metadata Package

### Video Title Options
1. **Primary**: ${episode.title} | IDE Guide
2. **Alternative (High CTR)**: Which IDE Wins? ${episode.title}
3. **Question-Focused**: Should You Switch? ${episode.title}

---

### Video Description (Copy & Paste to YouTube Studio)

\`\`\`markdown
${episode.summary}

⚡ Read our full AMP-optimized article with in-depth comparison tables and benchmarks on our blog:
👉 ${blog.url}

🔔 Subscribe to IDE Guide for honest, independent developer environment reviews:
👉 ${channel.url}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ CHAPTER TIMESTAMPS:
${timestampsBlock}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ MANDATORY DISCLAIMER:
${legal.fullDisclaimer}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏷️ TAGS:
${episode.youtubeTags.join(', ')}

#IDEGuide #SoftwareEngineering #DeveloperTools #Programming #CodeEditor #IDE
\`\`\`

---

### 💬 Recommended Pinned Comment

\`\`\`text
Which IDE is your current daily driver, and what feature would convince you to switch? Let us know in the comments below! 👇

Read the complete AMP guide and comparison matrix at: ${blog.url}
Don't forget to subscribe to IDE Guide for more technical tool breakdowns! 🔔
\`\`\`

---

### 🏷️ YouTube Search Keywords / Tags
\`\`\`text
${episode.youtubeTags.join(', ')}
\`\`\`
`.trim();
}

export default generateYouTubeScript;
