"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface MenubarProps
  extends HTMLAttributes<HTMLElement> {}

export function Menubar({
  className,
  children,
  ...props
}: MenubarProps) {
  return (
    <nav
      aria-label="Menubar"
      className={cn(
        "flex items-center gap-1 rounded-lg border bg-background p-1",
        className,
      )}
      {...props}
    >
      {children}
    </nav>
  );
}