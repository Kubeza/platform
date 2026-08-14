"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface ContextMenuLabelProps
  extends HTMLAttributes<HTMLDivElement> {}

export function ContextMenuLabel({
  className,
  children,
  ...props
}: ContextMenuLabelProps) {
  return (
    <div
      className={cn(
        "px-3 py-2 text-xs font-semibold text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}