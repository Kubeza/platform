"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface SidebarContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export function SidebarContent({
  className,
  children,
  ...props
}: SidebarContentProps) {
  return (
    <div
      className={cn(
        "flex-1 overflow-y-auto overflow-x-hidden px-2 py-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}