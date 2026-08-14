"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TerminalLineProps
  extends HTMLAttributes<HTMLDivElement> {}

export function TerminalLine({
  className,
  children,
  ...props
}: TerminalLineProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-2 font-mono text-sm leading-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}