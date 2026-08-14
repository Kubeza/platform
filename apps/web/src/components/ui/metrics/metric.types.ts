import type { ReactNode } from "react";

export type MetricStatusType =
  | "healthy"
  | "warning"
  | "critical"
  | "offline";

export interface MetricSeriesPoint {
  label: string;
  value: number;
}

export interface MetricData {
  id: string;
  label: string;
  value: number;
  previousValue?: number;
  unit?: string;
  status?: MetricStatusType;
  icon?: ReactNode;
  trend?: MetricSeriesPoint[];
}

export interface MetricContextValue {
  metrics: MetricData[];
  loading: boolean;
}

export interface MetricProviderProps {
  metrics: MetricData[];
  loading?: boolean;
  children: ReactNode;
}