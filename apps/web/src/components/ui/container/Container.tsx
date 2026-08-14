"use client";

import { cn } from "@/lib/utils";

import type {
  ContainerProps,
} from "./container.types";

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

export function Container({
  size = "xl",
  centered = true,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full px-4 sm:px-6 lg:px-8",
        sizes[size],
        centered && "mx-auto",
        className,
      )}
      {...props}
    />
  );
}