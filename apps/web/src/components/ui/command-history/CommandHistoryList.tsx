"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface CommandHistoryListProps
  extends HTMLAttributes<HTMLDivElement> {}

export function CommandHistoryList({
  className,
  children,
  ...props
}: CommandHistoryListProps) {
  return (
    <div
      className={cn(
        "flex flex-col divide-y divide-border overflow-y-auto",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}