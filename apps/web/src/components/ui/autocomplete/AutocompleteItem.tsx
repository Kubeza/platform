"use client";

import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

import { useAutocomplete } from "./useAutocomplete";

import type {
  AutocompleteItemProps,
} from "./autocomplete.types";

export function AutocompleteItem({
  item,
}: AutocompleteItemProps) {
  const {
    value,
    setValue,
    setOpen,
  } = useAutocomplete();

  const selected =
    value === item.value;

  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      onClick={() => {
        setValue(item.value);
        setOpen(false);
      }}
      className={cn(
        "flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-sm transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        selected &&
          "bg-accent text-accent-foreground",
      )}
    >
      <span>{item.label}</span>

      {selected && (
        <Check className="h-4 w-4" />
      )}
    </button>
  );
}