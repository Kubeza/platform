"use client";

import { cn } from "@/lib/utils";

import type {
  StatisticProps,
} from "./statistics.types";

export function Statistic({
  label,
  value,
  description,
  icon,
  trend,
  className,
  ...props
}: StatisticProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-background p-5",
        className,
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {label}
          </div>

          <div className="mt-2 text-2xl font-semibold tracking-tight">
            {value}
          </div>
        </div>

        {icon && (
          <div className="shrink-0 rounded-md bg-muted p-2 text-muted-foreground">
            {icon}
          </div>
        )}
      </div>

      {(description || trend) && (
        <div className="mt-3 flex items-center justify-between gap-3 text-xs">
          {description && (
            <span className="text-muted-foreground">
              {description}
            </span>
          )}

          {trend && (
            <span className="font-medium">
              {trend}
            </span>
          )}
        </div>
      )}
    </div>
  );
}