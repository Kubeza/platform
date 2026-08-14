"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface ComboboxProps
  extends HTMLAttributes<HTMLDivElement> {}

export function Combobox({
  className,
  children,
  ...props
}: ComboboxProps) {
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