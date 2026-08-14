"use client";

import { cn } from "@/lib/utils";

import type {
  SplitterPanelProps,
} from "./splitter.types";

export function SplitterPanel({
  defaultSize = 50,
  minSize = 0,
  maxSize = 100,
  className,
  children,
  style,
  ...props
}: SplitterPanelProps) {
  const size = Math.min(
    maxSize,
    Math.max(minSize, defaultSize),
  );

  return (
    <div
      className={cn(
        "min-h-0 min-w-0 shrink-0",
        className,
      )}
      style={{
        flexBasis: `${size}%`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}