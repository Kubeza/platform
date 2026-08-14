"use client";

import type {
  HTMLAttributes,
  KeyboardEvent,
} from "react";

import { cn } from "@/lib/utils";

import { useSlider } from "./useSlider";

export interface SliderThumbProps
  extends HTMLAttributes<HTMLDivElement> {}

export function SliderThumb({
  className,
  style,
  onKeyDown,
  ...props
}: SliderThumbProps) {
  const {
    value,
    setValue,
    min,
    max,
    disabled,
  } = useSlider();

  const percentage =
    max > min
      ? ((value - min) / (max - min)) * 100
      : 0;

  function handleKeyDown(
    event: KeyboardEvent<HTMLDivElement>,
  ) {
    if (disabled) {
      return;
    }

    const step = (max - min) / 100;

    let nextValue = value;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowUp":
        nextValue = Math.min(
          max,
          value + step,
        );
        break;

      case "ArrowLeft":
      case "ArrowDown":
        nextValue = Math.max(
          min,
          value - step,
        );
        break;

      case "Home":
        nextValue = min;
        break;

      case "End":
        nextValue = max;
        break;

      default:
        onKeyDown?.(event);
        return;
    }

    event.preventDefault();
    setValue(nextValue);
    onKeyDown?.(event);
  }

  return (
    <div
      {...props}
      role="slider"
      tabIndex={disabled ? -1 : 0}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-disabled={disabled}
      onKeyDown={handleKeyDown}
      className={cn(
        "absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background shadow transition-transform",
        disabled &&
          "opacity-50",
        className,
      )}
      style={{
        left: `${percentage}%`,
        ...style,
      }}
    />
  );
}