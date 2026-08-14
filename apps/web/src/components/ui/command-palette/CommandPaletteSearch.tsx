"use client";

import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Input } from "../input";

export interface CommandPaletteSearchProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size"
  > {}

export function CommandPaletteSearch({
  className,
  ...props
}: CommandPaletteSearchProps) {
  return (
    <div className="border-b border-border p-3">
      <Input
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        placeholder="Search commands..."
        className={cn(
          "border-0 bg-transparent shadow-none focus-visible:ring-0",
          className,
        )}
        {...props}
      />
    </div>
  );
}