"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Skeleton } from "../skeleton";

export interface CommandPaletteSkeletonProps
  extends HTMLAttributes<HTMLDivElement> {
  rows?: number;
}

export function CommandPaletteSkeleton({
  rows = 8,
  className,
  ...props
}: CommandPaletteSkeletonProps) {
  return (
    <div
      className={cn("space-y-2 p-4", className)}
      {...props}
    >
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-3 rounded-md border border-border p-3"
        >
          <Skeleton className="h-10 w-10 rounded-md" />

          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-3 w-64" />
          </div>

          <Skeleton className="h-6 w-16 rounded-md" />
        </div>
      ))}
    </div>
  );
}