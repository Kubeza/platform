"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface AutocompleteProps
  extends HTMLAttributes<HTMLDivElement> {}

export function Autocomplete({
  className,
  children,
  ...props
}: AutocompleteProps) {
  return (
    <div
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