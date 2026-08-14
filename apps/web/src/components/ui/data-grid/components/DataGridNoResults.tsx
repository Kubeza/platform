import { SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useDataGridContext } from "./DataGrid";

export default function DataGridNoResults() {
  const { table } =
    useDataGridContext<any>();

  function handleReset() {
    table.resetGlobalFilter();
    table.resetColumnFilters();
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <div className="rounded-full border p-4">
        <SearchX className="h-10 w-10 text-muted-foreground" />
      </div>

      <div className="space-y-1">
        <h3 className="text-lg font-semibold">
          No matching results
        </h3>

        <p className="max-w-md text-sm text-muted-foreground">
          No rows match your current search or filter
          criteria. Try adjusting your filters or reset
          them to view all data.
        </p>
      </div>

      <Button
        variant="outline"
        onClick={handleReset}
      >
        Clear Filters
      </Button>
    </div>
  );
}