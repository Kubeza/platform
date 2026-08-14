"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface DropdownMenuProps
  extends HTMLAttributes<HTMLDivElement> {}

export function DropdownMenu({
  className,
  children,
  ...props
}: DropdownMenuProps) {
  return (
    <div
      className={cn(
        "relative inline-block",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}