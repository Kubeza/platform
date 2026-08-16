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
        "mt-1 max-w-full overflow-x-hidden",
        "whitespace-pre-wrap break-words",
        "font-mono text-[13px] leading-6",
        "text-slate-400",
        className,
      )}
      {...props}
    >
      {children}
    </pre>
  );
}