"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface CommandHistoryTimestampProps
  extends HTMLAttributes<HTMLTimeElement> {
  value: Date | string;
}

export function CommandHistoryTimestamp({
  value,
  className,
  ...props
}: CommandHistoryTimestampProps) {
  const date =
    value instanceof Date
      ? value
      : new Date(value);

  return (
    <time
      dateTime={date.toISOString()}
      className={cn(
        "text-xs text-muted-foreground",
        className,
      )}
      {...props}
    >
      {date.toLocaleString()}
    </time>
  );
}