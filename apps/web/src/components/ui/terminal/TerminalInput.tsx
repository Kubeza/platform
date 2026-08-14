"use client";

import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Input } from "../input";

export interface TerminalInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {}

export function TerminalInput({
  className,
  ...props
}: TerminalInputProps) {
  return (
    <Input
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck={false}
      className={cn(
        "border-0 bg-transparent px-0 font-mono text-sm text-green-400 shadow-none focus-visible:ring-0",
        className,
      )}
      {...props}
    />
  );
}