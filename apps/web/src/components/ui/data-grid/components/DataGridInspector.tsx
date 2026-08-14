import type { Table } from "@tanstack/react-table";
import { Bug } from "lucide-react";

interface DataGridInspectorProps<TData> {
  table: Table<TData>;
}

export default function DataGridInspector<TData>({
  table,
}: DataGridInspectorProps<TData>) {
  const state = table.getState();

  return (
    <div className="rounded-lg border p-4">
      <div className="mb-4 flex items-center gap-2">
        <Bug className="h-4 w-4" />
        <h3 className="font-medium">
          DataGrid Inspector
        </h3>
      </div>

      <pre className="overflow-auto rounded-md bg-muted p-4 text-xs">
        {JSON.stringify(
          state,
          null,
          2,
        )}
      </pre>
    </div>
  );
}