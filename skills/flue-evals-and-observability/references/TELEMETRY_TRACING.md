# Flue Telemetry & Evals Reference

## OpenTelemetry Exporter Configuration

```typescript
import { openTelemetryTracing } from '@flue/opentelemetry';

export const telemetryConfig = openTelemetryTracing({
  serviceName: 'flue-agent-service',
  endpoint: process.env.OTEL_EXPORTER_OTLP_ENDPOINT || 'http://localhost:4318/v1/traces',
  headers: {
    'Authorization': `Bearer ${process.env.OTEL_EXPORTER_OTLP_HEADERS}`,
  },
});
```

## Scoring Agent Benchmark Evals

```typescript
import { runEval } from '@flue/runtime/evals';
import { Assistant } from '../../src/agents/assistant.ts';

runEval({
  name: 'Conciseness Benchmark',
  agent: Assistant,
  dataset: [
    { input: 'What is Flue?', expectedMaxLength: 100 }
  ],
  async score({ output, item }) {
    const isShort = output.length <= item.expectedMaxLength;
    return { score: isShort ? 1.0 : 0.0 };
  }
});
```
