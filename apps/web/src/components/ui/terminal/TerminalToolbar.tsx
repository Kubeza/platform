"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TerminalToolbarProps
  extends HTMLAttributes<HTMLDivElement> {}

export function TerminalToolbar({
  className,
  children,
  ...props
}: TerminalToolbarProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 border-b border-white/10 bg-zinc-900 px-4 py-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}