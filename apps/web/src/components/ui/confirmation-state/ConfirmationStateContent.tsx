"use client";

import { cn } from "@/lib/utils";

import type {
  ConfirmationStateContentProps,
} from "./confirmation-state.types";

export function ConfirmationStateContent({
  title,
  description,
  className,
  children,
  ...props
}: ConfirmationStateContentProps) {
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