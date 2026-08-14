import type {
  MouseEventHandler,
} from "react";

import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface DataGridColumnHeaderProps {
  title: string;

  sortable?: boolean;

  direction?:
    | "asc"
    | "desc"
    | null;

  onSort?: MouseEventHandler<HTMLButtonElement>;

  className?: string;
}

export default function DataGridColumnHeader({
  title,
  sortable = false,
  direction = null,
  onSort,
  className,
}: DataGridColumnHeaderProps) {
  return (
    <button
      type="button"
      onClick={onSort}
      disabled={!sortable}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium transition-colors",
        sortable &&
          "cursor-pointer hover:text-primary",
        !sortable &&
          "cursor-default",
        className,
      )}
    >
      <span>{title}</span>

      {sortable && (
        <>
          {direction === null && (
            <ArrowUpDown className="h-4 w-4 opacity-50" />
          )}

          {direction === "asc" && (
            <ArrowUp className="h-4 w-4" />
          )}

          {direction === "desc" && (
            <ArrowDown className="h-4 w-4" />
          )}
        </>
      )}
    </button>
  );
}