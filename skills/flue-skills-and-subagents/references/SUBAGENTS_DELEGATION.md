# Subagents & Delegation Reference

## Multi-agent Hierarchical Delegation

```
                    ┌─────────────────────────┐
                    │   Triage Coordinator    │
                    │   ('use agent')         │
                    └────────────┬────────────┘
                                 │
           ┌─────────────────────┴─────────────────────┐
           ▼                                           ▼
┌─────────────────────┐                     ┌─────────────────────┐
│  Security Expert    │                     │  Code Reviewer      │
│  (Subagent)         │                     │  (Subagent)         │
└─────────────────────┘                     └─────────────────────┘
```

## `useSubagent` Registration & Context Isolation

- **Isolated History**: Subagents run within dedicated conversation sub-contexts, preventing prompt pollution in the main coordinator.
- **Model Specialization**: Parent coordinators can use larger reasoning models (`claude-sonnet-4-6`) while delegating targeted tasks to fast subagents (`claude-haiku-4-5`).
