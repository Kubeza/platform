"use client";

import { cn } from "@/lib/utils";

import type {
  ErrorStateContentProps,
} from "./error-state.types";

export function ErrorStateContent({
  title,
  description,
  className,
  children,
  ...props
}: ErrorStateContentProps) {
  return (
    <div
      className={cn(
        "space-y-2 text-center",
        className,
      )}
      {...props}
    >
      {title && (
        <h3 className="text-base font-semibold">
          {title}
        </h3>
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