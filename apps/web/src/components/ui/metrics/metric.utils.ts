import type { MetricData } from "./metric.types";

export function calculateDelta(
  current: number,
  previous: number,
): number {
  if (previous === 0) {
    return 0;
  }

  return ((current - previous) / previous) * 100;
}

export function formatMetricValue(
  value: number,
  locale = "en-IN",
  maximumFractionDigits = 2,
): string {
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits,
  }).format(value);
}

export function formatCompactValue(
  value: number,
  locale = "en-IN",
): string {
  return new Intl.NumberFormat(locale, {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export function findMetric(
  metrics: MetricData[],
  id: string,
): MetricData | undefined {
  return metrics.find(
    (metric) => metric.id === id,
  );
}

export function metricPercentage(
  value: number,
  max = 100,
): number {
  if (max <= 0) {
    return 0;
  }

  return Math.min(
    Math.max((value / max) * 100, 0),
    100,
  );
}