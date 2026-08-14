"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import type { ActivitySeverity } from "./activity.types";

export interface ActivityBadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  severity?: ActivitySeverity;
}

const severityClasses: Record<ActivitySeverity, string> = {
  info: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  success: "bg-green-500/10 text-green-600 dark:text-green-400",
  warning: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  error: "bg-red-500/10 text-red-600 dark:text-red-400",
};

export function ActivityBadge({
  severity = "info",
  className,
  children,
  ...props
}: ActivityBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        severityClasses[severity],
        className,
      )}
      {...props}
    >
      {children ?? severity}
    </span>
  );
}