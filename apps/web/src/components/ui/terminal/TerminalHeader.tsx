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
        "flex shrink-0 items-center justify-between",
        "border-b border-white/[0.08]",
        "bg-[#070B16]",
        "px-4 py-3",
      "select-none",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}