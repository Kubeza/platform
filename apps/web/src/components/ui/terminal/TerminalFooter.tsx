"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TerminalFooterProps
  extends HTMLAttributes<HTMLDivElement> {}

export function TerminalFooter({
  className,
  children,
  ...props
}: TerminalFooterProps) {
  return (
    <div
      className={cn(
        "border-t border-white/10 bg-zinc-900 px-4 py-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}