"use client";

import type {
  LiHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface NavigationMenuItemProps
  extends LiHTMLAttributes<HTMLLIElement> {}

export function NavigationMenuItem({
  className,
  children,
  ...props
}: NavigationMenuItemProps) {
  return (
    <li
      className={cn(
        "relative list-none",
        className,
      )}
      {...props}
    >
      {children}
    </li>
  );
}