"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useContextMenu } from "./useContextMenu";

export interface ContextMenuContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export function ContextMenuContent({
  className,
  children,
  ...props
}: ContextMenuContentProps) {
  const {
    open,
    x,
    y,
  } = useContextMenu();

  if (!open) {
    return null;
  }

  return (
    <div
      role="menu"
      data-state="open"
      className={cn(
        "fixed z-50 min-w-40 rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        className,
      )}
      style={{
        left: x,
        top: y,
      }}
      {...props}
    >
      {children}
    </div>
  );
}