"use client";

import { cn } from "@/lib/utils";

import type {
  NotFoundStateIconProps,
} from "./not-found-state.types";

export function NotFoundStateIcon({
  className,
  children,
  ...props
}: NotFoundStateIconProps) {
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