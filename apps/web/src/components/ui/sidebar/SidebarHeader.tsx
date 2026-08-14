"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface SidebarHeaderProps
  extends HTMLAttributes<HTMLDivElement> {}

export function SidebarHeader({
  className,
  children,
  ...props
}: SidebarHeaderProps) {
  return (
    <header
      className={cn(
        "flex items-center border-b border-border px-4 py-4",
        className,
      )}
      {...props}
    >
      {children}
    </header>
  );
}