# Metrics

A reusable collection of metric components for dashboards, observability platforms, analytics products, and DevOps applications.

## Components

- MetricProvider
- MetricCard
- MetricGrid
- MetricValue
- MetricLabel
- MetricTrend
- MetricDelta
- MetricStatus
- MetricIcon
- MetricProgress
- MetricSparkline
- MetricSkeleton

## Installation

This module depends on:

- React 19+
- Tailwind CSS
- shadcn/ui
- Recharts
- lucide-react

## Basic Usage

```tsx
<MetricProvider metrics={metrics}>
  <MetricGrid columns={4}>
    <MetricCard>
      <MetricLabel>CPU Usage</MetricLabel>

      <MetricValue
        value={62}
        suffix="%"
      />

      <MetricTrend
        current={62}
        previous={54}
      />
    </MetricCard>
  </MetricGrid>
</MetricProvider>
```

## Features

- Responsive metric layouts
- KPI cards
- Trend indicators
- Status badges
- Progress bars
- Sparkline charts
- Loading skeletons
- Context-based state management

## Export

```ts
import {
  MetricCard,
  MetricGrid,
  MetricProvider,
} from "@/components/ui/metrics";
```