"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface CommandHistoryOutputProps
  extends HTMLAttributes<HTMLPreElement> {}

export function CommandHistoryOutput({
  className,
  children,
  ...props
}: CommandHistoryOutputProps) {
  return (
    <pre
      className={cn(
        "overflow-x-auto whitespace-pre-wrap break-words rounded-md border border-border bg-muted/40 p-3 font-mono text-sm text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </pre>
  );
}