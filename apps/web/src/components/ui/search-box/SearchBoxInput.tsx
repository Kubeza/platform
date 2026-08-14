"use client";

import type {
  ChangeEvent,
} from "react";

import {
  Search,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { useSearchBox } from "./useSearchBox";

import type {
  SearchBoxInputProps,
} from "./search-box.types";

export function SearchBoxInput({
  className,
  onChange,
  ...props
}: SearchBoxInputProps) {
  const {
    value,
    setValue,
    clear,
  } = useSearchBox();

  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setValue(event.target.value);
    onChange?.(event);
  }

  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <input
        type="search"
        value={value}
        onChange={handleChange}
        className={cn(
          "h-10 w-full rounded-md border border-input bg-background pl-10 pr-10 text-sm outline-none",
          "focus:border-primary focus:ring-2 focus:ring-ring",
          className,
        )}
        {...props}
      />

      {value && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={clear}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}