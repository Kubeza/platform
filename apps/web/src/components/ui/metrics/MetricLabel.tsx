"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface MetricLabelProps
  extends HTMLAttributes<HTMLHeadingElement> {}

export function MetricLabel({
  className,
  children,
  ...props
}: MetricLabelProps) {
  return (
    <h4
      className={cn(
        "text-sm font-medium text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
}