import type { Table } from "@tanstack/react-table";
import { Columns3 } from "lucide-react";

interface DataGridColumnChooserProps<TData> {
  table: Table<TData>;
}

export default function DataGridColumnChooser<TData>({
  table,
}: DataGridColumnChooserProps<TData>) {
  return (
    <div className="rounded-lg border p-4">
      <div className="mb-4 flex items-center gap-2">
        <Columns3 className="h-4 w-4" />
        <h3 className="font-medium">
          Column Chooser
        </h3>
      </div>

      <div className="space-y-2">
        {table
          .getAllLeafColumns()
          .map((column) => (
            <label
              key={column.id}
              className="flex items-center justify-between"
            >
              <span>{column.id}</span>

              <input
                type="checkbox"
                checked={column.getIsVisible()}
                onChange={column.getToggleVisibilityHandler()}
              />
            </label>
          ))}
      </div>
    </div>
  );
}