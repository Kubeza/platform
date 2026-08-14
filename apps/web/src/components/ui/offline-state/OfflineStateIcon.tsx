"use client";

import { cn } from "@/lib/utils";

import type {
  OfflineStateIconProps,
} from "./offline-state.types";

export function OfflineStateIcon({
  className,
  children,
  ...props
}: OfflineStateIconProps) {
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