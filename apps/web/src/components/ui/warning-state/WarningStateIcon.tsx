"use client";

import { cn } from "@/lib/utils";

import type {
  WarningStateIconProps,
} from "./warning-state.types";

export function WarningStateIcon({
  className,
  children,
  ...props
}: WarningStateIconProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-600",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}