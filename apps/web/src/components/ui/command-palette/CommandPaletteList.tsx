"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface CommandPaletteListProps
  extends HTMLAttributes<HTMLDivElement> {}

export function CommandPaletteList({
  className,
  children,
  ...props
}: CommandPaletteListProps) {
  return (
    <div
      className={cn(
        "max-h-96 overflow-y-auto py-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}