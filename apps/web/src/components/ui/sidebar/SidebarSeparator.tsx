"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface SidebarSeparatorProps
  extends HTMLAttributes<HTMLHRElement> {}

export function SidebarSeparator({
  className,
  ...props
}: SidebarSeparatorProps) {
  return (
    <hr
      className={cn(
        "my-3 border-0 border-t border-border",
        className,
      )}
      {...props}
    />
  );
}