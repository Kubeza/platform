"use client";

import type {
  ChangeEvent,
  LabelHTMLAttributes,
} from "react";

import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

import { useCheckboxGroup } from "./useCheckboxGroup";

export interface CheckboxGroupItemProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  value: string;
  label: string;
  disabled?: boolean;
}

export function CheckboxGroupItem({
  value,
  label,
  disabled,
  className,
  ...props
}: CheckboxGroupItemProps) {
  const {
    value: selectedValues,
    setValue,
    disabled: groupDisabled,
  } = useCheckboxGroup();

  const checked =
    selectedValues.includes(value);

  const isDisabled =
    disabled ?? groupDisabled;

  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    if (event.target.checked) {
      setValue([
        ...selectedValues,
        value,
      ]);
      return;
    }

    setValue(
      selectedValues.filter(
        (item) => item !== value,
      ),
    );
  }

  return (
    <label
      className={cn(
        "inline-flex cursor-pointer items-center gap-2",
        isDisabled &&
          "cursor-not-allowed opacity-50",
        className,
      )}
      {...props}
    >
      <span className="relative flex h-5 w-5 items-center justify-center rounded-sm border border-input">
        <input
          type="checkbox"
          checked={checked}
          disabled={isDisabled}
          onChange={handleChange}
          className="absolute inset-0 cursor-pointer opacity-0 disabled:cursor-not-allowed"
        />

        {checked && (
          <Check className="h-4 w-4" />
        )}
      </span>

      <span>{label}</span>
    </label>
  );
}