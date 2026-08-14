"use client";

import { cn } from "@/lib/utils";

import type {
  LoadingStateSpinnerProps,
} from "./loading-state.types";

const sizes = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-[3px]",
};

export function LoadingStateSpinner({
  size = "md",
  className,
  ...props
}: LoadingStateSpinnerProps) {
  return (
    <div
      role="progressbar"
      aria-label="Loading"
      className={cn(
        "animate-spin rounded-full border-muted border-t-foreground",
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}