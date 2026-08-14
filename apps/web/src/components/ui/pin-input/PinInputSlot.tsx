"use client";

import { cn } from "@/lib/utils";

import { usePinInput } from "./usePinInput";

export interface PinInputSlotProps {
  index: number;
  className?: string;
}

export function PinInputSlot({
  index,
  className,
}: PinInputSlotProps) {
  const {
    value,
    length,
    disabled,
  } = usePinInput();

  const character =
    value[index] ?? "";

  return (
    <div
      role="textbox"
      aria-label={`PIN digit ${index + 1} of ${length}`}
      aria-disabled={disabled}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-sm font-medium",
        disabled &&
          "cursor-not-allowed opacity-50",
        className,
      )}
    >
      {character}
    </div>
  );
}