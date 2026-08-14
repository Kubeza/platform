"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useContextMenu } from "./useContextMenu";

export interface ContextMenuProps
  extends HTMLAttributes<HTMLDivElement> {}

export function ContextMenu({
  className,
  children,
  ...props
}: ContextMenuProps) {
  const { open } =
    useContextMenu();

  return (
    <div
      data-state={
        open ? "open" : "closed"
      }
      className={cn(
        "relative w-full",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}