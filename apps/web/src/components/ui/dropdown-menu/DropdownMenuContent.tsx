"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useDropdownMenu } from "./useDropdownMenu";

export interface DropdownMenuContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export function DropdownMenuContent({
  className,
  children,
  ...props
}: DropdownMenuContentProps) {
  const {
    open,
    setOpen,
  } = useDropdownMenu();

  if (!open) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={() => setOpen(false)}
      />

      <div
        role="menu"
        data-state="open"
        className={cn(
          "absolute left-0 top-full z-50 mt-2 min-w-56 rounded-md border bg-popover p-1 shadow-lg",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
}