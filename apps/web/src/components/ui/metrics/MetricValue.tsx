"use client";

import { cn } from "@/lib/utils";

interface MetricValueProps {
  value: number | string;
  unit?: string;
  prefix?: string;
  suffix?: string;
  className?: string;
  formatter?: (value: number | string) => string;
}

export function MetricValue({
  value,
  unit,
  prefix,
  suffix,
  className,
  formatter,
}: MetricValueProps) {
  const displayValue = formatter
    ? formatter(value)
    : value;

  return (
    <div
      className={cn(
        "flex items-end gap-1",
        className,
      )}
    >
      {prefix && (
        <span className="text-lg font-medium text-muted-foreground">
          {prefix}
        </span>
      )}

      <span className="text-3xl font-bold tracking-tight">
        {displayValue}
      </span>

      {unit && (
        <span className="pb-1 text-sm text-muted-foreground">
          {unit}
        </span>
      )}

      {suffix && (
        <span className="pb-1 text-sm text-muted-foreground">
          {suffix}
        </span>
      )}
    </div>
  );
}