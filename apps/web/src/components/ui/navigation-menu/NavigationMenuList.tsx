"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface NavigationMenuListProps
  extends HTMLAttributes<HTMLUListElement> {}

export function NavigationMenuList({
  className,
  children,
  ...props
}: NavigationMenuListProps) {
  return (
    <ul
      className={cn(
        "flex items-center gap-1",
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
}