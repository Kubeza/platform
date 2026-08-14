import {
  Columns3,
  PanelLeft,
  PanelRight,
  PinOff,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { useDataGridContext } from "./DataGrid";

export default function DataGridColumnPinning() {
  const { table } =
    useDataGridContext<any>();

  const columns = table
    .getAllLeafColumns()
    .filter((column) => column.getCanPin?.());

  return (
    <details className="relative">
      <summary
        className={cn(
          "flex cursor-pointer list-none items-center gap-2 rounded-lg border bg-background px-3 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted",
        )}
      >
        <Columns3 className="h-4 w-4" />
        Pin Columns
      </summary>

      <div
        className={cn(
          "absolute right-0 z-50 mt-2 w-72 rounded-xl border bg-background p-3 shadow-xl",
        )}
      >
        <div className="mb-3 border-b pb-2">
          <p className="text-sm font-semibold">
            Column Pinning
          </p>

          <p className="text-xs text-muted-foreground">
            Pin columns to the left or right side of the
            table.
          </p>
        </div>

        <div className="space-y-2">
          {columns.map((column) => {
            const pinned =
              column.getIsPinned?.();

            return (
              <div
                key={column.id}
                className="flex items-center justify-between rounded-md border p-2"
              >
                <span className="truncate text-sm font-medium">
                  {column.id}
                </span>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className={cn(
                      "rounded p-2 transition-colors hover:bg-muted",
                      pinned === "left" &&
                        "bg-primary text-primary-foreground",
                    )}
                    onClick={() =>
                      column.pin("left")
                    }
                    title="Pin Left"
                  >
                    <PanelLeft className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    className={cn(
                      "rounded p-2 transition-colors hover:bg-muted",
                      pinned === "right" &&
                        "bg-primary text-primary-foreground",
                    )}
                    onClick={() =>
                      column.pin("right")
                    }
                    title="Pin Right"
                  >
                    <PanelRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    className={cn(
                      "rounded p-2 transition-colors hover:bg-muted",
                      !pinned &&
                        "bg-primary text-primary-foreground",
                    )}
                    onClick={() =>
                      column.pin(false)
                    }
                    title="Unpin"
                  >
                    <PinOff className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </details>
  );
}