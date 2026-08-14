"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface NotificationListProps
  extends HTMLAttributes<HTMLDivElement> {}

export function NotificationList({
  className,
  children,
  ...props
}: NotificationListProps) {
  return (
    <div
      className={cn(
        "flex flex-col divide-y overflow-y-auto",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}