import type { ChartSeries } from "./chart.types";

export function getSeriesColor(
  series: ChartSeries,
  fallback = "hsl(var(--primary))",
): string {
  return series.color ?? fallback;
}

export function formatNumber(
  value: number,
  maximumFractionDigits = 2,
): string {
  return new Intl.NumberFormat(undefined, {
    maximumFractionDigits,
  }).format(value);
}

export function formatPercent(
  value: number,
  maximumFractionDigits = 1,
): string {
  return new Intl.NumberFormat(undefined, {
    style: "percent",
    maximumFractionDigits,
  }).format(value);
}

export function getMaxValue<T extends Record<string, unknown>>(
  data: T[],
  key: keyof T,
): number {
  return data.length
    ? Math.max(...data.map((item) => Number(item[key] ?? 0)))
    : 0;
}

export function getMinValue<T extends Record<string, unknown>>(
  data: T[],
  key: keyof T,
): number {
  return data.length
    ? Math.min(...data.map((item) => Number(item[key] ?? 0)))
    : 0;
}