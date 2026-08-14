"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface SidebarMenuBadgeProps
  extends HTMLAttributes<HTMLSpanElement> {}

export function SidebarMenuBadge({
  className,
  children,
  ...props
}: SidebarMenuBadgeProps) {
  return (
    <span
      className={cn(
        "ml-auto inline-flex min-w-5 items-center justify-center rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}