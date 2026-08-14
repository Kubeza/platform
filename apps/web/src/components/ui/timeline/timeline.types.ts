import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type TimelineDotStatus =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "running"
  | "pending"
  | "ai";

export interface TimelineDotProps
  extends HTMLAttributes<HTMLDivElement> {
  status?: TimelineDotStatus;
  icon?: ReactNode;
}

export type TimelineSeverity =
  | "info"
  | "success"
  | "warning"
  | "error";

export interface TimelineAction {
  id: string;
  label: string;
  onClick?: () => void;
}

export interface TimelineItemData {
  id: string;
  title: string;
  description?: string;
  timestamp: Date | string;
  severity?: TimelineSeverity;
  icon?: ReactNode;
  marker?: ReactNode;
  actions?: TimelineAction[];
  group?: string;
}

export interface TimelineContextValue {
  items: TimelineItemData[];
}

export interface TimelineProviderProps {
  items: TimelineItemData[];
  children: ReactNode;
}