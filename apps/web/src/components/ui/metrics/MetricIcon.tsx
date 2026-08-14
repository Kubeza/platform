"use client";

import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface MetricIconProps
  extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
}

export function MetricIcon({
  icon,
  className,
  ...props
}: MetricIconProps) {
  return (
    <div
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-xl border bg-muted/40 text-primary",
        className,
      )}
      {...props}
    >
      {icon}
    </div>
  );
}