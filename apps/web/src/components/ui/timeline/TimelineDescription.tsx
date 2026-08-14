"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TimelineDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export function TimelineDescription({
  className,
  children,
  ...props
}: TimelineDescriptionProps) {
  return (
    <p
      className={cn(
        "text-sm leading-relaxed text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}