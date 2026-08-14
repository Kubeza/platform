"use client";

import type {
  AnchorHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface NavigationMenuLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function NavigationMenuLink({
  className,
  children,
  ...props
}: NavigationMenuLinkProps) {
  return (
    <a
      className={cn(
        "flex rounded-md px-3 py-2 text-sm transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}