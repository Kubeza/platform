"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TerminalCursorProps
  extends HTMLAttributes<HTMLSpanElement> {
  blinking?: boolean;
}

export function TerminalCursor({
  blinking = true,
  className,
  ...props
}: TerminalCursorProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block h-5 w-2 bg-green-400 align-middle",
        blinking && "animate-pulse",
        className,
      )}
      {...props}
    />
  );
}