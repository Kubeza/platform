"use client";

import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TerminalInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {}

export function TerminalInput({
  className,
  ...props
}: TerminalInputProps) {
  return (
    <input
      type="text"
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck={false}
      className={cn(
        "min-w-0 flex-1 border-0 bg-transparent p-0 font-mono text-sm leading-6 text-slate-200 outline-none placeholder:text-slate-700 focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}