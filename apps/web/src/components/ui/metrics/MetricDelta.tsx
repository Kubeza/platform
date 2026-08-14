"use client";

import { TrendingDown, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";

export interface MetricDeltaProps {
  current: number;
  previous: number;
  precision?: number;
  showIcon?: boolean;
  className?: string;
}

export function MetricDelta({
  current,
  previous,
  precision = 1,
  showIcon = true,
  className,
}: MetricDeltaProps) {
  const delta = current - previous;

  const percent =
    previous === 0
      ? 0
      : (delta / previous) * 100;

  const positive = delta >= 0;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium",
        positive
          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          : "bg-red-500/10 text-red-600 dark:text-red-400",
        className,
      )}
    >
      {showIcon &&
        (positive ? (
          <TrendingUp className="h-3.5 w-3.5" />
        ) : (
          <TrendingDown className="h-3.5 w-3.5" />
        ))}

      {positive ? "+" : ""}
      {percent.toFixed(precision)}%
    </div>
  );
}