"use client";

import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

import { useCheckbox } from "./useCheckbox";

export interface CheckboxIndicatorProps {
  className?: string;
}

export function CheckboxIndicator({
  className,
}: CheckboxIndicatorProps) {
  const { checked } =
    useCheckbox();

  if (!checked) {
    return null;
  }

  return (
    <Check
      className={cn(
        "h-4 w-4",
        className,
      )}
    />
  );
}