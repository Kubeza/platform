"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useSlider } from "./useSlider";

export interface SliderProps
  extends HTMLAttributes<HTMLDivElement> {}

export function Slider({
  className,
  children,
  ...props
}: SliderProps) {
  const { disabled } =
    useSlider();

  return (
    <div
      aria-disabled={disabled}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        disabled &&
          "cursor-not-allowed opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}