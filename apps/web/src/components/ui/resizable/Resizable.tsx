"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export interface ResizableProps
  extends HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical";
}

export function Resizable({
  direction = "horizontal",
  className,
  children,
  ...props
}: ResizableProps) {
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