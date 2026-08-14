"use client";

import { cn } from "@/lib/utils";

import { useSwitch } from "./useSwitch";

export interface SwitchThumbProps {
  className?: string;
}

export function SwitchThumb({
  className,
}: SwitchThumbProps) {
  const { checked } =
    useSwitch();

  return (
    <span
      className={cn(
        "block h-5 w-5 rounded-full bg-background shadow transition-transform",
        checked &&
          "translate-x-5",
        className,
      )}
    />
  );
}