import fs from 'node:fs';
import path from 'node:path';
import { ALL_EPISODES } from '../src/catalog/index.mjs';
import { generateYouTubeScript } from '../src/generators/youtube-script.mjs';
import { generateBloggerAmpHtml, generateBloggerPostSnippet } from '../src/generators/blogger-amp.mjs';
import { CONFIG } from '../src/config.mjs';

console.log('🧪 Running IDE Guide Content Validation Tests...\n');

let totalErrors = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ ${message}`);
    totalErrors++;
  } else {
    console.log(`✅ ${message}`);
  }
}

// 1. Validate Configuration
assert(
  CONFIG.blog.url === 'https://ideguide.blogspot.com/',
  `Blog URL correctly configured as https://ideguide.blogspot.com/ (found ${CONFIG.blog.url})`
);
assert(
  CONFIG.channel.url === 'https://www.youtube.com/@IDEguide',
  `YouTube Channel URL correctly configured as https://www.youtube.com/@IDEguide (found ${CONFIG.channel.url})`
);
assert(
  CONFIG.legal.fullDisclaimer.includes('not affiliated'),
  'Mandatory non-affiliation disclaimer configured'
);
assert(
  CONFIG.channel.fullDescription.includes('Welcome to IDE Guide') &&
  CONFIG.channel.fullDescription.includes('Android Studio') &&
  CONFIG.channel.fullDescription.includes('Claude Code'),
  'Channel official description correctly configured with all pillars and modern tools'
);
assert(
  CONFIG.cronSchedule.cronExpression === '30 21 * * *',
  'Cron schedule correctly configured to 30 21 * * * (3:00 AM IST)'
);
assert(
  Array.isArray(CONFIG.trackedIdes) && CONFIG.trackedIdes.length >= 10,
  `Tracked IDEs registry properly populated with ${CONFIG.trackedIdes?.length} environments`
);

// 2. Validate Catalog Entries
assert(ALL_EPISODES.length >= 5, `Found ${ALL_EPISODES.length} episodes in catalog (minimum 5 required)`);

for (const ep of ALL_EPISODES) {
  console.log(`\n--- Validating Episode: ${ep.id} ---`);

  assert(Boolean(ep.title && ep.title.length > 5), `[${ep.id}] Has valid title: "${ep.title}"`);
  assert(Boolean(ep.targetDuration), `[${ep.id}] Has target duration: ${ep.targetDuration}`);
  assert(Array.isArray(ep.ides) && ep.ides.length > 0, `[${ep.id}] Has IDE details list`);
  assert(Array.isArray(ep.featureComparisons) && ep.featureComparisons.length > 0, `[${ep.id}] Has comparison matrix`);
  assert(Array.isArray(ep.talkingPoints) && ep.talkingPoints.length > 0, `[${ep.id}] Has talking points & visual cues`);
  assert(Array.isArray(ep.youtubeTags) && ep.youtubeTags.length > 0, `[${ep.id}] Has YouTube search tags`);

  // Test YouTube Script Generator
  const ytScript = generateYouTubeScript(ep);
  assert(
    ytScript.includes('Disclaimer: We are not affiliated with'),
    `[${ep.id}] YouTube script includes mandatory non-affiliation disclaimer`
  );
  assert(
    ytScript.includes('https://www.youtube.com/@IDEguide'),
    `[${ep.id}] YouTube script references channel URL`
  );
  assert(
    ytScript.includes('https://ideguide.blogspot.com/'),
    `[${ep.id}] YouTube script references blog companion URL`
  );
  assert(
    ytScript.includes('Dual-Column Production Script'),
    `[${ep.id}] YouTube script has dual-column production guide`
  );
  assert(
    ytScript.includes('CHAPTER TIMESTAMPS:'),
    `[${ep.id}] YouTube script has chapter timestamps for YouTube Studio`
  );

  // Test Blogger Content Generator (Content-only for Blogger HTML view with TOC)
  const bloggerHtml = generateBloggerAmpHtml(ep);
  assert(
    bloggerHtml.includes('disclaimer-banner') && bloggerHtml.includes('Transparency & Editorial Disclaimer'),
    `[${ep.id}] Blogger post includes mandatory disclaimer banner`
  );
  assert(
    bloggerHtml.includes('post-toc') && bloggerHtml.includes('Table of Contents'),
    `[${ep.id}] Blogger post includes Table of Contents (TOC)`
  );
  assert(
    bloggerHtml.includes('comparison-table'),
    `[${ep.id}] Blogger post includes comparison table`
  );
  assert(
    !bloggerHtml.includes('<header class="site-header">') && !bloggerHtml.includes('<!doctype html>'),
    `[${ep.id}] Blogger post is pure content-only (no site header or outer html doctype)`
  );
  assert(
    bloggerHtml.includes('https://www.youtube.com/@IDEguide'),
    `[${ep.id}] Blogger post includes YouTube subscription CTA`
  );
}

console.log('\n======================================');
if (totalErrors > 0) {
  console.error(`❌ Content validation failed with ${totalErrors} errors.`);
  process.exit(1);
} else {
  console.log('🎉 All content validation tests passed successfully!');
}
