"use client";

import { cn } from "@/lib/utils";

import type {
  ResizablePanelProps,
} from "./resizable.types";

export function ResizablePanel({
  defaultSize = 50,
  minSize = 0,
  maxSize = 100,
  className,
  children,
  style,
  ...props
}: ResizablePanelProps) {
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