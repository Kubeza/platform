"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TimelineConnectorProps
  extends HTMLAttributes<HTMLDivElement> {
  hidden?: boolean;
}

export function TimelineConnector({
  hidden = false,
  className,
  ...props
}: TimelineConnectorProps) {
  if (hidden) {
    return null;
  }

  return (
    <div
      className={cn(
        "absolute left-5 top-10 h-full w-px bg-border",
        className,
      )}
      {...props}
    />
  );
}