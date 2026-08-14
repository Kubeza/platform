import type { ReactNode } from "react";

export type NotificationSeverity =
  | "info"
  | "success"
  | "warning"
  | "error";

export interface NotificationAction {
  id: string;
  label: string;
  onClick?: () => void;
}

export interface NotificationItemData {
  id: string;
  title: string;
  description?: string;
  timestamp: Date | string;
  read?: boolean;
  severity?: NotificationSeverity;
  avatar?: ReactNode;
  actions?: NotificationAction[];
  group?: string;
}

export interface NotificationContextValue {
  notifications: NotificationItemData[];
  unreadCount: number;
}

export interface NotificationProviderProps {
  notifications: NotificationItemData[];
  children: ReactNode;
}