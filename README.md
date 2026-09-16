# ⚡ IDE Guide: Content Release Pipeline & Agent Skills

Automated release pipeline, daily web research engine, and content generation suite for the **IDE Guide** platform.

- **YouTube Channel**: [IDE Guide (@IDEguide)](https://www.youtube.com/@IDEguide)
- **Blogger Publication (AMP)**: [ideguide.blogspot.com](https://ideguide.blogspot.com/)

---

## 📺 Channel Mission & Scope

> Welcome to **IDE Guide** — the ultimate YouTube channel for developers who want to master modern IDEs, AI-powered coding tools, and developer productivity workflows.
>
> We cover everything from **VS Code, JetBrains IDEs, Android Studio, Antigravity, Cursor AI, Replit, and cloud IDEs** to the latest agentic AI development tools like **Claude Code, Gemini Code Assist, GitHub Copilot**, and more.
>
> **On this channel, you’ll find**:
> - IDE tutorials & hidden features
> - AI coding assistant workflows
> - Extensions & plugin recommendations
> - Productivity and debugging tips
> - Development environment setup guides
> - Comparisons between modern IDEs
> - Automation & agentic coding workflows
> - Flutter, Web, Backend & Full-Stack dev tooling
>
> Whether you’re a beginner or an experienced developer, IDE Guide helps you code smarter, faster, and more efficiently with the best tools in modern software development.

---

## ⚠️ Mandatory Non-Affiliation Disclaimer

> **Disclaimer**: We are not affiliated with, sponsored by, or endorsed by any of the IDE developers, vendors, or companies mentioned (including Microsoft, JetBrains, Google, Anysphere, Anthropic, Replit, the Neovim/Vim teams, or Zed Industries). The guides, reviews, and tutorials provided across our YouTube channel and Blogger publication are based solely on publicly available documentation, web research, community feedback, and independent testing. All trademarks and registered trademarks are the property of their respective owners.

---

## ⏰ Daily 3:00 AM IST Automated Web Research Cron

Configured in [`.github/workflows/daily-ide-research.yml`](.github/workflows/daily-ide-research.yml):

- **Schedule**: `30 21 * * *` (At 21:30 UTC every day = **03:00 AM IST** Indian Standard Time, UTC+5:30).
- **What it does automatically**:
  1. **Web Scans & Research**: Crawls and queries GitHub Releases and web endpoints for 10+ tracked environments (VS Code, Cursor, JetBrains, Android Studio, Antigravity, Replit, Zed, Neovim, Claude Code, Gemini Code Assist, GitHub Copilot).
  2. **Evaluates Features, Pros & Cons**: Compiles performance metrics (idle RAM, startup times), top features, strengths, limitations, and community feedback.
  3. **Synthesizes Content**: Selects trending IDE focus and compiles a draft **YouTube Video Script** and **Blogger AMP HTML Article** in `dist/releases/daily-trending/`.
  4. **Publishes Daily Intelligence**: Automatically generates `dist/DAILY_IDE_REPORT.md` and opens an automated **GitHub Issue** in the repository with the complete report and ready-to-copy content!

You can also run it locally or manually at any time:
```bash
npm run research
```

---

## 📦 What GitHub Releases Produce

Whenever a version tag (`v*.*.*`) is pushed or manually dispatched via [`.github/workflows/release.yml`](.github/workflows/release.yml):

1. **YouTube Video Scripts** (`*-youtube-script.md`):
   - Structured dual-column production guides with synchronized on-screen visual directions and voiceover dialogue.
   - Prominent spoken non-affiliation disclaimer within the first 60 seconds.
   - Chapters and timestamps formatted for YouTube Studio.
   - Optimized video title options, description box, and search tags.
2. **Blogger AMP HTML Posts** (`*-blogger-amp.html`):
   - 100% Accelerated Mobile Pages (AMP) compliant HTML documents (`<html ⚡>`).
   - Validated schema.org `TechArticle` structured data.
   - Styled comparison matrix tables, feature badges, and responsive pros/cons cards.
   - Dedicated editorial disclaimer alert box.
   - Embedded `<amp-youtube>` video player.
3. **Blogger Post Snippets** (`*-blogger-snippet.html`):
   - Ready-to-paste HTML snippet for Blogger's WYSIWYG/HTML post editor.
4. **Zipped Release Archive** (`ide-guide-content-release.zip`):
   - Complete package of all episode assets for offline distribution or batch publishing.

---

## 🚀 Quick Start

### 1. Run Automated Test Suite
Validates all 18 agent skills and content assets for AMP compliance and mandatory legal notices:
```bash
npm test
```

### 2. Run Daily Web Research & Intelligence
Scrapes and analyzes features, pros, and cons across all tracked IDEs:
```bash
npm run research
```

### 3. Generate Release Assets
Generates YouTube scripts and AMP HTML files into `dist/releases/`:
```bash
npm run generate
```

### 4. Package Release
Compresses assets into a zip bundle and generates GitHub release notes (`dist/RELEASE_NOTES.md`):
```bash
npm run package
```

### 5. Full Build
Executes both generation and packaging:
```bash
npm run build
```

---

## 📚 Agent Skills Suite

This repository includes a suite of 18 Agent Skills adhering to the Agent Skills specification:

| Skill | Description |
|---|---|
| [`ide-guide-youtube-scripting`](skills/ide-guide-youtube-scripting/SKILL.md) | Standard for high-retention technical YouTube scripts with disclaimers |
| [`ide-guide-blogger-amp`](skills/ide-guide-blogger-amp/SKILL.md) | Standards for Accelerated Mobile Pages (AMP) HTML for Blogger |
| [`ide-guide-release-pipeline`](skills/ide-guide-release-pipeline/SKILL.md) | GitHub Actions release management and asset packaging |
| `flue-*` (15 Framework Skills) | Complete architectural, runtime, and agent workflow skills |

---

## ⚖️ License

Distributed under the Apache 2.0 License.
