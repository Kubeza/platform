import {
  CHART_COLORS,
} from "./constants";

export function getChartColor(
  index: number,
): string {
  return CHART_COLORS[
    index % CHART_COLORS.length
  ];
}

export function formatNumber(
  value: number,
): string {
  return new Intl.NumberFormat().format(
    value,
  );
}

export function formatPercent(
  value: number,
): string {
  return `${value}%`;
}

export function clamp(
  value: number,
  min: number,
  max: number,
): number {
  return Math.min(
    Math.max(value, min),
    max,
  );
}