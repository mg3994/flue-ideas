# Flue Project Layout & Architecture Reference

## File Naming & Directory Conventions

```
src/
├── agents/             # Flue agent definitions ('use agent')
│   ├── assistant.ts    # Single agent harness
│   └── subagents/      # Specialized subagents
├── tools/              # Custom agent tools (Zod schemas + execute handlers)
├── skills/             # Agent Skills directories (SKILL.md)
├── app.ts              # Hono application router (createAgentRouter)
└── index.ts            # Entrypoint file
```

## Migration Checklist

1. Replace legacy direct LLM API client loops with decorated agent harness functions (`'use agent'`).
2. Move static system prompts to modular Agent Skills (`SKILL.md`).
3. Refactor function calling definitions to Flue `createTool` definitions.
4. Replace custom web framework routes with Hono `createAgentRouter` in `src/app.ts`.
