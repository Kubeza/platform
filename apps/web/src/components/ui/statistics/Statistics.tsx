"use client";

import { cn } from "@/lib/utils";

import { Statistic } from "./Statistic";

import type {
  StatisticsProps,
} from "./statistics.types";

export function Statistics({
  items = [],
  columns = 4,
  className,
  children,
  ...props
}: StatisticsProps) {
  return (
    <div
      className={cn(
        "grid gap-4",
        columns === 1 &&
          "grid-cols-1",
        columns === 2 &&
          "grid-cols-1 sm:grid-cols-2",
        columns === 3 &&
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 &&
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
      {...props}
    >
      {items.map((item) => (
        <Statistic
          key={item.id}
          label={item.label}
          value={item.value}
          description={
            item.description
          }
          icon={item.icon}
          trend={item.trend}
        />
      ))}

      {children}
    </div>
  );
}