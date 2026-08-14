"use client";

import { cn } from "@/lib/utils";

import type {
  GridProps,
} from "./grid.types";

const columns = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  12: "grid-cols-12",
};

const gaps = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
};

export function Grid({
  columns: columnCount = 1,
  gap = 4,
  className,
  ...props
}: GridProps) {
  return (
    <div
      className={cn(
        "grid",
        columns[columnCount],
        gaps[gap],
        className,
      )}
      {...props}
    />
  );
}