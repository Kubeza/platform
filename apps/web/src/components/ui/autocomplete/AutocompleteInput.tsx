"use client";

import type {
  ChangeEvent,
} from "react";

import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

import { useAutocomplete } from "./useAutocomplete";

import type {
  AutocompleteInputProps,
} from "./autocomplete.types";

export function AutocompleteInput({
  className,
  onChange,
  ...props
}: AutocompleteInputProps) {
  const {
    value,
    setValue,
    setOpen,
  } = useAutocomplete();

  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setValue(event.target.value);
    setOpen(true);

    onChange?.(event);
  }

  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <input
        value={value}
        onChange={handleChange}
        className={cn(
          "h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 text-sm outline-none",
          "focus:border-primary focus:ring-2 focus:ring-ring",
          className,
        )}
        {...props}
      />
    </div>
  );
}