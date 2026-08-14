"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface MenubarMenuProps
  extends HTMLAttributes<HTMLDivElement> {}

export function MenubarMenu({
  className,
  children,
  ...props
}: MenubarMenuProps) {
  return (
    <div
      className={cn(
        "relative",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}