"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface NotificationItemProps
  extends HTMLAttributes<HTMLDivElement> {
  unread?: boolean;
}

export function NotificationItem({
  unread = false,
  className,
  children,
  ...props
}: NotificationItemProps) {
  return (
    <div
      className={cn(
        "relative flex gap-4 p-4 transition-colors hover:bg-muted/40",
        unread && "bg-primary/5",
        className,
      )}
      {...props}
    >
      {unread && (
        <span className="absolute left-2 top-5 h-2 w-2 rounded-full bg-primary" />
      )}

      <div className="flex-1 min-w-0">
        {children}
      </div>
    </div>
  );
}