"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface SidebarRailProps
  extends HTMLAttributes<HTMLDivElement> {}

export function SidebarRail({
  className,
  ...props
}: SidebarRailProps) {
  return (
    <div
      className={cn(
        "w-1 shrink-0 bg-border",
        className,
      )}
      {...props}
    />
  );
}