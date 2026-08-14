"use client";

import { cn } from "@/lib/utils";

import type {
  NotFoundStateContentProps,
} from "./not-found-state.types";

export function NotFoundStateContent({
  title,
  description,
  className,
  children,
  ...props
}: NotFoundStateContentProps) {
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