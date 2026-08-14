"use client";

import { cn } from "@/lib/utils";

import type {
  PermissionStateIconProps,
} from "./permission-state.types";

export function PermissionStateIcon({
  className,
  children,
  ...props
}: PermissionStateIconProps) {
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