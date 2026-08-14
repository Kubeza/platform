"use client";

import type {
  ChangeEvent,
} from "react";

import { cn } from "@/lib/utils";

import { useColorPicker } from "./useColorPicker";

import type {
  ColorPickerInputProps,
} from "./color-picker.types";

export function ColorPickerInput({
  className,
  onChange,
  ...props
}: ColorPickerInputProps) {
  const {
    value,
    setValue,
    setOpen,
  } = useColorPicker();

  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setValue(event.target.value);
    setOpen(true);

    onChange?.(event);
  }

  return (
    <input
      type="color"
      value={value}
      onChange={handleChange}
      className={cn(
        "h-10 w-14 cursor-pointer rounded-md border border-input bg-background p-1",
        className,
      )}
      {...props}
    />
  );
}