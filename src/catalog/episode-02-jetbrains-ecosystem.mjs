export const episode02 = {
  id: 'episode-02-jetbrains-ecosystem',
  episodeNumber: 2,
  title: 'JetBrains Ecosystem: Is IntelliJ IDEA Still the Enterprise King?',
  targetDuration: '10:45',
  slug: 'jetbrains-intellij-webstorm-enterprise-king',
  heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
  youtubeVideoId: 'DEMO_JETBRAINS_ECOSYSTEM',
  summary: 'In this episode of IDE Guide, we explore the JetBrains suite: IntelliJ IDEA, WebStorm, and PyCharm. How do they hold up against lightweight editors and AI newcomers in 2026? We test their indexing engine, refactoring tools, and resource consumption.',

  hook: 'Before VS Code and AI code editors existed, JetBrains ruled the professional software engineering world with an iron fist. But in 2026, with subscription fatigue and lightweight alternatives everywhere, is IntelliJ still the undisputed king of enterprise codebases? Let us find out.',

  ides: [
    {
      name: 'IntelliJ IDEA Ultimate',
      vendor: 'JetBrains',
      license: 'Commercial Subscription / Free Community Edition',
      architecture: 'Java Virtual Machine (JVM) native desktop application',
      aiEngine: 'JetBrains AI Assistant / Local LLM support / Full Cloud integration',
      memoryIdle: '~1.2GB - 2.5GB',
      startupTime: '4.5s - 8.0s',
      pricing: '$169 - $599/year (All Products Pack available)',
    },
    {
      name: 'WebStorm / PyCharm',
      vendor: 'JetBrains',
      license: 'Commercial Subscription (PyCharm has Community edition)',
      architecture: 'Specialized IntelliJ Platform runtime tailored per language',
      aiEngine: 'Full-line code completion (local model) + JetBrains AI Assistant',
      memoryIdle: '~900MB - 1.8GB',
      startupTime: '3.8s - 6.5s',
      pricing: '$69 - $249/year individual',
    },
  ],

  featureComparisons: [
    {
      category: 'Static Analysis & Refactoring Power',
      vsCodeNotes: 'Relies on language servers (LSP); complex cross-project rename or structural refactoring can miss dynamic invocations.',
      cursorNotes: 'Deep abstract syntax tree (AST) comprehension. Safely renames interfaces, extracts parameters, and detects dead code across millions of lines.',
      verdict: 'JetBrains remains the unmatched world champion in safe, automated refactoring.',
    },
    {
      category: 'Out-of-the-Box Tooling & Database Integration',
      vsCodeNotes: 'Requires installing dozens of third-party plugins for Git, Docker, and database administration.',
      cursorNotes: 'Includes DataGrip engine, terminal, HTTP client, profiler, and VCS visual tools natively integrated without plugins.',
      verdict: 'JetBrains provides the most complete turnkey developer environment in existence.',
    },
    {
      category: 'Resource Efficiency & Cold Start',
      vsCodeNotes: 'Significantly heavier on RAM than lightweight editors; requires JVM tuning on constrained developer machines.',
      cursorNotes: 'High memory usage is the trade-off for caching the entire project index in memory for instantaneous navigation.',
      verdict: 'Lightweight editors win on battery life and startup speed; JetBrains wins once the index is warm.',
    },
    {
      category: 'AI Assistant vs Next-Gen AI Code Editors',
      vsCodeNotes: 'JetBrains AI Assistant integrates deeply into commits, doc generation, and inspections, with offline local models for autocomplete.',
      cursorNotes: 'Offline local models ensure zero latency for tab completions even on an airplane with no internet.',
      verdict: 'JetBrains offers exceptional local privacy models, though cloud chat feels more conservative than Cursor.',
    },
  ],

  talkingPoints: [
    {
      timestamp: '00:00 - 00:40',
      topic: 'Hook & Introduction',
      visualCue: 'Fast-paced montage of IntelliJ IDEA splash screen loading, indexing progress bar, and intricate code hierarchy graphs.',
      dialogue: 'Welcome back to IDE Guide! For over two decades, JetBrains has been the gold standard for backend, Java, Kotlin, and enterprise developers. But as AI editors take over the headlines, is the IntelliJ platform still worth its price and heavy memory footprint? Let us investigate.',
    },
    {
      timestamp: '00:40 - 01:00',
      topic: 'Mandatory Legal Disclaimer',
      visualCue: 'Official transparent disclaimer banner overlay on screen with clear readability.',
      dialogue: 'A quick reminder before we begin: We are not affiliated with, sponsored by, or endorsed by JetBrains or any software company mentioned in this guide. All evaluations are based strictly on public web documentation, real-world benchmarks, and community consensus.',
    },
    {
      timestamp: '01:00 - 03:30',
      topic: 'The Power of Deep Indexing & The AST Advantage',
      visualCue: 'Demonstration of IntelliJ refactoring: renaming a database entity and watching it update in SQL queries, XML configs, and TypeScript controllers simultaneously.',
      dialogue: 'The fundamental difference between JetBrains and editor-first tools like VS Code is the index. JetBrains doesn’t just read your files with a Language Server Protocol; it constructs an exhaustive Abstract Syntax Tree of your entire repository. When you press Shift+F6 to rename a symbol, it updates references in SQL queries, XML files, and dependent libraries with 100% mathematical certainty.',
    },
    {
      timestamp: '03:30 - 06:15',
      topic: 'Batteries-Included: Why Enterprise Devs Won’t Leave',
      visualCue: 'Tour of built-in DataGrip SQL console, Git merge conflict resolver, and Java/Node profiler tools.',
      dialogue: 'In lightweight editors, you spend your first day configuring 25 extensions. In IntelliJ Ultimate, everything from database management via DataGrip to graphical merge conflicts and memory profiling is built directly into the core binary by JetBrains engineers.',
    },
    {
      timestamp: '06:15 - 08:30',
      topic: 'Memory, Battery Life, and The JVM Tax',
      visualCue: 'System monitor comparison showing 2.1GB RAM allocation for IntelliJ vs 400MB for lightweight editors.',
      dialogue: 'Of course, there is a tax to pay: the JVM tax. On a 16GB laptop, IntelliJ can feel heavy when running Docker and a browser alongside it. Startup times can take 5 to 10 seconds, and indexing a massive monorepo can make your laptop fans roar. However, JetBrains has mitigated this with shared indexes and modern performance optimizations.',
    },
    {
      timestamp: '08:30 - 10:45',
      topic: 'Verdict: Who Still Needs JetBrains in 2026?',
      visualCue: 'Summary checklist on screen. Outro transition showing IDE Guide links and blog preview.',
      dialogue: 'If you are building enterprise microservices in Java, Kotlin, C#, or Python, nothing matches the reliability and refactoring safety of JetBrains. For quick scripts or frontend-only work, lighter tools may suffice. Check out our detailed AMP article at ideguide.blogspot.com for the complete breakdown, and hit subscribe on IDE Guide for more tooling comparisons!',
    },
  ],

  prosCons: {
    jetbrains: {
      pros: [
        'Unmatched refactoring safety across large multi-language codebases',
        'Built-in first-party database client (DataGrip engine) and VCS tools',
        'Offline local LLM code completion ensures complete privacy',
        'Top-tier ecosystem for JVM, Kotlin, Python, and C++ development',
      ],
      cons: [
        'Heavier memory footprint (typically 1.5GB to 3GB RAM)',
        'Subscription-based commercial pricing model',
        'Slower startup and initial project indexing times',
      ],
    },
  },

  youtubeTags: [
    'JetBrains',
    'IntelliJ IDEA',
    'WebStorm',
    'PyCharm',
    'IDE Guide',
    'Best Java IDE',
    'Enterprise Software',
    'Software Architecture',
    'Developer Tools',
    'VS Code vs IntelliJ',
  ],
};
