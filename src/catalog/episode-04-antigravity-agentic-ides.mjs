export const episode04 = {
  id: 'episode-04-antigravity-agentic-ides',
  episodeNumber: 4,
  title: 'Antigravity & Agentic IDEs: Beyond Copilot to Autonomous Software Engineering',
  targetDuration: '11:45',
  slug: 'antigravity-agentic-ides-autonomous-engineering',
  heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  youtubeVideoId: 'DEMO_ANTIGRAVITY_AGENTIC',
  summary: 'In this episode of IDE Guide, we examine the newest frontier of software development environments: Agentic IDEs like Antigravity. Unlike passive autocomplete, these systems plan, execute terminal commands, test in headless browsers, and collaborate autonomously.',

  hook: 'What if your editor wasn’t just a tool that listened to your keystrokes, but an active engineering partner that wrote plans, edited files across your repository, executed terminal tests, and validated changes in a real browser before presenting you a diff? Welcome to the era of Agentic IDEs.',

  ides: [
    {
      name: 'Antigravity / Agentic IDEs',
      vendor: 'Advanced AI Research Teams',
      license: 'Enterprise / Developer Preview',
      architecture: 'Model-in-the-loop multi-agent orchestrator with sandboxed runtime',
      aiEngine: 'Autonomous reasoning models with tool-use (terminal, browser, MCP)',
      memoryIdle: '~500MB - 1GB',
      startupTime: '2.0s - 4.0s',
      pricing: 'Token-based / Tiered developer access',
    },
    {
      name: 'Passive AI Editors (First Gen)',
      vendor: 'Commercial Vendors',
      license: 'Proprietary',
      architecture: 'Traditional editor with single-prompt completion sidecar',
      aiEngine: 'Single-turn LLM generation with manual acceptance',
      memoryIdle: '~400MB - 800MB',
      startupTime: '1.5s - 3.5s',
      pricing: '$10 - $20/month',
    },
  ],

  featureComparisons: [
    {
      category: 'Autonomous Execution vs Passive Suggestion',
      vsCodeNotes: 'Requires developer to accept code snippet by snippet, manually run terminal commands, and debug errors.',
      cursorNotes: 'Agentic loops plan multi-step implementations, execute builds, inspect error logs, and self-correct before requesting review.',
      verdict: 'Agentic IDEs fundamentally transform developers from typists to engineering reviewers.',
    },
    {
      category: 'Tool Integration (Terminal, MCP, Browser)',
      vsCodeNotes: 'Extensions have isolated views with limited cross-tool orchestration.',
      cursorNotes: 'Direct integration with Model Context Protocol (MCP), headless Chromium for visual QA, and terminal task runners.',
      verdict: 'Deep tool access enables end-to-end task completion.',
    },
    {
      category: 'Planning & Architectural Verification',
      vsCodeNotes: 'No formal planning phase; developer must architect every file manually.',
      cursorNotes: 'Generates structured implementation plans, requests explicit feedback, and creates walkthrough verification docs.',
      verdict: 'Built-in planning reduces architectural drift on complex features.',
    },
    {
      category: 'Safety & Accidental Data Loss Prevention',
      vsCodeNotes: 'Standard file undo/redo buffers.',
      cursorNotes: 'Includes safety guardrails, explicit user confirmation for destructive actions, and atomic git checkouts.',
      verdict: 'Agentic IDEs require strict guardrails to prevent unintended overwrites.',
    },
  ],

  talkingPoints: [
    {
      timestamp: '00:00 - 00:45',
      topic: 'Hook & Introduction',
      visualCue: 'Timelapse recording of an agent writing a 5-file feature, launching automated tests, catching an error, fixing it, and producing a clean git diff.',
      dialogue: 'Welcome back to IDE Guide! In the last two years, we went from simple inline autocomplete to multi-line tab prediction. But right now, we are witnessing the biggest leap in developer tooling history: the shift to Agentic IDEs. Today, we explore how systems like Antigravity work under the hood.',
    },
    {
      timestamp: '00:45 - 01:05',
      topic: 'Mandatory Non-Affiliation Disclaimer',
      visualCue: 'Prominent disclaimer card displayed on screen with clear voiceover delivery.',
      dialogue: 'As always, our disclaimer: IDE Guide is an independent educational channel. We are not affiliated with, sponsored by, or endorsed by Google, DeepMind, Anysphere, Microsoft, or any tool provider mentioned. Our insights are based strictly on public technical papers, hands-on tests, and community releases.',
    },
    {
      timestamp: '01:05 - 03:30',
      topic: 'From Autocomplete to Multi-Agent Pair Programming',
      visualCue: 'Animated diagram showing the hierarchy: Coordinator Agent -> Researcher Subagent -> Coder Subagent -> Browser QA Subagent.',
      dialogue: 'What makes an IDE "agentic"? In traditional editors, the LLM is passive. You type a prompt, it gives you text, and you do the work of testing it. In an agentic environment like Antigravity, the system acts like a junior pair programmer with full terminal, filesystem, and browser access. It reads files, forms a hypothesis, creates an implementation plan, and executes step by step.',
    },
    {
      timestamp: '03:30 - 06:45',
      topic: 'Model Context Protocol (MCP) & Subagent Delegation',
      visualCue: 'Screen capture of MCP tools connecting to local SQLite databases, GitHub APIs, and Chrome DevTools.',
      dialogue: 'The real secret sauce is tool calling and MCP—the Model Context Protocol. An agentic IDE doesn’t hallucinate database schemas because it can call an MCP tool to inspect your active PostgreSQL database directly. When a frontend bug occurs, it can trigger Chrome DevTools to inspect DOM elements and accessibility trees before applying a patch.',
    },
    {
      timestamp: '06:45 - 09:15',
      topic: 'Planning Mode & Developer Guardrails',
      visualCue: 'UI walkthrough showing Implementation Plan review, user feedback button, and step-by-step walkthrough generation.',
      dialogue: 'A huge concern developers have is trust. Will an agent delete your production database or overwrite a critical file? The best agentic architectures enforce strict planning mode and confirmation gates. Before touching source code, the agent writes an implementation plan artifact and pauses for your approval.',
    },
    {
      timestamp: '09:15 - 11:45',
      topic: 'Verdict & The Future of Developer Workflows',
      visualCue: 'Comparison summary chart on screen. Outro cards pointing to IDE Guide channel and ideguide.blogspot.com.',
      dialogue: 'Agentic IDEs are not here to replace developers—they are here to eliminate boilerplate and free you to think about high-level architecture. Check out our full guide and technical deep-dive on ideguide.blogspot.com, and make sure to subscribe to IDE Guide for our ongoing coverage of next-gen developer tools!',
    },
  ],

  prosCons: {
    agenticIdes: {
      pros: [
        'Autonomous end-to-end task execution (code, terminal, testing, debugging)',
        'Model Context Protocol (MCP) integration unlocks external databases and tools',
        'Structured planning mode keeps complex refactoring organized',
        'Drastically reduces time spent on repetitive scaffolding and boilerplate',
      ],
      cons: [
        'Higher token consumption and API costs for autonomous agent loops',
        'Requires developer discipline to review implementation plans thoroughly',
        'Still evolving rapidly with shifting specifications and plugin ecosystems',
      ],
    },
  },

  youtubeTags: [
    'Antigravity',
    'Agentic IDE',
    'AI Agents',
    'Developer Tools',
    'Model Context Protocol',
    'MCP',
    'Autonomous Coding',
    'Software Engineering',
    'IDE Guide',
    'Future of Programming',
  ],
};
