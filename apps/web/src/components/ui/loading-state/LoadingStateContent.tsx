"use client";

import { cn } from "@/lib/utils";

import type {
  LoadingStateContentProps,
} from "./loading-state.types";

export function LoadingStateContent({
  label,
  description,
  className,
  children,
  ...props
}: LoadingStateContentProps) {
  return (
    <div
      className={cn(
        "space-y-1 text-center",
        className,
      )}
      {...props}
    >
      {label && (
        <p className="text-sm font-medium">
          {label}
        </p>
      )}

      {description && (
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      )}

      {children}
    </div>
  );
}