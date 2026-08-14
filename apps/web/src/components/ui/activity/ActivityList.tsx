"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface ActivityListProps
  extends HTMLAttributes<HTMLDivElement> {}

export function ActivityList({
  className,
  children,
  ...props
}: ActivityListProps) {
  return (
    <div
      className={cn(
        "flex flex-col divide-y overflow-y-auto",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}