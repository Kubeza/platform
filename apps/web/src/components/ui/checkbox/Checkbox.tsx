"use client";

import type {
  ChangeEvent,
} from "react";

import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

import { useCheckbox } from "./useCheckbox";

import type {
  CheckboxProps,
} from "./checkbox.types";

export function Checkbox({
  className,
  onChange,
  ...props
}: CheckboxProps) {
  const {
    checked,
    setChecked,
    disabled,
  } = useCheckbox();

  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setChecked(event.target.checked);
    onChange?.(event);
  }

  return (
    <label
      className={cn(
        "inline-flex cursor-pointer items-center gap-2",
        disabled &&
          "cursor-not-allowed opacity-50",
        className,
      )}
    >
      <span className="relative flex h-5 w-5 items-center justify-center rounded border border-border bg-background">
        <input
          {...props}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className="absolute inset-0 cursor-pointer opacity-0"
        />

        {checked && (
          <Check className="h-4 w-4" />
        )}
      </span>
    </label>
  );
}