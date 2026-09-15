# Flue Sandbox Isolation Reference

## Sandbox Provider Comparison

| Sandbox Provider | Scope | Use Case | Security Level |
|---|---|---|---|
| `local()` | Host Machine Directory | Local development & trusted internal tools | Restricted by file path boundaries |
| `daytona()` | Remote Cloud Container | Production agent execution & untrusted code | High container isolation |

## Security Recommendations

1. **Path Isolation**: Restrict `local({ rootDir: './workspace' })` to dedicated non-root workspace folders.
2. **Execution Timeouts**: Set process execution timeouts on terminal commands inside agent tools.
3. **Environment Secret Boundaries**: Never pass sensitive host environment variables directly into sandbox processes.
