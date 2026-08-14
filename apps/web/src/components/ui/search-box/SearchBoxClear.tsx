"use client";

import { X } from "lucide-react";

import { cn } from "@/lib/utils";

import { useSearchBox } from "./useSearchBox";

export interface SearchBoxClearProps {
  className?: string;
}

export function SearchBoxClear({
  className,
}: SearchBoxClearProps) {
  const {
    value,
    clear,
  } = useSearchBox();

  if (!value) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Clear search"
      onClick={clear}
      className={cn(
        "rounded-sm p-1 text-muted-foreground transition-colors",
        "hover:bg-accent hover:text-foreground",
        className,
      )}
    >
      <X className="h-4 w-4" />
    </button>
  );
}