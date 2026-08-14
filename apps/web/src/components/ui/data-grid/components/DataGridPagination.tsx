import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { useDataGridContext } from "./DataGrid";

export default function DataGridPagination() {
  const { table } =
    useDataGridContext<any>();

  return (
    <div className="flex items-center justify-between border-t px-4 py-3">
      <div className="text-sm text-muted-foreground">
        Page{" "}
        {table.getState().pagination
          .pageIndex + 1}{" "}
        of {table.getPageCount()}
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            table.previousPage()
          }
          disabled={
            !table.getCanPreviousPage()
          }
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            table.nextPage()
          }
          disabled={
            !table.getCanNextPage()
          }
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}