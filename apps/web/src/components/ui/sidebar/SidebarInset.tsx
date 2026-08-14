"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface SidebarInsetProps
  extends HTMLAttributes<HTMLDivElement> {}

export function SidebarInset({
  className,
  children,
  ...props
}: SidebarInsetProps) {
  return (
    <main
      className={cn(
        "min-w-0 flex-1 overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </main>
  );
}