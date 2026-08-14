"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TerminalOutputProps
  extends HTMLAttributes<HTMLPreElement> {}

export function TerminalOutput({
  className,
  children,
  ...props
}: TerminalOutputProps) {
  return (
    <pre
      className={cn(
        "overflow-x-auto whitespace-pre-wrap break-words font-mono text-sm text-green-400",
        className,
      )}
      {...props}
    >
      {children}
    </pre>
  );
}