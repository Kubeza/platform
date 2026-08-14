"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface NotificationTimestampProps
  extends HTMLAttributes<HTMLTimeElement> {
  value: Date | string;
  formatter?: (value: Date | string) => string;
}

export function NotificationTimestamp({
  value,
  formatter,
  className,
  ...props
}: NotificationTimestampProps) {
  const date =
    typeof value === "string"
      ? new Date(value)
      : value;

  const displayValue = formatter
    ? formatter(value)
    : new Intl.DateTimeFormat(undefined, {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(date);

  return (
    <time
      dateTime={date.toISOString()}
      className={cn(
        "text-xs text-muted-foreground",
        className,
      )}
      {...props}
    >
      {displayValue}
    </time>
  );
}