"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface MetricGridProps
  extends HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
}

const columnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4",
  5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
  6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
} as const;

export function MetricGrid({
  className,
  columns = 4,
  children,
  ...props
}: MetricGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4",
        columnClasses[columns],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}