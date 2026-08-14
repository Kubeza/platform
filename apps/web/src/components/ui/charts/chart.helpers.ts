import type { ChartSeries } from "./chart.types";

export function resolveSeriesKey(
  dataKey: string | undefined,
  series: ChartSeries[],
): string |undefined {
  return dataKey ?? series[0]?.dataKey;
}

export function hasChartData(
  data: unknown[],
): boolean {
  return data.length > 0;
}

export function calculateTotal<T extends Record<string, unknown>>(
  data: T[],
  key: keyof T,
): number {
  return data.reduce(
    (total, item) => total + Number(item[key] ?? 0),
    0,
  );
}

export function clamp(
  value: number,
  min: number,
  max: number,
): number {
  return Math.min(Math.max(value, min), max);
}