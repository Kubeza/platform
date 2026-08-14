"use client";

import { TrendingDown, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";

interface MetricTrendProps {
  current: number;
  previous: number;
  showPercentage?: boolean;
  className?: string;
}

export function MetricTrend({
  current,
  previous,
  showPercentage = true,
  className,
}: MetricTrendProps) {
  const difference =
    current - previous;

  const percentage =
    previous === 0
      ? 0
      : (difference / previous) * 100;

  const positive =
    difference >= 0;

  return (
    <div
      className={cn(
        "flex items-center gap-1 text-sm font-medium",
        positive
          ? "text-emerald-600 dark:text-emerald-400"
          : "text-red-600 dark:text-red-400",
        className,
      )}
    >
      {positive ? (
        <TrendingUp className="h-4 w-4" />
      ) : (
        <TrendingDown className="h-4 w-4" />
      )}

      {showPercentage
        ? `${Math.abs(
            percentage,
          ).toFixed(1)}%`
        : Math.abs(difference)}
    </div>
  );
}