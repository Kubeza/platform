"use client";

import { cn } from "@/lib/utils";

import { LoadingStateContent } from "./LoadingStateContent";
import { LoadingStateSpinner } from "./LoadingStateSpinner";

import type {
  LoadingStateProps,
} from "./loading-state.types";

export function LoadingState({
  label = "Loading...",
  description,
  size = "md",
  className,
  children,
  ...props
}: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex min-h-32 flex-col items-center justify-center gap-3 p-6",
        className,
      )}
      {...props}
    >
      <LoadingStateSpinner
        size={size}
      />

      <LoadingStateContent
        label={label}
        description={description}
      >
        {children}
      </LoadingStateContent>
    </div>
  );
}