"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TimelineTimestampProps
  extends HTMLAttributes<HTMLTimeElement> {
  value?: Date | string;
}

export function TimelineTimestamp({
  value,
  className,
  children,
  ...props
}: TimelineTimestampProps) {
  const dateTime =
    value instanceof Date
      ? value.toISOString()
      : typeof value === "string"
        ? value
        : undefined;

  const content =
    children ??
    (value instanceof Date
      ? value.toLocaleString()
      : value);

  return (
    <time
      dateTime={dateTime}
      className={cn(
        "block text-xs text-muted-foreground",
        className,
      )}
      {...props}
    >
      {content}
    </time>
  );
}