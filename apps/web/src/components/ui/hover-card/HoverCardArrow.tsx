"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface HoverCardArrowProps
  extends HTMLAttributes<HTMLDivElement> {}

export function HoverCardArrow({
  className,
  ...props
}: HoverCardArrowProps) {
  return (
    <div
      className={cn(
        "absolute -top-2 left-4 h-4 w-4 rotate-45 border-l border-t bg-background",
        className,
      )}
      {...props}
    />
  );
}