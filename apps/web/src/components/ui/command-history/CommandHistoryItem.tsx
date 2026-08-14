"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface CommandHistoryItemProps
  extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

export function CommandHistoryItem({
  active = false,
  className,
  children,
  ...props
}: CommandHistoryItemProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 p-4 transition-colors",
        "hover:bg-muted/50",
        active && "bg-muted",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}