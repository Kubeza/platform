import * as React from "react";

import { cn } from "@/lib/utils";

export interface SwitchOption {
  id: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
}

interface FormSwitchGroupProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onChange"
  > {
  options: SwitchOption[];
  onChange: (
    id: string,
    checked: boolean,
  ) => void;
}

export function FormSwitchGroup({
  options,
  onChange,
  className,
  ...props
}: FormSwitchGroupProps) {
  return (
    <div
      className={cn("space-y-4", className)}
      {...props}
    >
      {options.map((option) => (
        <label
          key={option.id}
          className="flex items-center justify-between"
        >
          <span>{option.label}</span>

          <input
            type="checkbox"
            checked={option.checked}
            disabled={option.disabled}
            onChange={(event) =>
              onChange(
                option.id,
                event.target.checked,
              )
            }
          />
        </label>
      ))}
    </div>
  );
}