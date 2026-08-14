"use client";

import type {
  ChangeEvent,
} from "react";

import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

import { useRadioGroup } from "./useRadioGroup";

import type {
  RadioGroupItemProps,
} from "./radio-group.types";

export function RadioGroupItem({
  value,
  children,
  className,
  onChange,
  ...props
}: RadioGroupItemProps) {
  const {
    value: selectedValue,
    setValue,
    disabled,
  } = useRadioGroup();

  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setValue(value);
    onChange?.(event);
  }

  const checked =
    selectedValue === value;

  return (
    <label
      className={cn(
        "inline-flex cursor-pointer items-center gap-2",
        disabled &&
          "cursor-not-allowed opacity-50",
        className,
      )}
    >
      <span className="relative flex h-5 w-5 items-center justify-center rounded-full border border-border">
        <input
          {...props}
          type="radio"
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className="absolute inset-0 opacity-0"
        />

        {checked && (
          <Circle className="h-3 w-3 fill-current" />
        )}
      </span>

      {children}
    </label>
  );
}