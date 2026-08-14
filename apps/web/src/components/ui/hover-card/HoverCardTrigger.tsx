"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useHoverCard } from "./useHoverCard";

export interface HoverCardTriggerProps
  extends HTMLAttributes<HTMLDivElement> {}

export function HoverCardTrigger({
  className,
  children,
  onMouseEnter,
  onMouseLeave,
  ...props
}: HoverCardTriggerProps) {
  const {
    setOpen,
  } = useHoverCard();

  return (
    <div
      className={cn(
        "contents",
        className,
      )}
      onMouseEnter={(event) => {
        onMouseEnter?.(event);
        setOpen(true);
      }}
      onMouseLeave={(event) => {
        onMouseLeave?.(event);
        setOpen(false);
      }}
      {...props}
    >
      {children}
    </div>
  );
}