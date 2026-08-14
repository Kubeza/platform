import type { Table } from "@tanstack/react-table";
import { BarChart3 } from "lucide-react";

interface DataGridColumnStatsProps<TData> {
  table: Table<TData>;
}

export default function DataGridColumnStats<TData>({
  table,
}: DataGridColumnStatsProps<TData>) {
  return (
    <div className="rounded-lg border p-4">
      <div className="mb-4 flex items-center gap-2">
        <BarChart3 className="h-4 w-4" />
        <h3 className="font-medium">
          Column Statistics
        </h3>
      </div>

      <div className="space-y-2">
        {table
          .getAllLeafColumns()
          .map((column) => (
            <div
              key={column.id}
              className="flex justify-between rounded border px-3 py-2"
            >
              <span>{column.id}</span>

              <span className="text-muted-foreground">
                {column.getIsVisible()
                  ? "Visible"
                  : "Hidden"}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}