"use client";

import { cn } from "@/lib/utils";

import { useColorPicker } from "./useColorPicker";

export interface ColorPickerSwatchProps {
  color: string;
  className?: string;
}

export function ColorPickerSwatch({
  color,
  className,
}: ColorPickerSwatchProps) {
  const {
    value,
    setValue,
  } = useColorPicker();

  const selected =
    value.toLowerCase() ===
    color.toLowerCase();

  return (
    <button
      type="button"
      aria-label={`Select color ${color}`}
      aria-pressed={selected}
      onClick={() => setValue(color)}
      className={cn(
        "h-8 w-8 rounded-full border-2 transition-transform hover:scale-110",
        selected &&
          "ring-2 ring-ring ring-offset-2",
        className,
      )}
      style={{
        backgroundColor: color,
      }}
    />
  );
}