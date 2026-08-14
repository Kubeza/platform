"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useCombobox } from "./useCombobox";

export interface ComboboxContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export function ComboboxContent({
  className,
  children,
  ...props
}: ComboboxContentProps) {
  const { open } =
    useCombobox();

  if (!open) {
    return null;
  }

  return (
    <div
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