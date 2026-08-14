"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface ScrollAreaProps
  extends HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal" | "both";
}

export function ScrollArea({
  orientation = "vertical",
  className,
  children,
  ...props
}: ScrollAreaProps) {
  return (
    <div
      className={cn(
        "relative",
        orientation === "vertical" &&
          "overflow-y-auto overflow-x-hidden",
        orientation === "horizontal" &&
          "overflow-x-auto overflow-y-hidden",
        orientation === "both" &&
          "overflow-auto",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}