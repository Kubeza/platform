"use client";

import { cn } from "@/lib/utils";

import type {
  MasonryProps,
} from "./masonry.types";

import {
  clampMasonryColumns,
  getMasonryGap,
} from "./masonry.utils";

export function Masonry({
  columns = 3,
  gap = 4,
  className,
  children,
  style,
  ...props
}: MasonryProps) {
  const safeColumns =
    clampMasonryColumns(columns);

  return (
    <div
      className={cn(
        "columns-1",
        className,
      )}
      style={{
        columnCount: safeColumns,
        columnGap: getMasonryGap(gap),
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}