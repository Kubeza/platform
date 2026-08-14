import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type StatCardTrendDirection =
  | "up"
  | "down"
  | "neutral";

export type StatCardStatus =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "info";

export type StatCardChartType =
  | "line"
  | "area"
  | "bar"
  | "progress"
  | "ring";

export interface StatCardDataPoint {
  value: number;
  label?: string;
}

export interface StatCardProps
  extends HTMLAttributes<HTMLDivElement> {
  heading: ReactNode;

  value: ReactNode;

  subtitle?: ReactNode;

  icon?: ReactNode;

  trend?: number;

  trendDirection?: StatCardTrendDirection;

  trendLabel?: ReactNode;

  status?: StatCardStatus;

  chartType?: StatCardChartType;

  chartData?: StatCardDataPoint[];

  footer?: ReactNode;
}

export interface StatCardHeaderProps
  extends HTMLAttributes<HTMLDivElement> {
  heading: ReactNode;

  icon?: ReactNode;

  status?: StatCardStatus;
}

export interface StatCardValueProps
  extends HTMLAttributes<HTMLDivElement> {
  value: ReactNode;

  subtitle?: ReactNode;
}

export interface StatCardTrendProps
  extends HTMLAttributes<HTMLDivElement> {
  value?: number;

  direction?: StatCardTrendDirection;

  label?: ReactNode;
}

export interface StatCardChartProps
  extends HTMLAttributes<HTMLDivElement> {
  type?: StatCardChartType;

  data?: StatCardDataPoint[];
}

export interface StatCardFooterProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface StatCardLoadingProps
  extends HTMLAttributes<HTMLDivElement> {}