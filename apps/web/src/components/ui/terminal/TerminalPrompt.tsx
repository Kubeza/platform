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
        "inline-flex shrink-0 select-none items-center font-mono text-[13px] leading-6",
        className,
      )}
      {...props}
    >
      <span className="font-semibold text-[#67E8F9]">
        {user}
      </span>

      <span className="text-slate-600">
        @
      </span>

      <span className="font-medium text-[#4F46E5]">
        {host}
      </span>

      <span className="mx-1 text-slate-600">
        :
      </span>

      <span className="text-sky-400">
        {path}
      </span>

      <span className="ml-2 font-semibold text-slate-300">
        $
      </span>
    </span>
  );
}