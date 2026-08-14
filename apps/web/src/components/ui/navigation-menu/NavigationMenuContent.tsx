"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useNavigationMenu } from "./useNavigationMenu";

export interface NavigationMenuContentProps
  extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function NavigationMenuContent({
  value,
  className,
  children,
  ...props
}: NavigationMenuContentProps) {
  const {
    value: activeValue,
  } = useNavigationMenu();

  if (activeValue !== value) {
    return null;
  }

  return (
    <div
      data-state="open"
      className={cn(
        "absolute left-0 top-full z-50 mt-2 min-w-64 rounded-lg border bg-background p-4 shadow-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}