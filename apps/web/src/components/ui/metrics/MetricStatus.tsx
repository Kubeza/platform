"use client";

import { cn } from "@/lib/utils";

import type { MetricStatusType } from "./metric.types";

export interface MetricStatusProps {
  status: MetricStatusType;
  className?: string;
}

const statusStyles: Record<MetricStatusType, string> = {
  healthy:
    "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  warning:
    "bg-amber-500/10 text-amber-600 border-amber-500/20",
  critical:
    "bg-red-500/10 text-red-600 border-red-500/20",
  offline:
    "bg-muted text-muted-foreground border-border",
};

export function MetricStatus({
  status,
  className,
}: MetricStatusProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium capitalize",
        statusStyles[status],
        className,
      )}
    >
      <span className="mr-1.5 h-2 w-2 rounded-full bg-current opacity-80" />
      {status}
    </span>
  );
}