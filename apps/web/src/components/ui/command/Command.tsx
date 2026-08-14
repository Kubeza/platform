"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useCommand } from "./useCommand";

export interface CommandProps
  extends HTMLAttributes<HTMLDivElement> {}

export function Command({
  className,
  children,
  ...props
}: CommandProps) {
  const { open } =
    useCommand();

  return (
    <div
      role="menu"
      data-state={
        open ? "open" : "closed"
      }
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}