"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface CommandPaletteDialogProps
  extends HTMLAttributes<HTMLDivElement> {}

export function CommandPaletteDialog({
  className,
  children,
  ...props
}: CommandPaletteDialogProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-8 backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}