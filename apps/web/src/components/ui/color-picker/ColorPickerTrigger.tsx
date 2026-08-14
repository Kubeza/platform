"use client";

import type {
  ButtonHTMLAttributes,
  MouseEvent,
} from "react";

import { cn } from "@/lib/utils";

import { useColorPicker } from "./useColorPicker";

export interface ColorPickerTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ColorPickerTrigger({
  className,
  children,
  onClick,
  ...props
}: ColorPickerTriggerProps) {
  const {
    value,
    open,
    setOpen,
  } = useColorPicker();

  function handleClick(
    event: MouseEvent<HTMLButtonElement>,
  ) {
    setOpen(!open);
    onClick?.(event);
  }

  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={handleClick}
      className={cn(
        "inline-flex h-10 items-center gap-2 rounded-md border border-input bg-background px-3 text-sm transition-colors hover:bg-accent",
        "focus:outline-none focus:ring-2 focus:ring-ring",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="h-4 w-4 rounded-full border"
        style={{
          backgroundColor: value,
        }}
      />

      {children}
    </button>
  );
}