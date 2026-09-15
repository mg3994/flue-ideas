---
name: flue-evals-and-observability
description: Implementation guide for agent evaluations, OpenTelemetry distributed tracing (@flue/opentelemetry), Braintrust, Sentry error monitoring, and telemetry instrumentation in Flue. Use when instrumenting Flue agents for observability, evals, or tracing.
license: Apache-2.0
compatibility: Requires Node.js >= 22.19.0
metadata:
  framework: Flue
  target: node
---

# Flue Evals & Observability

This skill covers how to run evaluation benchmarks, export OpenTelemetry traces, and integrate observability providers in **Flue**.

## OpenTelemetry Integration (`@flue/opentelemetry`)

Flue provides an official OpenTelemetry adapter to trace agent execution turns, tool invocations, and LLM latency:

```typescript
// flue.config.ts
import { defineConfig } from '@flue/runtime/config';
import { openTelemetryTracing } from '@flue/opentelemetry';

export default defineConfig({
  target: 'node',
  telemetry: openTelemetryTracing({
    serviceName: 'flue-agent-service',
    endpoint: process.env.OTEL_EXPORTER_OTLP_ENDPOINT || 'http://localhost:4318/v1/traces',
  }),
});
```

## Monitoring & Error Tracking (Sentry / Braintrust)

In addition to OpenTelemetry, you can register third-party observers or Sentry adapters to capture agent execution exceptions:

```typescript
'use agent';

import { useModel, useHook } from '@flue/runtime';

export function MonitoredAgent() {
  useModel('anthropic/claude-sonnet-4-6');

  useHook({
    onError(error, context) {
      // Export error to monitoring service
      console.error(`[Flue Agent Error] Session: ${context.sessionId}`, error);
    },
    onToolCall({ name, durationMs }) {
      console.log(`[Tool Telemetry] Tool ${name} took ${durationMs}ms`);
    }
  });

  return 'You are an agent instrumented with real-time error tracking.';
}
```

## Running Agent Evals

Evaluations (evals) measure agent accuracy, tool call correctness, and adherence to safety guidelines against test benchmark suites.

### Creating an Evaluation Suite

```typescript
// tests/evals/triage.eval.ts
import { runEval } from '@flue/runtime/evals';
import { Triage } from '../../src/agents/triage.ts';

runEval({
  name: 'Triage Bug Report Eval',
  agent: Triage,
  dataset: [
    {
      input: 'The API returns HTTP 500 when passing empty user payload.',
      expectedTools: ['searchCode', 'openIssue'],
      expectedBehavior: 'Identifies input validation flaw and logs issue.',
    }
  ],
  async score({ output, expectedBehavior }) {
    // Return score between 0.0 and 1.0
    const passed = output.includes('validation');
    return { score: passed ? 1.0 : 0.0 };
  }
});
```

Run evals via CLI:

```bash
npx flue eval tests/evals/triage.eval.ts
```

## Best Practices
- Export OpenTelemetry metrics to centralized APM dashboards (Datadog, Honeycomb, Jaeger).
- Include automated eval runs in CI/CD pipelines to prevent agent regression on system instruction updates.
- Redact sensitive user data (PII) before emitting traces to external telemetry collectors.
