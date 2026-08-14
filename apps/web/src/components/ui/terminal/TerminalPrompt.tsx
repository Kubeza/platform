"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TerminalPromptProps
  extends HTMLAttributes<HTMLSpanElement> {
  user?: string;
  host?: string;
  path?: string;
}

export function TerminalPrompt({
  user = "user",
  host = "localhost",
  path = "~",
  className,
  ...props
}: TerminalPromptProps) {
  return (
    <span
      className={cn(
        "select-none font-mono text-sm",
        className,
      )}
      {...props}
    >
      <span className="text-green-400">
        {user}@{host}
      </span>
      <span className="text-white">:</span>
      <span className="text-blue-400">
        {path}
      </span>
      <span className="ml-1 text-white">$</span>
    </span>
  );
}