import * as React from "react";

import { cn } from "@/lib/utils";

export interface CheckboxOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface FormCheckboxGroupProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onChange"
  > {
  options: CheckboxOption[];
  value: string[];
  onChange: (value: string[]) => void;
}

export function FormCheckboxGroup({
  options,
  value,
  onChange,
  className,
  ...props
}: FormCheckboxGroupProps) {
  const toggle = (item: string) => {
    if (value.includes(item)) {
      onChange(value.filter((v) => v !== item));
    } else {
      onChange([...value, item]);
    }
  };

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
            type="checkbox"
            checked={value.includes(option.value)}
            disabled={option.disabled}
            onChange={() => toggle(option.value)}
          />

          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
}