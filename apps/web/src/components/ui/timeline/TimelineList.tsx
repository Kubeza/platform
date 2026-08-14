"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TimelineListProps
  extends HTMLAttributes<HTMLDivElement> {}

export function TimelineList({
  className,
  children,
  ...props
}: TimelineListProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}