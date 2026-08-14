"use client";

import { cn } from "@/lib/utils";

import type {
  WarningStateContentProps,
} from "./warning-state.types";

export function WarningStateContent({
  title,
  description,
  className,
  children,
  ...props
}: WarningStateContentProps) {
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