"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface CommandHistoryCommandProps
  extends HTMLAttributes<HTMLPreElement> {}

export function CommandHistoryCommand({
  className,
  children,
  ...props
}: CommandHistoryCommandProps) {
  return (
    <pre
      className={cn(
        "overflow-x-auto whitespace-pre-wrap break-all rounded-md bg-muted px-3 py-2 font-mono text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </pre>
  );
}