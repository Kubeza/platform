"use client";

import type {
  ChangeEvent,
} from "react";

import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

import { useCombobox } from "./useCombobox";

import type {
  ComboboxInputProps,
} from "./combobox.types";

export function ComboboxInput({
  className,
  onChange,
  ...props
}: ComboboxInputProps) {
  const {
    value,
    setValue,
    setOpen,
  } = useCombobox();

  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setValue(event.target.value);
    setOpen(true);

    onChange?.(event);
  }

  return (
    <div className="relative">
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
      />

      <input
        {...props}
        value={value}
        onChange={handleChange}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 text-sm outline-none transition-colors focus:border-primary",
          className,
        )}
      />
    </div>
  );
}