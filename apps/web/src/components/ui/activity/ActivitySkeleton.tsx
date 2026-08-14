"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Skeleton } from "../skeleton";

export interface ActivitySkeletonProps
  extends HTMLAttributes<HTMLDivElement> {
  rows?: number;
}

export function ActivitySkeleton({
  rows = 5,
  className,
  ...props
}: ActivitySkeletonProps) {
  return (
    <div
      className={cn("space-y-4 p-4", className)}
      {...props}
    >
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="flex items-start gap-4"
        >
          <Skeleton className="h-10 w-10 rounded-full" />

          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}