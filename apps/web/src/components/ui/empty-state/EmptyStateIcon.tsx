"use client";

import { cn } from "@/lib/utils";

import type {
  EmptyStateIconProps,
} from "./empty-state.types";

export function EmptyStateIcon({
  className,
  children,
  ...props
}: EmptyStateIconProps) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}