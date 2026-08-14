import {
  Database,
  Filter,
  Rows3,
} from "lucide-react";

import { useDataGridContext } from "./DataGrid";

export default function DataGridStatusBar() {
  const { table } =
    useDataGridContext<any>();

  const rowCount =
    table.getRowModel().rows.length;

  const filterCount =
    table.getState()
      .columnFilters.length;

  const selectedCount =
    table
      .getFilteredSelectedRowModel()
      .rows.length;

  return (
    <footer className="flex flex-wrap items-center gap-6 border-t bg-background px-4 py-2 text-sm">
      <div className="flex items-center gap-2">
        <Database className="h-4 w-4" />
        {rowCount} Rows
      </div>

      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4" />
        {filterCount} Filters
      </div>

      <div className="flex items-center gap-2">
        <Rows3 className="h-4 w-4" />
        {selectedCount} Selected
      </div>
    </footer>
  );
}