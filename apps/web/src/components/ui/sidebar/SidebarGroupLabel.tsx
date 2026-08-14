"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface SidebarGroupLabelProps
  extends HTMLAttributes<HTMLHeadingElement> {}

export function SidebarGroupLabel({
  className,
  children,
  ...props
}: SidebarGroupLabelProps) {
  return (
    <h3
      className={cn(
        "px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}