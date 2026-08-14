"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TerminalHeaderProps
  extends HTMLAttributes<HTMLDivElement> {}

export function TerminalHeader({
  className,
  children,
  ...props
}: TerminalHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b border-white/10 bg-zinc-900 px-4 py-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}