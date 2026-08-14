import type { ReactNode } from "react";

export type ActivitySeverity =
  | "info"
  | "success"
  | "warning"
  | "error";

export interface ActivityAction {
  id: string;
  label: string;
  onClick?: () => void;
}

export interface ActivityItemData {
  id: string;
  title: string;
  description?: string;
  timestamp: Date | string;
  severity?: ActivitySeverity;
  avatar?: ReactNode;
  icon?: ReactNode;
  actions?: ActivityAction[];
  group?: string;
}

export interface ActivityContextValue {
  activities: ActivityItemData[];
}

export interface ActivityProviderProps {
  activities: ActivityItemData[];
  children: ReactNode;
}