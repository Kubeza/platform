"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface CommandHistoryFiltersProps
  extends HTMLAttributes<HTMLDivElement> {}

export function CommandHistoryFilters({
  className,
  children,
  ...props
}: CommandHistoryFiltersProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}