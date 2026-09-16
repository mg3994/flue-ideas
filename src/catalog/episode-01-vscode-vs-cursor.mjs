export const episode01 = {
  id: 'episode-01-vscode-vs-cursor',
  episodeNumber: 1,
  title: 'VS Code vs. Cursor: The Modern AI Editor Showdown',
  targetDuration: '11:20',
  slug: 'vscode-vs-cursor-ai-editor-showdown',
  heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  youtubeVideoId: 'DEMO_VSCODE_CURSOR',
  summary: 'Is Cursor really worth switching from standard VS Code, or can extensions replicate everything? In this episode of IDE Guide, we break down their architectures, AI Composer vs GitHub Copilot, resource usage, and privacy trade-offs.',
  
  hook: 'Over 70% of developers use Visual Studio Code daily. But recently, Cursor—a hard fork of VS Code infused with deep AI integration—has taken the coding world by storm. Today, we put them side by side to see if you should make the switch or stay put.',
  
  ides: [
    {
      name: 'Visual Studio Code',
      vendor: 'Microsoft',
      license: 'MIT (Core) / Proprietary (Binary releases)',
      architecture: 'Electron / Chromium / Node.js with Extension Host isolation',
      aiEngine: 'GitHub Copilot / Copilot Chat / Open-source extension plugins',
      memoryIdle: '~250MB - 450MB',
      startupTime: '1.2s - 2.5s',
      pricing: 'Free & Open Source Core (Copilot $10/mo)',
    },
    {
      name: 'Cursor',
      vendor: 'Anysphere',
      license: 'Proprietary fork of VS Code',
      architecture: 'Forked VS Code with custom native AI indexer and shadow workspace',
      aiEngine: 'Cursor Tab (multi-line next-edit prediction), Composer (multi-file agent)',
      memoryIdle: '~450MB - 800MB',
      startupTime: '1.8s - 3.2s',
      pricing: 'Free tier / Pro $20/mo / Business $40/user/mo',
    },
  ],

  featureComparisons: [
    {
      category: 'Inline Autocomplete & Next-Edit Prediction',
      vsCodeNotes: 'Standard Copilot provides single-line or block completion based on current file context and adjacent open tabs.',
      cursorNotes: 'Cursor Tab predicts where your cursor will jump next, allowing multi-location edits, auto-imports, and symbol renaming across diffs.',
      verdict: 'Cursor wins for sheer predictive velocity; VS Code is catching up with Copilot Next Edit suggestions.',
    },
    {
      category: 'Multi-File Agentic Editing (Composer vs Copilot Edits)',
      vsCodeNotes: 'Copilot Edits allows modifying multiple files, but indexing of very large repos can be selective unless semantic search is explicitly triggered.',
      cursorNotes: 'Composer generates and diffs changes across dozens of files simultaneously using full-codebase vector embeddings.',
      verdict: 'Cursor Composer is currently more seamless, though VS Code Copilot Edits is rapidly closing the gap.',
    },
    {
      category: 'Extension Marketplace & Compatibility',
      vsCodeNotes: 'Full, unrestricted access to the official Microsoft Visual Studio Marketplace.',
      cursorNotes: 'Uses Open VSX / compatible extension proxy. Certain Microsoft-exclusive extensions (like Remote SSH with MS proprietary licenses) require workarounds.',
      verdict: 'VS Code wins easily for enterprise compliance, remote SSH stability, and pure marketplace trust.',
    },
    {
      category: 'Data Privacy & Local Indexing',
      vsCodeNotes: 'Zero indexing sent externally unless Copilot is explicitly enabled with enterprise zero-retention policies.',
      cursorNotes: 'Offers Privacy Mode (no user code stored on servers), but codebase indexing relies on cloud sync unless strictly disabled.',
      verdict: 'VS Code provides tighter enterprise governance, though Cursor has added robust SOC 2 and privacy toggles.',
    },
  ],

  talkingPoints: [
    {
      timestamp: '00:00 - 00:45',
      topic: 'Hook & Introduction',
      visualCue: 'Side-by-side screen capture of VS Code and Cursor sidebars. Highlight the identical icon layout followed by Cursor’s Composer popup.',
      dialogue: 'Welcome to IDE Guide! In this episode, we are tackling the biggest question developers have been asking: Is Cursor truly the future of code editing, or is it just hype built on top of the VS Code we already love? Let us dig into the real technical differences.',
    },
    {
      timestamp: '00:45 - 01:05',
      topic: 'Mandatory Legal Disclaimer',
      visualCue: 'Full-screen graphics card displaying the official non-affiliation disclaimer with icon and transparent notice.',
      dialogue: 'First, our essential disclaimer: IDE Guide is an independent educational channel. We are not affiliated with, sponsored by, or endorsed by Microsoft, Anysphere, or any tool creator mentioned. Our reviews are based solely on publicly available web data, hands-on benchmarks, and community documentation.',
    },
    {
      timestamp: '01:05 - 03:00',
      topic: 'Architectural Heritage: How Cursor is Built',
      visualCue: 'Diagram showing VS Code core fork branching into Cursor, illustrating the Shadow Workspace and Local Vector Indexing engine.',
      dialogue: 'To understand Cursor, you have to understand that it is not just an extension. Anysphere took the open-source core of VS Code and rewired internal components. Because they modified the editor source directly, Cursor can render inline diff previews and jump cursors in ways standard extensions historically could not.',
    },
    {
      timestamp: '03:00 - 06:00',
      topic: 'Cursor Tab vs. GitHub Copilot: The Daily Workflow',
      visualCue: 'Live screen recording demonstrating Cursor Tab multi-line refactor vs VS Code Copilot inline suggestion.',
      dialogue: 'When you write code day to day, Cursor Tab does something remarkable: it predicts your intention. If you change a function signature in one file, Cursor Tab anticipates your edit in the caller file. VS Code Copilot has added Copilot Workspace and multi-file edits, but Cursor still feels noticeably more fluid for rapid iterative changes.',
    },
    {
      timestamp: '06:00 - 08:30',
      topic: 'Marketplace, Extensions & Enterprise Governance',
      visualCue: 'Browser scroll through Visual Studio Marketplace licensing terms followed by Cursor settings toggle for Privacy Mode.',
      dialogue: 'Now let us talk about the elephant in the room: extensions and licensing. Because Cursor is a third-party fork, it cannot legally bundle Microsoft proprietary services. While 98% of extensions work without issues, enterprise teams with strict Remote Development policies often hit hurdles. If your company enforces zero-data-leakage mandates, standard VS Code with enterprise Copilot remains the gold standard.',
    },
    {
      timestamp: '08:30 - 10:15',
      topic: 'Performance & Resource Benchmarks',
      visualCue: 'Bar chart comparing RAM consumption: VS Code (380MB) vs Cursor (720MB) with 50,000-line TypeScript project.',
      dialogue: 'Under the hood, both run on Chromium and Node.js. However, Cursor runs background embedding processes to index your repository. In our testing on a 50,000-line codebase, Cursor hovered around 700 to 800MB of RAM, compared to 380MB in VS Code. On high-end developer laptops, this is barely noticeable, but on budget machines, VS Code runs lighter.',
    },
    {
      timestamp: '10:15 - 11:20',
      topic: 'Final Verdict & Channel Wrap-Up',
      visualCue: 'Summary scorecard graphic on screen. Outro slate displaying IDE Guide YouTube link and ideguide.blogspot.com blog banner.',
      dialogue: 'So what is our verdict? If you write Greenfield code, build full-stack web apps, and want maximum speed with AI assistance, Cursor is currently the strongest choice. But if you work in a locked-down enterprise or prefer a lightweight, pure editor, VS Code with Copilot continues to be unbeatable. Head over to ideguide.blogspot.com for the full AMP comparison table, and do not forget to subscribe to IDE Guide for more deep dives. See you in the next one!',
    },
  ],

  prosCons: {
    vsCode: {
      pros: [
        'Unrivaled extension marketplace with 50,000+ plugins',
        'Official Microsoft support, Remote SSH, and WSL integration',
        'Extremely stable release cadence and enterprise compliance',
        'Lower idle memory usage compared to heavy AI forks',
      ],
      cons: [
        'Extension API historically limits deep editor manipulation for AI',
        'Multi-file refactoring requires manual file selection',
      ],
    },
    cursor: {
      pros: [
        'Best-in-class multi-file AI agent (Composer) and predictive tab',
        'Deep AST and codebase vector indexing built directly into the UI',
        'Instant familiarity for any existing VS Code developer',
        'Rapid feature release cycle',
      ],
      cons: [
        'Proprietary fork with dependence on upstream VS Code merges',
        'Higher monthly subscription cost ($20/mo vs $10/mo)',
        'Higher memory footprint due to local embedding indexer',
      ],
    },
  },

  youtubeTags: [
    'VSCode',
    'Cursor',
    'AI Code Editor',
    'GitHub Copilot',
    'IDE Guide',
    'Programming IDE',
    'Web Development',
    'Software Engineering',
    'Cursor vs VSCode',
    'Best Code Editor 2026',
  ],
};
