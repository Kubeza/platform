import type { NotificationSeverity } from "./notification.types";

export const NOTIFICATION_SEVERITIES: NotificationSeverity[] = [
  "info",
  "success",
  "warning",
  "error",
];

export const DEFAULT_NOTIFICATION_FILTER = "all";

export const NOTIFICATION_GROUPS = {
  TODAY: "Today",
  YESTERDAY: "Yesterday",
  EARLIER: "Earlier",
} as const;

export const NOTIFICATION_BADGE_CLASSES: Record<
  NotificationSeverity,
  string
> = {
  info: "bg-blue-500/10 text-blue-600",
  success: "bg-emerald-500/10 text-emerald-600",
  warning: "bg-amber-500/10 text-amber-600",
  error: "bg-red-500/10 text-red-600",
};