"use client";

import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

export interface TimelineMarkerProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function TimelineMarker({
  children,
  className,
  ...props
}: TimelineMarkerProps) {
  return (
    <div
      className={cn(
        "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-background shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}