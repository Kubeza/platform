"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface SidebarGroupProps
  extends HTMLAttributes<HTMLDivElement> {}

export function SidebarGroup({
  className,
  children,
  ...props
}: SidebarGroupProps) {
  return (
    <section
      className={cn(
        "space-y-2 px-2 py-3",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}