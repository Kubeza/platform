"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface SidebarGroupContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export function SidebarGroupContent({
  className,
  children,
  ...props
}: SidebarGroupContentProps) {
  return (
    <div
      className={cn(
        "mt-2 space-y-1",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}