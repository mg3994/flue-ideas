# Flue State Checkpointing & Replay Technical Reference

## Checkpoint Lifecycle

```
[Incoming Prompt] ──> [LLM Step Execution] ──> (Checkpoint Saved)
                             │
                     [Tool Execution] ───────> (Checkpoint Saved)
                             │
                   [Agent Response Ready] ────> (State Committed)
```

## Crash Recovery Loop

When a Node process crashes mid-execution:

1. Flue reads the latest committed state for session `:id` from the store.
2. Unfinished tool calls or steps re-evaluate cleanly.
3. Completed steps with committed side effects are restored directly from memory replay without duplicate invocation.

## Idempotency Rules for Custom Tools

- Design custom tools to handle duplicate execution safely.
- Use unique transaction keys or database upserts inside tool execution handlers.
