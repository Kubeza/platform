"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface TabsProps
  extends HTMLAttributes<HTMLDivElement> {}

export function Tabs({
  className,
  children,
  ...props
}: TabsProps) {
  return (
    <div
      className={cn(
        "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}