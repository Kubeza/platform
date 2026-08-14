"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Skeleton } from "../skeleton";

export interface CommandHistorySkeletonProps
  extends HTMLAttributes<HTMLDivElement> {
  rows?: number;
}

export function CommandHistorySkeleton({
  rows = 6,
  className,
  ...props
}: CommandHistorySkeletonProps) {
  return (
    <div
      className={cn(
        "space-y-4 p-4",
        className,
      )}
      {...props}
    >
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="space-y-3 rounded-lg border border-border p-4"
        >
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-16 w-full" />
          <div className="flex justify-between">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}