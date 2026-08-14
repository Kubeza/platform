"use client";

import type { LiHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface SidebarMenuItemProps
  extends LiHTMLAttributes<HTMLLIElement> {}

export function SidebarMenuItem({
  className,
  children,
  ...props
}: SidebarMenuItemProps) {
  return (
    <li
      className={cn(
        "list-none",
        className,
      )}
      {...props}
    >
      {children}
    </li>
  );
}