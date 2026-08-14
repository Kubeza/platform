"use client";

import { cn } from "@/lib/utils";

export interface MetricProgressProps {
  value: number;
  max?: number;
  className?: string;
  indicatorClassName?: string;
}

export function MetricProgress({
  value,
  max = 100,
  className,
  indicatorClassName,
}: MetricProgressProps) {
  const percentage = Math.min(
    Math.max((value / max) * 100, 0),
    100,
  );

  return (
    <div
      className={cn(
        "h-2 w-full overflow-hidden rounded-full bg-muted",
        className,
      )}
    >
      <div
        className={cn(
          "h-full rounded-full bg-primary transition-all duration-300",
          indicatorClassName,
        )}
        style={{
          width: `${percentage}%`,
        }}
      />
    </div>
  );
}