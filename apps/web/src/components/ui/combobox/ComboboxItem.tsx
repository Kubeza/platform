"use client";

import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

import { useCombobox } from "./useCombobox";

import type {
  ComboboxItemProps,
} from "./combobox.types";

export function ComboboxItem({
  item,
}: ComboboxItemProps) {
  const {
    value,
    setValue,
    setOpen,
  } = useCombobox();

  const selected =
    value === item.value;

  return (
    <button
      type="button"
      disabled={item.disabled}
      onClick={() => {
        setValue(item.value);
        setOpen(false);
      }}
      className={cn(
        "flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-sm transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
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