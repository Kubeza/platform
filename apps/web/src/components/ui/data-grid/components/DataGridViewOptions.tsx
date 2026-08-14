import {
  Eye,
  EyeOff,
  Settings2,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { useDataGridContext } from "./DataGrid";

export default function DataGridViewOptions() {
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
        <Settings2 className="h-4 w-4" />
        View
      </summary>

      <div
        className={cn(
          "absolute right-0 z-50 mt-2 w-72 rounded-xl border bg-background p-3 shadow-xl",
        )}
      >
        <div className="mb-3 border-b pb-2">
          <p className="text-sm font-semibold">
            Visible Columns
          </p>

          <p className="text-xs text-muted-foreground">
            Choose which columns are displayed.
          </p>
        </div>

        <div className="space-y-1">
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
              <span className="truncate capitalize">
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
      </div>
    </details>
  )
}