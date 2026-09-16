/**
 * Global Configuration for IDE Guide Content Engine
 */

export const CONFIG = {
  channel: {
    name: 'IDE Guide',
    handle: '@IDEguide',
    url: 'https://www.youtube.com/@IDEguide',
    tagline: 'The ultimate YouTube channel for developers who want to master modern IDEs, AI-powered coding tools, and developer productivity workflows.',
    fullDescription: `Welcome to IDE Guide — the ultimate YouTube channel for developers who want to master modern IDEs, AI-powered coding tools, and developer productivity workflows.

We cover everything from VS Code, JetBrains IDEs, Android Studio, Antigravity, Cursor AI, Replit, and cloud IDEs to the latest agentic AI development tools like Claude Code, Gemini Code Assist, GitHub Copilot, and more.

On this channel, you’ll find:
- IDE tutorials & hidden features
- AI coding assistant workflows
- Extensions & plugin recommendations
- Productivity and debugging tips
- Development environment setup guides
- Comparisons between modern IDEs
- Automation & agentic coding workflows
- Flutter, Web, Backend & Full-Stack dev tooling

Whether you’re a beginner or an experienced developer, IDE Guide helps you code smarter, faster, and more efficiently with the best tools in modern software development.`.trim(),
    pillars: [
      'IDE tutorials & hidden features',
      'AI coding assistant workflows',
      'Extensions & plugin recommendations',
      'Productivity and debugging tips',
      'Development environment setup guides',
      'Comparisons between modern IDEs',
      'Automation & agentic coding workflows',
      'Flutter, Web, Backend & Full-Stack dev tooling',
    ],
  },
  blog: {
    name: 'IDE Guide',
    url: 'https://ideguide.blogspot.com/',
    canonicalBase: 'https://ideguide.blogspot.com/',
    themeColor: '#2563eb',
    author: 'IDE Guide Team',
  },
  legal: {
    shortDisclaimer: 'Not affiliated with any IDE vendor. Guides are educational, based on web research and testing.',
    fullDisclaimer: 'Disclaimer: We are not affiliated with, sponsored by, or endorsed by any of the IDE developers, companies, or organizations mentioned. The guides, reviews, and tutorials provided are based solely on publicly available documentation, web resources, community feedback, and independent testing. All trademarks and registered trademarks are the property of their respective owners.',
    bloggerDisclaimerHtml: `
<aside class="disclaimer-banner" role="note" aria-label="Editorial Disclaimer">
  <div class="disclaimer-header">
    <span class="disclaimer-icon">⚠️</span>
    <strong>Transparency & Editorial Disclaimer</strong>
  </div>
  <p class="disclaimer-body">
    <strong>IDE Guide</strong> (<a href="https://ideguide.blogspot.com/" target="_blank" rel="noopener">ideguide.blogspot.com</a>) and our companion <a href="https://www.youtube.com/@IDEguide" target="_blank" rel="noopener">YouTube channel (@IDEguide)</a> are independent educational platforms. We are <strong>not affiliated, endorsed, or sponsored</strong> by Microsoft, JetBrains, Google, Anysphere, Anthropic, Replit, or any other IDE creator. All evaluations are derived from independent testing, developer community feedback, and public documentation. All trademarks belong to their respective holders.
  </p>
</aside>`.trim(),
  },
  trackedIdes: [
    {
      id: 'vscode',
      name: 'Visual Studio Code',
      vendor: 'Microsoft',
      category: 'Extensible Desktop Editor',
      githubRepo: 'microsoft/vscode',
      officialSite: 'https://code.visualstudio.com',
      feedUrl: 'https://code.visualstudio.com/updates',
    },
    {
      id: 'cursor',
      name: 'Cursor AI',
      vendor: 'Anysphere',
      category: 'AI-Native Forked Editor',
      officialSite: 'https://cursor.com',
      feedUrl: 'https://cursor.com/changelog',
    },
    {
      id: 'jetbrains',
      name: 'JetBrains Platform (IntelliJ / WebStorm / PyCharm)',
      vendor: 'JetBrains',
      category: 'Enterprise IDE Ecosystem',
      officialSite: 'https://www.jetbrains.com',
      feedUrl: 'https://blog.jetbrains.com',
    },
    {
      id: 'android-studio',
      name: 'Android Studio (Ladybug / Meerkat)',
      vendor: 'Google / JetBrains',
      category: 'Mobile & Flutter IDE',
      officialSite: 'https://developer.android.com/studio',
      feedUrl: 'https://developer.android.com/studio/releases',
    },
    {
      id: 'antigravity',
      name: 'Antigravity & Agentic IDEs',
      vendor: 'Advanced AI Teams',
      category: 'Autonomous Agentic IDE',
      officialSite: 'https://gemini.google.com',
      feedUrl: 'https://deepmind.google/technologies/gemini/',
    },
    {
      id: 'replit',
      name: 'Replit & Cloud Environments',
      vendor: 'Replit Inc.',
      category: 'Cloud IDE & Agent Deployments',
      officialSite: 'https://replit.com',
      feedUrl: 'https://blog.replit.com',
    },
    {
      id: 'zed',
      name: 'Zed Editor',
      vendor: 'Zed Industries',
      category: 'GPU-Accelerated Rust Editor',
      githubRepo: 'zed-industries/zed',
      officialSite: 'https://zed.dev',
      feedUrl: 'https://zed.dev/releases',
    },
    {
      id: 'neovim',
      name: 'Neovim (v0.10+)',
      vendor: 'Open Source Community',
      category: 'Terminal Modal IDE',
      githubRepo: 'neovim/neovim',
      officialSite: 'https://neovim.io',
      feedUrl: 'https://github.com/neovim/neovim/releases',
    },
    {
      id: 'claude-code',
      name: 'Claude Code & Anthropic Agentic CLI',
      vendor: 'Anthropic',
      category: 'Terminal Agentic Coding Assistant',
      officialSite: 'https://anthropic.com',
      feedUrl: 'https://www.anthropic.com/news',
    },
    {
      id: 'gemini-code-assist',
      name: 'Gemini Code Assist',
      vendor: 'Google Cloud',
      category: 'Enterprise AI Assistant',
      officialSite: 'https://cloud.google.com/products/gemini/code-assist',
      feedUrl: 'https://cloud.google.com/release-notes',
    },
    {
      id: 'github-copilot',
      name: 'GitHub Copilot & Copilot Workspace',
      vendor: 'GitHub / Microsoft',
      category: 'AI Pair Programmer',
      officialSite: 'https://github.com/features/copilot',
      feedUrl: 'https://github.blog/changelog',
    },
  ],
  cronSchedule: {
    cronExpression: '30 21 * * *',
    description: '3:00 AM IST (Indian Standard Time) every morning (21:30 UTC previous day)',
    timezone: 'Asia/Kolkata (IST)',
  },
  seo: {
    defaultKeywords: [
      'IDE Guide',
      'Code Editor',
      'Developer Tools',
      'Programming IDE',
      'Software Engineering',
      'VS Code',
      'Cursor AI',
      'JetBrains',
      'Android Studio',
      'Antigravity',
      'Replit',
      'Zed Editor',
      'Neovim',
      'Claude Code',
      'Gemini Code Assist',
      'GitHub Copilot',
      'Flutter dev tooling',
    ],
  },
};

export default CONFIG;
