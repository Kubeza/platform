import { RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";

import DataGridExport from "./DataGridExport";
import DataGridViewOptions from "./DataGridViewOptions";
import { useDataGridContext } from "./DataGrid";

interface DataGridToolbarActionsProps {
  onRefresh?: () => void;
}

export default function DataGridToolbarActions({
  onRefresh,
}: DataGridToolbarActionsProps) {
  const { table } =
    useDataGridContext<any>();

  const hasRows =
    table.getRowModel().rows.length > 0;

  return (
    <div className="flex items-center gap-2">
      {onRefresh && (
        <Button
          variant="outline"
          size="sm"
          onClick={onRefresh}
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      )}

      <DataGridExport />

      <DataGridViewOptions />

      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          table.resetSorting();
          table.resetColumnFilters();
          table.resetGlobalFilter();
        }}
        disabled={!hasRows}
      >
        Reset
      </Button>
    </div>
  );
}