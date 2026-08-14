import type { ReactNode } from "react";

export type ChartVariant =
  | "line"
  | "area"
  | "bar"
  | "horizontal-bar"
  | "stacked-bar"
  | "pie"
  | "donut"
  | "radar"
  | "radial"
  | "scatter"
  | "bubble"
  | "composed"
  | "heatmap"
  | "treemap"
  | "funnel"
  | "gauge"
  | "sparkline"
  | "mini-area"
  | "mini-bar";

export interface ChartSeries {
  id: string;
  label: string;
  color?: string;
  dataKey: string;
  hidden?: boolean;
}

export interface ChartDataPoint {
  [key: string]: unknown;
}

export interface ChartDisplayOptions {
  grid?: boolean;
  tooltip?: boolean;
  legend?: boolean;
  animation?: boolean;
}

export interface ChartProps {
  data: ChartDataPoint[];
  series: ChartSeries[];
  height?: number;
  width?: number | string;
  loading?: boolean;
  empty?: boolean;
  children?: ReactNode;
}

export interface ChartContextValue {
  data: ChartDataPoint[];
  series: ChartSeries[];
  loading: boolean;
  empty: boolean;
}