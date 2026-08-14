import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface StatisticData {
  id: string;
  label: ReactNode;
  value: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  trend?: ReactNode;
}

export interface StatisticsProps
  extends HTMLAttributes<HTMLDivElement> {
  items?: StatisticData[];
  columns?: 1 | 2 | 3 | 4;
}

export interface StatisticProps
  extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  value: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  trend?: ReactNode;
}