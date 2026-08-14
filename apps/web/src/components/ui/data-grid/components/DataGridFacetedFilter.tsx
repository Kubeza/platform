import { Check, ChevronDown } from "lucide-react";
import type { Column } from "@tanstack/react-table";

import { cn } from "@/lib/utils";

interface DataGridFacetedFilterOption {
  label: string;
  value: string;
  icon?: React.ComponentType<{
    className?: string;
  }>;
}

interface DataGridFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title: string;
  options: DataGridFacetedFilterOption[];
}

export default function DataGridFacetedFilter<
  TData,
  TValue,
>({
  column,
  title,
  options,
}: DataGridFacetedFilterProps<
  TData,
  TValue
>) {
  const selectedValues =
    new Set(
      (column?.getFilterValue() as string[]) ??
        [],
    );

  function toggleValue(
    value: string,
  ) {
    const next =
      new Set(selectedValues);

    if (next.has(value)) {
      next.delete(value);
    } else {
      next.add(value);
    }

    const values =
      Array.from(next);

    column?.setFilterValue(
      values.length
        ? values
        : undefined,
    );
  }

  return (
    <details className="relative">
      <summary className="flex cursor-pointer list-none items-center gap-2 rounded-md border bg-background px-3 py-2 text-sm">
        {title}

        {selectedValues.size >
          0 && (
          <span className="rounded bg-primary px-2 py-0.5 text-xs text-primary-foreground">
            {selectedValues.size}
          </span>
        )}

        <ChevronDown className="ml-auto h-4 w-4" />
      </summary>

      <div className="absolute z-50 mt-2 w-64 rounded-lg border bg-background p-2 shadow-lg">
        {options.map((option) => {
          const selected =
            selectedValues.has(
              option.value,
            );

          const Icon =
            option.icon;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() =>
                toggleValue(
                  option.value,
                )
              }
              className={cn(
                "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm hover:bg-muted",
              )}
            >
              <div
                className={cn(
                  "flex h-4 w-4 items-center justify-center rounded border",
                  selected &&
                    "bg-primary text-primary-foreground",
                )}
              >
                {selected && (
                  <Check className="h-3 w-3" />
                )}
              </div>

              {Icon && (
                <Icon className="h-4 w-4 text-muted-foreground" />
              )}

              <span className="flex-1">
                {option.label}
              </span>
            </button>
          );
        })}

        {selectedValues.size >
          0 && (
          <>
            <div className="my-2 border-t" />

            <button
              type="button"
              onClick={() =>
                column?.setFilterValue(
                  undefined,
                )
              }
              className="w-full rounded-md px-3 py-2 text-sm text-primary hover:bg-muted"
            >
              Clear Filters
            </button>
          </>
        )}
      </div>
    </details>
  );
}