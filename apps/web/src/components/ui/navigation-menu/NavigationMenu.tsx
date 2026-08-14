"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface NavigationMenuProps
  extends HTMLAttributes<HTMLElement> {}

export function NavigationMenu({
  className,
  children,
  ...props
}: NavigationMenuProps) {
  return (
    <nav
      aria-label="Navigation Menu"
      className={cn(
        "relative flex w-full items-center",
        className,
      )}
      {...props}
    >
      {children}
    </nav>
  );
}