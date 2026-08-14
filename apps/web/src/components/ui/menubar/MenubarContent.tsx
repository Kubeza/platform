"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useMenubar } from "./useMenubar";

export interface MenubarContentProps
  extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function MenubarContent({
  value,
  className,
  children,
  ...props
}: MenubarContentProps) {
  const {
    value: activeValue,
  } = useMenubar();

  if (activeValue !== value) {
    return null;
  }

  return (
    <div
      data-state="open"
      className={cn(
        "absolute left-0 top-full z-50 mt-2 min-w-56 rounded-md border bg-popover p-2 shadow-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}