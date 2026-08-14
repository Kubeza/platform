"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useSlider } from "./useSlider";

export interface SliderRangeProps
  extends HTMLAttributes<HTMLDivElement> {}

export function SliderRange({
  className,
  style,
  ...props
}: SliderRangeProps) {
  const {
    value,
    min,
    max,
  } = useSlider();

  const percentage =
    ((value - min) / (max - min)) * 100;

  return (
    <div
      className={cn(
        "absolute h-full rounded-full bg-primary",
        className,
      )}
      style={{
        width: `${percentage}%`,
        ...style,
      }}
      {...props}
    />
  );
}