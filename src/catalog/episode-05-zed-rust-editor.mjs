export const episode05 = {
  id: 'episode-05-zed-rust-editor',
  episodeNumber: 5,
  title: 'Zed Editor: Can a GPU-Accelerated Rust Editor Beat VS Code?',
  targetDuration: '10:00',
  slug: 'zed-editor-gpu-accelerated-rust-vs-code',
  heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
  youtubeVideoId: 'DEMO_ZED_EDITOR',
  summary: 'In this episode of IDE Guide, we review Zed, the high-performance editor written entirely in Rust with GPU-accelerated rendering and native CRDT multiplayer collaboration. How fast is it really, and is it ready to replace VS Code?',

  hook: 'What happens when the original creators of Atom and Tree-sitter decide to rebuild the modern code editor from scratch in 100% pure Rust, rendering every single character directly with your GPU at 120 frames per second? You get Zed. Today, we put it to the test.',

  ides: [
    {
      name: 'Zed',
      vendor: 'Zed Industries',
      license: 'GPL / AGPL / Apache 2.0 (Open Source core)',
      architecture: 'Pure Rust native binary with custom GPUI UI framework',
      aiEngine: 'Inline Assistant / Anthropic Claude / OpenAI / Local Ollama support',
      memoryIdle: '~90MB - 180MB',
      startupTime: '0.15s - 0.35s (150-350ms)',
      pricing: 'Free & Open Source (Paid collaboration cloud features)',
    },
    {
      name: 'Visual Studio Code',
      vendor: 'Microsoft',
      license: 'MIT / Commercial binaries',
      architecture: 'Electron / Chromium Webview DOM rendering',
      aiEngine: 'GitHub Copilot / Copilot Edits',
      memoryIdle: '~250MB - 450MB',
      startupTime: '1.2s - 2.5s',
      pricing: 'Free / Copilot $10/mo',
    },
  ],

  featureComparisons: [
    {
      category: 'Rendering Engine & Frame Latency',
      vsCodeNotes: 'Chromium DOM rendering with CSS layout calculations. Can stutter when scrolling massive files or minified bundles.',
      cursorNotes: 'Custom GPUI framework renders pixels directly on the graphics card via Metal / Vulkan at native 120Hz display refresh rates.',
      verdict: 'Zed delivers the smoothest, lowest-latency typing experience of any GUI editor.',
    },
    {
      category: 'Native Multiplayer Collaboration',
      vsCodeNotes: 'Live Share extension works over WebSockets, but can lag on high-latency links or complex workspaces.',
      cursorNotes: 'Built on Conflict-free Replicated Data Types (CRDTs); multiple developers can edit simultaneously with zero desynchronization.',
      verdict: 'Zed has the most elegant built-in multiplayer pairing experience available.',
    },
    {
      category: 'Extension Ecosystem & Maturity',
      vsCodeNotes: '50,000+ battle-tested extensions for every language, framework, and toolchain in existence.',
      cursorNotes: 'Extension ecosystem uses WebAssembly (Wasm) and is growing quickly, but lacks the decade-long depth of VS Code.',
      verdict: 'VS Code remains far ahead in plugin variety.',
    },
    {
      category: 'AI Assistant & Model Flexibility',
      vsCodeNotes: 'Tied primarily to GitHub Copilot ecosystem unless using third-party plugins.',
      cursorNotes: 'Allows switching effortlessly between Anthropic Claude 3.5 Sonnet, GPT-4o, and local Ollama models with your own API keys.',
      verdict: 'Zed offers great bring-your-own-key flexibility with zero subscription lock-in.',
    },
  ],

  talkingPoints: [
    {
      timestamp: '00:00 - 00:35',
      topic: 'Hook & Introduction',
      visualCue: 'High-speed scrolling in Zed through a 100,000 line codebase at 120 FPS without a single dropped frame.',
      dialogue: 'Welcome back to IDE Guide! For years, developers complained about Electron editors being bloated, slow to boot, and memory hungry. But now, Zed is here—written from the ground up in Rust with a custom GPU rendering engine. Today, we answer: Is Zed ready for your daily workflow?',
    },
    {
      timestamp: '00:35 - 00:55',
      topic: 'Mandatory Non-Affiliation Disclaimer',
      visualCue: 'Official non-affiliation disclaimer graphics card shown prominently.',
      dialogue: 'First, our required disclaimer: IDE Guide is an independent educational channel. We are not affiliated with, sponsored by, or endorsed by Zed Industries or any software creator reviewed. All insights are based on public web resources, benchmarking, and real-world testing.',
    },
    {
      timestamp: '00:55 - 03:15',
      topic: 'The Rust & GPUI Engineering Marvel',
      visualCue: 'Architectural breakdown graphic comparing Electron DOM rendering tree vs Zed GPUI direct GPU pipeline.',
      dialogue: 'Nathan Sobo and the team who built Atom learned from the past. Instead of putting a web browser inside a desktop app, they wrote GPUI—a custom 2D UI framework written in Rust that draws directly to your GPU. Keystroke latency drops from 40 milliseconds down to less than 5 milliseconds.',
    },
    {
      timestamp: '03:15 - 05:45',
      topic: 'Multiplayer Coding with CRDTs',
      visualCue: 'Live split screen showing two developers typing in real-time in the same buffer, sharing voice and channel seamlessly.',
      dialogue: 'Another killer feature is built-in multiplayer. Using Conflict-free Replicated Data Types, or CRDTs, pairing with a colleague feels as instantaneous as Google Docs. You can share workspaces, communicate with audio, and navigate together without installing external plugins.',
    },
    {
      timestamp: '05:45 - 08:00',
      topic: 'AI Integration: Bring Your Own Keys',
      visualCue: 'Settings panel demonstrating selecting Claude 3.5 Sonnet, configuring Ollama local models, and invoking the Zed Assistant panel.',
      dialogue: 'Zed doesn’t lock you into a proprietary AI subscription. You can plug in your own Anthropic or OpenAI API keys, or even connect to local models running via Ollama on your machine. This gives developers complete control over data privacy and costs.',
    },
    {
      timestamp: '08:00 - 10:00',
      topic: 'Verdict: Can You Replace VS Code Today?',
      visualCue: 'Pros and cons checklist on screen. Outro cards pointing to IDE Guide YouTube channel and ideguide.blogspot.com.',
      dialogue: 'If you prioritize raw performance, buttery smooth 120Hz typing, and clean multiplayer pairing in Rust, TypeScript, or Go, Zed is a joy to use. If your workflow relies on specialized extensions, VS Code is still the pragmatic choice. Read our full AMP review on ideguide.blogspot.com, and don’t forget to subscribe to IDE Guide for more engineering deep dives!',
    },
  ],

  prosCons: {
    zed: {
      pros: [
        'Unrivaled typing and scrolling latency via native Rust GPUI engine',
        'Sub-300ms startup times and tiny idle memory footprint (~100MB)',
        'Native, latency-free multiplayer pair programming based on CRDTs',
        'Bring-your-own-key AI model support (Anthropic, OpenAI, local Ollama)',
      ],
      cons: [
        'Younger extension marketplace compared to VS Code',
        'Windows/Linux builds have reached parity more recently than macOS',
        'Debugging GUI is still maturing compared to mature IDEs',
      ],
    },
  },

  youtubeTags: [
    'Zed Editor',
    'Rust Programming',
    'GPU Accelerated',
    'VS Code Alternative',
    'IDE Guide',
    'Developer Tools',
    'Programming',
    'Software Engineering',
    'Code Editor 2026',
    'CRDT Collaboration',
  ],
};
