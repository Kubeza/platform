"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface CommandPaletteShortcutProps
  extends HTMLAttributes<HTMLDivElement> {
  keys: string[];
}

export function CommandPaletteShortcut({
  keys,
  className,
  ...props
}: CommandPaletteShortcutProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1",
        className,
      )}
      {...props}
    >
      {keys.map((key) => (
        <kbd
          key={key}
          className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium uppercase text-muted-foreground"
        >
          {key}
        </kbd>
      ))}
    </div>
  );
}