"use client";

import type {
  ChangeEvent,
} from "react";

import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

import { useCommand } from "./useCommand";

import type {
  CommandInputProps,
} from "./command.types";

export function CommandInput({
  className,
  onChange,
  ...props
}: CommandInputProps) {
  const {
    query,
    setQuery,
    setOpen,
  } = useCommand();

  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setQuery(event.target.value);
    setOpen(true);
    onChange?.(event);
  }

  return (
    <div className="flex items-center border-b px-3">
      <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />

      <input
        value={query}
        onChange={handleChange}
        className={cn(
          "flex h-10 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    </div>
  );
}