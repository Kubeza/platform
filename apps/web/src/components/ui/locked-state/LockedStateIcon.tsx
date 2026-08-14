"use client";

import { cn } from "@/lib/utils";

import type {
  LockedStateIconProps,
} from "./locked-state.types";

export function LockedStateIcon({
  className,
  children,
  ...props
}: LockedStateIconProps) {
  return (
    <div
      aria-hidden="true"
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