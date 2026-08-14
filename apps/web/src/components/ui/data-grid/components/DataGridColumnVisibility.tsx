import {
  Eye,
  EyeOff,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { useDataGridContext } from "./DataGrid";

export default function DataGridColumnVisibility() {
  const { table } =
    useDataGridContext<any>();

  const columns = table
    .getAllLeafColumns()
    .filter((column) => column.getCanHide());

  return (
    <details className="relative">
      <summary
        className={cn(
          "flex cursor-pointer list-none items-center gap-2 rounded-lg border bg-background px-3 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted",
        )}
      >
        <Eye className="h-4 w-4" />

        Columns
      </summary>

      <div
        className={cn(
          "absolute right-0 z-50 mt-2 w-64 rounded-xl border bg-background p-2 shadow-xl",
        )}
      >
        {columns.length === 0 && (
          <div className="px-3 py-2 text-sm text-muted-foreground">
            No columns available.
          </div>
        )}

        {columns.map((column) => (
          <button
            key={column.id}
            type="button"
            onClick={() =>
              column.toggleVisibility()
            }
            className={cn(
              "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
            )}
          >
            <span className="truncate">
              {column.id}
            </span>

            {column.getIsVisible() ? (
              <Eye className="h-4 w-4 text-primary" />
            ) : (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        ))}
      </div>
    </details>
  );
}