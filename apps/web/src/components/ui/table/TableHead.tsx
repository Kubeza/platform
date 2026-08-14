import { forwardRef } from "react";

import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
} from "lucide-react";

import { cn } from "@/lib/cn";

import type {
  TableHeadProps,
} from "./table.types";

const TableHead = forwardRef<
  HTMLTableCellElement,
  TableHeadProps
>(
  (
    {
      children,
      className,
      sortable = false,
      sorted = false,
      onClick,
      ...props
    },
    ref,
  ) => {
    const ariaSort =
      sorted === "asc"
        ? "ascending"
        : sorted === "desc"
          ? "descending"
          : sortable
            ? "none"
            : undefined;

    return (
      <th
        ref={ref}
        scope="col"
        aria-sort={ariaSort}
        onClick={onClick}
        className={cn(
          "h-12 whitespace-nowrap px-4 text-left align-middle text-sm font-semibold text-slate-200",

          sortable &&
            "cursor-pointer select-none transition-colors hover:bg-slate-800/60",

          className,
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          <span className="truncate">
            {children}
          </span>

          {sortable &&
            (sorted ===
            "asc" ? (
              <ArrowUp className="h-4 w-4 shrink-0 text-indigo-400" />
            ) : sorted ===
              "desc" ? (
              <ArrowDown className="h-4 w-4 shrink-0 text-indigo-400" />
            ) : (
              <ArrowUpDown className="h-4 w-4 shrink-0 text-slate-500" />
            ))}
        </div>
      </th>
    );
  },
);

TableHead.displayName =
  "TableHead";

export default TableHead;