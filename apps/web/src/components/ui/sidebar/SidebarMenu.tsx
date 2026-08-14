"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface SidebarMenuProps
  extends HTMLAttributes<HTMLUListElement> {}

export function SidebarMenu({
  className,
  children,
  ...props
}: SidebarMenuProps) {
  return (
    <ul
      className={cn(
        "space-y-1",
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
}