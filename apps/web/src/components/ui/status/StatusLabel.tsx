"use client";

import { cn } from "@/lib/utils";

import type {
  StatusLabelProps,
} from "./status.types";

export function StatusLabel({
  className,
  children,
  ...props
}: StatusLabelProps) {
  return (
    <span
      className={cn(
        "text-sm font-medium leading-none",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}