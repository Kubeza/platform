"use client";

import type {
  HTMLAttributes,
  MouseEvent,
} from "react";

import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

import { useCommand } from "./useCommand";

export interface CommandItemProps
  extends HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  disabled?: boolean;
}

export function CommandItem({
  value: itemValue,
  label,
  disabled = false,
  className,
  onClick,
  ...props
}: CommandItemProps) {
  const {
    value,
    setValue,
    setOpen,
  } = useCommand();

  const selected =
    value === itemValue;

  function handleClick(
    event: MouseEvent<HTMLDivElement>,
  ) {
    if (disabled) {
      return;
    }

    setValue(itemValue);
    setOpen(false);
    onClick?.(event);
  }

  return (
    <div
      role="option"
      aria-selected={selected}
      aria-disabled={disabled}
      data-value={itemValue}
      onClick={handleClick}
      className={cn(
        "flex cursor-pointer items-center justify-between rounded-sm px-3 py-2 text-sm outline-none transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        selected &&
          "bg-accent text-accent-foreground",
        disabled &&
          "pointer-events-none opacity-50",
        className,
      )}
      {...props}
    >
      <span>{label}</span>

      {selected && (
        <Check className="h-4 w-4" />
      )}
    </div>
  );
}