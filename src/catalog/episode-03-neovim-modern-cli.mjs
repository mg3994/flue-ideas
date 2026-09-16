export const episode03 = {
  id: 'episode-03-neovim-modern-cli',
  episodeNumber: 3,
  title: 'Neovim & Modern Terminal IDEs: Unmatched Speed or Endless Configuration?',
  targetDuration: '10:15',
  slug: 'neovim-modern-terminal-ide-speed-vs-config',
  heroImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80',
  youtubeVideoId: 'DEMO_NEOVIM_TERMINAL',
  summary: 'Can a terminal-based editor compete with multi-gigabyte GUI IDEs in 2026? In this episode of IDE Guide, we review modern Neovim powered by Lua, Treesitter, and LSP, weighing lightning velocity against the configuration rabbit hole.',

  hook: 'What if your IDE started in under 30 milliseconds, consumed only 35 megabytes of RAM, and let you navigate 10,000 lines of code without touching your mouse once? That is the promise of modern Neovim. But is the learning curve worth it for you?',

  ides: [
    {
      name: 'Neovim (v0.10+)',
      vendor: 'Open Source Community',
      license: 'Apache 2.0 / Vim License',
      architecture: 'Native C / LuaJIT headless modal editor with async event loop',
      aiEngine: 'Avante.nvim / CodeCompanion.nvim / Copilot.lua (Community plugins)',
      memoryIdle: '~25MB - 65MB',
      startupTime: '0.02s - 0.08s (20-80ms)',
      pricing: '100% Free & Open Source forever',
    },
    {
      name: 'GUI Modern Editors (Baseline)',
      vendor: 'Commercial / Open Source',
      license: 'Various',
      architecture: 'Webview / Electron / JVM UI architectures',
      aiEngine: 'Built-in Copilot / Claude / GPT integrations',
      memoryIdle: '~400MB - 1.5GB',
      startupTime: '1.5s - 6.0s',
      pricing: 'Free to $20/mo',
    },
  ],

  featureComparisons: [
    {
      category: 'Startup & Execution Velocity',
      vsCodeNotes: 'Electron/JVM cold boots take between 1.5s to 8s with full extension hydration.',
      cursorNotes: 'Neovim boots in under 50ms, rendering instantly even over high-latency SSH connections.',
      verdict: 'Neovim is undeniably faster than any GUI editor on the planet.',
    },
    {
      category: 'Navigation & Modal Editing Speed',
      vsCodeNotes: 'Requires mouse interaction or multiple modifier chords (Ctrl+Alt+Shift) for non-standard cursor jumps.',
      cursorNotes: 'Vim motions, text objects, and Leap/Flash plugins allow teleporting to any word on the screen in 2 keystrokes.',
      verdict: 'Modal editing is exponentially faster once muscle memory develops.',
    },
    {
      category: 'Setup Overhead & Maintenance',
      vsCodeNotes: 'Download, install, and start coding in 2 minutes with graphical settings.',
      cursorNotes: 'Requires understanding Lua, Package managers (Lazy.nvim), Mason for LSPs, and Treesitter parsers.',
      verdict: 'GUI editors win overwhelmingly for beginners; Neovim requires dedicated investment.',
    },
    {
      category: 'AI Assistant Integration in 2026',
      vsCodeNotes: 'Native multi-file diff previews and visual sidebars.',
      cursorNotes: 'Community plugins like Avante.nvim replicate Cursor-style sidebars and Claude 3.5 Sonnet streaming directly inside terminal buffers.',
      verdict: 'Neovim AI is surprisingly capable now, but visual diffing in terminal requires getting used to.',
    },
  ],

  talkingPoints: [
    {
      timestamp: '00:00 - 00:35',
      topic: 'Hook & Introduction',
      visualCue: 'Fast terminal typing with high-speed cursor movements, Treesitter syntax highlighting popping instantly in Alacritty/Kitty terminal.',
      dialogue: 'Welcome back to IDE Guide! Today, we are answering the ultimate geek question: In an era of heavy AI-powered graphical editors, why are thousands of senior software engineers migrating back to the terminal with Neovim? Let us investigate the phenomenon.',
    },
    {
      timestamp: '00:35 - 00:55',
      topic: 'Mandatory Non-Affiliation Disclaimer',
      visualCue: 'Standard transparent disclaimer card graphic displayed clearly on screen.',
      dialogue: 'Before we dive into the terminal, our mandatory disclaimer: IDE Guide is an independent project. We are not affiliated with, sponsored by, or endorsed by any software entity or maintainer group mentioned. Our guides are created for developer education based on web documentation and testing.',
    },
    {
      timestamp: '00:55 - 03:20',
      topic: 'The Modern Neovim Stack: Lua, Treesitter, and Mason',
      visualCue: 'Tour of a modern init.lua configuration using Lazy.nvim, showing automatic LSP installations via Mason and syntax parsing via Treesitter.',
      dialogue: 'If you haven’t looked at Vim in 5 years, modern Neovim is a completely different beast. Gone are the days of cryptic Vimscript. Modern Neovim uses LuaJIT for lightning-fast execution, Tree-sitter for concrete syntax tree parsing, and built-in Language Server Protocol clients. With modern package managers like Lazy.nvim, setup is modular and clean.',
    },
    {
      timestamp: '03:20 - 06:15',
      topic: 'Modal Editing: The Muscle Memory Superpower',
      visualCue: 'Screen demo showing deleting an entire inner HTML tag (`dit`), changing inside parentheses (`ci(`), and jumping across 100 lines using Leap/Flash.',
      dialogue: 'The true superpower is modal editing. By separating text insertion from text navigation, your hands never leave the home row. Need to change everything inside a function parameter list? `ci(` and you are done. In GUI editors, you reach for the mouse, highlight text, and lose focus. In Neovim, editing happens at the speed of thought.',
    },
    {
      timestamp: '06:15 - 08:20',
      topic: 'The Configuration Trap: Productivity Killer or Asset?',
      visualCue: 'Humorous graph showing the "Neovim rabbit hole" where developers spend 20 hours tweaking statuslines instead of coding.',
      dialogue: 'Now for the warning: the configuration rabbit hole is real. You can easily lose entire weekends tweaking colorschemes, keymaps, and statuslines. Fortunately, pre-configured distributions like LazyVim, AstroNvim, and LunarVim give you a full IDE experience out of the box in 60 seconds.',
    },
    {
      timestamp: '08:20 - 10:15',
      topic: 'Verdict & Who Should Try It',
      visualCue: 'Recommendation matrix on screen. Outro cards featuring IDE Guide social links and ideguide.blogspot.com.',
      dialogue: 'So should you switch? If you love keyboard-first workflows, work frequently over SSH on remote cloud servers, or want an editor that will never slow down your laptop, Neovim is life-changing. If you want instant zero-setup turnkey convenience, stick with VS Code. Read our full setup guide on ideguide.blogspot.com, and remember to subscribe to IDE Guide for our next episode!',
    },
  ],

  prosCons: {
    neovim: {
      pros: [
        'Instantaneous startup (sub-50ms) and minimal RAM usage (<50MB)',
        'Vim modal editing provides the highest possible text manipulation velocity',
        'Runs seamlessly in any terminal environment, remote SSH, or container',
        'Completely open source and non-commercial forever',
      ],
      cons: [
        'Steep learning curve requiring muscle memory training',
        'Configuration overhead can become a time sink if not disciplined',
        'No native GUI windowing (relies on terminal multiplexers like Tmux)',
      ],
    },
  },

  youtubeTags: [
    'Neovim',
    'Vim',
    'Terminal IDE',
    'LazyVim',
    'Lua Programming',
    'Developer Productivity',
    'Software Development',
    'IDE Guide',
    'Treesitter',
    'Linux Development',
  ],
};
