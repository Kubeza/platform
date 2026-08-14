"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TerminalBodyProps
  extends HTMLAttributes<HTMLDivElement> {}

export function TerminalBody({
  className,
  children,
  ...props
}: TerminalBodyProps) {
  return (
    <div
      className={cn(
        "flex-1 overflow-auto bg-black p-4 font-mono text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}