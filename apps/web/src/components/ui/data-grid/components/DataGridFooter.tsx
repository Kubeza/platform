import { useDataGridContext } from "./DataGrid";

import DataGridBulkActions from "./DataGridBulkActions";
import DataGridPageSize from "./DataGridPageSize";
import DataGridPagination from "./DataGridPagination";

export default function DataGridFooter() {
  const { table } =
    useDataGridContext<any>();

  const selectedCount =
    table.getFilteredSelectedRowModel().rows.length;

  const filteredCount =
    table.getFilteredRowModel().rows.length;

  const totalCount =
    table.getCoreRowModel().rows.length;

  return (
    <footer className="flex flex-col gap-4 border-t bg-background px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-sm text-muted-foreground">
          {selectedCount} of {filteredCount} row
          {filteredCount !== 1 ? "s" : ""} selected
        </span>

        <span className="text-sm text-muted-foreground">
          Total: {totalCount}
        </span>

        <DataGridBulkActions />
      </div>

      <div className="flex items-center gap-4">
        <DataGridPageSize />
        <DataGridPagination />
      </div>
    </footer>
  );
}