import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface ChartGridProps
  extends HTMLAttributes<HTMLDivElement> {
  rows?: number;
  columns?: number;
}

export function ChartGrid({
  className,
  rows = 5,
  columns = 5,
  style,
  ...props
}: ChartGridProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none",
        className,
      )}
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${rows}, minmax(0,1fr))`,
        gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
        ...style,
      }}
      {...props}
    >
      {Array.from({
        length: rows * columns,
      }).map((_, index) => (
        <div
          key={index}
          className="border border-border/40"
        />
      ))}
    </div>
  );
}