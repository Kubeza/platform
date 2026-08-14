"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface HoverCardProps
  extends HTMLAttributes<HTMLDivElement> {}

export function HoverCard({
  className,
  children,
  ...props
}: HoverCardProps) {
  return (
    <div
      className={cn(
        "relative inline-block",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}