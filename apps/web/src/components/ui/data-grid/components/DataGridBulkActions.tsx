import {
  Trash2,
  Download,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { useDataGridContext } from "./DataGrid";

export default function DataGridBulkActions() {
  const { table } =
    useDataGridContext<any>();

  const selectedRows =
    table.getFilteredSelectedRowModel().rows;

  if (selectedRows.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center justify-between rounded-lg border bg-muted/40 px-4 py-3">
      <div className="text-sm font-medium">
        {selectedRows.length} row
        {selectedRows.length > 1
          ? "s"
          : ""}{" "}
        selected
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
        >
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>

        <Button
          variant="outline"
          size="sm"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() =>
            table.resetRowSelection()
          }
        >
          <X className="mr-2 h-4 w-4" />
          Clear
        </Button>
      </div>
    </div>
  );
}