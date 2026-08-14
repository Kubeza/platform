"use client";

import { cn } from "@/lib/utils";

import type {
  ErrorStateIconProps,
} from "./error-state.types";

export function ErrorStateIcon({
  className,
  children,
  ...props
}: ErrorStateIconProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}