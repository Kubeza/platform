"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface DropdownMenuItemProps
  extends HTMLAttributes<HTMLDivElement> {
  inset?: boolean;
  disabled?: boolean;
}

export function DropdownMenuItem({
  className,
  children,
  inset = false,
  disabled = false,
  ...props
}: DropdownMenuItemProps) {
  return (
    <div
      role="menuitem"
      aria-disabled={disabled}
      data-disabled={
        disabled || undefined
      }
      className={cn(
        "flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "focus:bg-accent focus:text-accent-foreground",
        inset && "pl-8",
        disabled &&
          "pointer-events-none opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}