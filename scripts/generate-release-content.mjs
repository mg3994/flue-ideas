import fs from 'node:fs';
import path from 'node:path';
import { ALL_EPISODES } from '../src/catalog/index.mjs';
import { generateYouTubeScript } from '../src/generators/youtube-script.mjs';
import { generateBloggerPostContent } from '../src/generators/blogger-amp.mjs';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const RELEASES_DIR = path.resolve(DIST_DIR, 'releases');

// Ensure output directories exist
fs.mkdirSync(RELEASES_DIR, { recursive: true });

console.log(`🚀 Starting IDE Guide content generation for ${ALL_EPISODES.length} episodes...`);

let generatedFilesCount = 0;

for (const episode of ALL_EPISODES) {
  const episodeFolder = path.join(RELEASES_DIR, episode.id);
  fs.mkdirSync(episodeFolder, { recursive: true });

  // 1. YouTube Video Script
  const youtubeScript = generateYouTubeScript(episode);
  const ytPathFolder = path.join(episodeFolder, `${episode.id}-youtube-script.md`);
  const ytPathFlat = path.join(RELEASES_DIR, `${episode.id}-youtube-script.md`);
  fs.writeFileSync(ytPathFolder, youtubeScript, 'utf-8');
  fs.writeFileSync(ytPathFlat, youtubeScript, 'utf-8');
  generatedFilesCount += 2;

  // 2. Blogger Post Content (Content-only for Blogger HTML Editor with TOC)
  const bloggerContent = generateBloggerPostContent(episode);
  const bloggerPathFolder = path.join(episodeFolder, `${episode.id}-blogger-post.html`);
  const bloggerPathFlat = path.join(RELEASES_DIR, `${episode.id}-blogger-post.html`);
  fs.writeFileSync(bloggerPathFolder, bloggerContent, 'utf-8');
  fs.writeFileSync(bloggerPathFlat, bloggerContent, 'utf-8');
  generatedFilesCount += 2;

  console.log(`✅ [${episode.id}] Generated YouTube script & Blogger post HTML successfully.`);
}

console.log(`\n🎉 Successfully generated ${generatedFilesCount} release assets in ${RELEASES_DIR}`);
