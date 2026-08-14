"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface ColorPickerProps
  extends HTMLAttributes<HTMLDivElement> {}

export function ColorPicker({
  className,
  children,
  ...props
}: ColorPickerProps) {
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