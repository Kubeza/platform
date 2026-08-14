"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface CommandHistoryHeaderProps
  extends HTMLAttributes<HTMLDivElement> {}

export function CommandHistoryHeader({
  className,
  children,
  ...props
}: CommandHistoryHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b border-border px-4 py-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}