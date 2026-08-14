"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface ActivityTimestampProps
  extends HTMLAttributes<HTMLTimeElement> {
  value?: Date | string;
}

export function ActivityTimestamp({
  value,
  className,
  children,
  ...props
}: ActivityTimestampProps) {
  const date =
    value instanceof Date
      ? value.toISOString()
      : typeof value === "string"
        ? value
        : undefined;

  return (
    <time
      dateTime={date}
      className={cn(
        "mt-2 block text-xs text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children ?? (typeof value === "string" ? value : "")}
    </time>
  );
}