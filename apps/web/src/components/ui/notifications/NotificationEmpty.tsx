"use client";

import type { HTMLAttributes } from "react";

import { BellOff } from "lucide-react";

import { cn } from "@/lib/utils";

export interface NotificationEmptyProps
  extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export function NotificationEmpty({
  title = "No notifications",
  description = "You're all caught up. New notifications will appear here.",
  className,
  ...props
}: NotificationEmptyProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-6 py-12 text-center",
        className,
      )}
      {...props}
    >
      <BellOff className="mb-4 h-10 w-10 text-muted-foreground" />

      <h3 className="text-base font-semibold">
        {title}
      </h3>

      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}