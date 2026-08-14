"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface SidebarFooterProps
  extends HTMLAttributes<HTMLDivElement> {}

export function SidebarFooter({
  className,
  children,
  ...props
}: SidebarFooterProps) {
  return (
    <footer
      className={cn(
        "border-t border-border p-4",
        className,
      )}
      {...props}
    >
      {children}
    </footer>
  );
}