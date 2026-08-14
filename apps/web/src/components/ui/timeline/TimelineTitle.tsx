"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TimelineTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {}

export function TimelineTitle({
  className,
  children,
  ...props
}: TimelineTitleProps) {
  return (
    <h4
      className={cn(
        "text-sm font-semibold leading-none tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
}