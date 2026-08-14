"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TimelineItemProps
  extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

export function TimelineItem({
  active = false,
  className,
  children,
  ...props
}: TimelineItemProps) {
  return (
    <div
      className={cn(
        "relative flex gap-4 pb-8",
        active && "opacity-100",
        !active && "opacity-90",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}