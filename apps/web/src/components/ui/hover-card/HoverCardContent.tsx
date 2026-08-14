"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { useHoverCard } from "./useHoverCard";

export interface HoverCardContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export function HoverCardContent({
  className,
  children,
  ...props
}: HoverCardContentProps) {
  const { open } = useHoverCard();

  if (!open) {
    return null;
  }

  return (
    <div
      role="dialog"
      className={cn(
        "absolute left-0 top-full z-50 mt-2 w-72 rounded-lg border bg-background p-4 shadow-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}