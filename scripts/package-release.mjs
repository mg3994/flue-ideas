import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { ALL_EPISODES } from '../src/catalog/index.mjs';
import { CONFIG } from '../src/config.mjs';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const RELEASES_DIR = path.resolve(DIST_DIR, 'releases');
const ZIP_PATH = path.resolve(DIST_DIR, 'ide-guide-content-release.zip');
const NOTES_PATH = path.resolve(DIST_DIR, 'RELEASE_NOTES.md');

if (!fs.existsSync(RELEASES_DIR)) {
  console.error(`❌ Releases directory does not exist at ${RELEASES_DIR}. Run generate script first.`);
  process.exit(1);
}

// 1. Create Zip Archive cross-platform
console.log('📦 Packaging release assets into zip archive...');

try {
  if (process.platform === 'win32') {
    // Windows PowerShell Compress-Archive
    execSync(`powershell -Command "Compress-Archive -Path '${RELEASES_DIR}\\*' -DestinationPath '${ZIP_PATH}' -Force"`, {
      stdio: 'inherit',
    });
  } else {
    // Linux/macOS zip command
    execSync(`zip -r -q "${ZIP_PATH}" .`, {
      cwd: RELEASES_DIR,
      stdio: 'inherit',
    });
  }
  console.log(`✅ Release archive generated at: ${ZIP_PATH}`);
} catch (err) {
  console.warn(`⚠️ Native zip packaging encountered an issue: ${err.message}. Creating tar fallback.`);
  try {
    execSync(`tar -czf "${path.resolve(DIST_DIR, 'ide-guide-content-release.tar.gz')}" -C "${RELEASES_DIR}" .`, {
      stdio: 'inherit',
    });
    console.log('✅ Fallback tar.gz archive created.');
  } catch (tarErr) {
    console.error('❌ Archive creation failed:', tarErr.message);
  }
}

// 2. Generate Release Notes Markdown
console.log('📝 Generating GitHub Release Notes...');

const episodeListMd = ALL_EPISODES.map((ep) => {
  return `### Episode ${ep.episodeNumber}: ${ep.title}
- **Target Duration**: \`${ep.targetDuration}\`
- **Focus IDEs**: ${ep.ides.map((i) => `\`${i.name}\``).join(', ')}
- **Included Assets**:
  - 📄 YouTube Video Script: \`${ep.id}-youtube-script.md\`
  - ⚡ Blogger Post HTML (Content Only + TOC): \`${ep.id}-blogger-post.html\`
`;
}).join('\n');

const releaseNotes = `# 🚀 IDE Guide Content Release

Welcome to the automated content release from the **IDE Guide Content Engine**!

This release contains production-ready **YouTube Video Scripts** and **AMP-compliant Blogger HTML Posts** (content-only with Table of Contents) designed for the [IDE Guide YouTube Channel](${CONFIG.channel.url}) and [ideguide.blogspot.com](${CONFIG.blog.url}).

---

## ⚠️ Mandatory Non-Affiliation Disclaimer
> **Transparency Notice**: ${CONFIG.legal.fullDisclaimer}

---

## 📺 Content Packages in this Release

${episodeListMd}

---

## 📋 Publishing Instructions

### 1. For YouTube (\`@IDEguide\`)
1. Open the relevant \`*-youtube-script.md\` file.
2. Review the **Dual-Column Production Script** with spoken voiceover and visual direction cues.
3. Verify that the **Mandatory Legal Disclaimer** is spoken clearly in the first minute of the video recording.
4. Copy the **YouTube Publishing Metadata Package** (Title, Description, Timestamps, Tags) directly into YouTube Studio.
5. Post the recommended **Pinned Comment** with links to [ideguide.blogspot.com](${CONFIG.blog.url}).

### 2. For Blogger (\`ideguide.blogspot.com\`)
1. Open Blogger, create a new post (or open existing post).
2. Switch editor to **HTML view** (<> icon).
3. Copy the entire contents of \`*-blogger-post.html\` and paste it in.
4. It is strictly **content-only** (no outer site headers or doctype clutter) and features:
   - ⚠️ Mandatory Non-Affiliation Disclaimer
   - 📑 Table of Contents (TOC) with anchor jumps
   - ⚡ AMP-compatible video embeds
   - 📊 Feature comparison matrix & specs
   - ⚖️ Strengths & Limitations (Pros/Cons)
   - 🔔 YouTube subscription CTA button
5. Save or Publish!

---

## 🔗 Official Platforms
- **YouTube Channel**: [${CONFIG.channel.name} (${CONFIG.channel.handle})](${CONFIG.channel.url})
- **Blogger Blog**: [${CONFIG.blog.name}](${CONFIG.blog.url})
`.trim();

fs.writeFileSync(NOTES_PATH, releaseNotes, 'utf-8');
console.log(`✅ Release notes written to: ${NOTES_PATH}`);
