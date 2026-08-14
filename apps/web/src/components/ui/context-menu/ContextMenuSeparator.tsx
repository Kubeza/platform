"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface ContextMenuSeparatorProps
  extends HTMLAttributes<HTMLDivElement> {}

export function ContextMenuSeparator({
  className,
  ...props
}: ContextMenuSeparatorProps) {
  return (
    <div
      role="separator"
      className={cn(
        "my-1 h-px bg-border",
        className,
      )}
      {...props}
    />
  );
}