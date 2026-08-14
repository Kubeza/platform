"use client";

import { cn } from "@/lib/utils";

import type {
  SuccessStateContentProps,
} from "./success-state.types";

export function SuccessStateContent({
  title,
  description,
  className,
  children,
  ...props
}: SuccessStateContentProps) {
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