"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Skeleton } from "../skeleton";

export interface TimelineSkeletonProps
  extends HTMLAttributes<HTMLDivElement> {
  rows?: number;
}

export function TimelineSkeleton({
  rows = 5,
  className,
  ...props
}: TimelineSkeletonProps) {
  return (
    <div
      className={cn("space-y-6 p-4", className)}
      {...props}
    >
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="flex gap-4"
        >
          <Skeleton className="h-10 w-10 rounded-full" />

          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-44" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}