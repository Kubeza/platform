"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Skeleton } from "../skeleton";

export interface TerminalSkeletonProps
  extends HTMLAttributes<HTMLDivElement> {
  rows?: number;
}

export function TerminalSkeleton({
  rows = 12,
  className,
  ...props
}: TerminalSkeletonProps) {
  return (
    <div
      className={cn(
        "space-y-3 p-4",
        className,
      )}
      {...props}
    >
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-3"
        >
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 flex-1" />
        </div>
      ))}
    </div>
  );
}