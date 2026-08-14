"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface CommandPaletteFooterProps
  extends HTMLAttributes<HTMLDivElement> {}

export function CommandPaletteFooter({
  className,
  children,
  ...props
}: CommandPaletteFooterProps) {
  return (
    <footer
      className={cn(
        "flex items-center justify-between border-t border-border px-4 py-3 text-xs text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </footer>
  );
}