"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface SplitterProps
  extends HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical";
}

export function Splitter({
  direction = "horizontal",
  className,
  children,
  ...props
}: SplitterProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full",
        direction === "horizontal"
          ? "flex-row"
          : "flex-col",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}