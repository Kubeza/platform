"use client";

import { cn } from "@/lib/utils";

import type {
  SeparatorProps,
} from "./separator.types";

export function Separator({
  orientation = "horizontal",
  className,
  ...props
}: SeparatorProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal"
          ? "h-px w-full"
          : "h-full w-px",
        className,
      )}
      {...props}
    />
  );
}