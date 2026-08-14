import * as React from "react";

import { cn } from "@/lib/utils";

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface FormRadioGroupProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onChange"
  > {
  options: RadioOption[];
  value?: string;
  onChange: (value: string) => void;
}

export function FormRadioGroup({
  options,
  value,
  onChange,
  className,
  ...props
}: FormRadioGroupProps) {
  return (
    <div
      className={cn("space-y-3", className)}
      {...props}
    >
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-3"
        >
          <input
            type="radio"
            value={option.value}
            checked={value === option.value}
            disabled={option.disabled}
            onChange={() => onChange(option.value)}
          />

          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
}