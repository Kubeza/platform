"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface CommandHistoryActionsProps
  extends HTMLAttributes<HTMLDivElement> {}

export function CommandHistoryActions({
  className,
  children,
  ...props
}: CommandHistoryActionsProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}