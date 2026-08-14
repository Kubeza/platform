"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TimelineContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export function TimelineContent({
  className,
  children,
  ...props
}: TimelineContentProps) {
  return (
    <div
      className={cn(
        "min-w-0 flex-1 space-y-2 pb-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}