"use client";

import { cn } from "@/lib/utils";

import type { NotificationSeverity } from "./notification.types";

export interface NotificationBadgeProps {
  severity?: NotificationSeverity;
  className?: string;
}

const severityStyles: Record<
  NotificationSeverity,
  string
> = {
  info: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  success:
    "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  warning:
    "bg-amber-500/10 text-amber-600 border-amber-500/20",
  error:
    "bg-red-500/10 text-red-600 border-red-500/20",
};

export function NotificationBadge({
  severity = "info",
  className,
}: NotificationBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-1 text-xs font-medium capitalize",
        severityStyles[severity],
        className,
      )}
    >
      {severity}
    </span>
  );
}