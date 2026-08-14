"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { useAutocomplete } from "./useAutocomplete";

export interface AutocompleteListProps
  extends HTMLAttributes<HTMLDivElement> {}

export function AutocompleteList({
  className,
  children,
  ...props
}: AutocompleteListProps) {
  const { open } = useAutocomplete();

  if (!open) {
    return null;
  }

  return (
    <div
      role="listbox"
      className={cn(
        "absolute z-50 mt-2 max-h-72 w-full overflow-auto rounded-md border bg-popover p-1 shadow-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}