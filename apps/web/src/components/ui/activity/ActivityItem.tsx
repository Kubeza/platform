"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface ActivityItemProps
  extends HTMLAttributes<HTMLDivElement> {
  highlighted?: boolean;
}

export function ActivityItem({
  highlighted = false,
  className,
  children,
  ...props
}: ActivityItemProps) {
  return (
    <div
      className={cn(
        "flex gap-4 p-4 transition-colors hover:bg-muted/40",
        highlighted && "bg-primary/5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}