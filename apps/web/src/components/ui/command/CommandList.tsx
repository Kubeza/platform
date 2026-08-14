"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useCommand } from "./useCommand";

export interface CommandListProps
  extends HTMLAttributes<HTMLDivElement> {}

export function CommandList({
  className,
  children,
  ...props
}: CommandListProps) {
  const { open } =
    useCommand();

  if (!open) {
    return null;
  }

  return (
    <div
      role="listbox"
      className={cn(
        "max-h-72 overflow-y-auto overflow-x-hidden p-1",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}