import {
  Download,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { useDataGridContext } from "./DataGrid";

export default function DataGridExport() {
  const { table } =
    useDataGridContext<any>();

  function exportCSV() {
    const rows =
      table
        .getFilteredRowModel()
        .rows;

    if (!rows.length) {
      return;
    }

    const headers =
      table
        .getVisibleLeafColumns()
        .map(
          (column) =>
            column.id,
        );

    const csv = [
      headers.join(","),
      ...rows.map((row) =>
        row
          .getVisibleCells()
          .map((cell) =>
            String(
              cell.getValue() ??
                "",
            ),
          )
          .join(","),
      ),
    ].join("\n");

    const blob =
      new Blob([csv], {
        type: "text/csv",
      });

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      "data.csv";

    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={exportCSV}
    >
      <Download className="mr-2 h-4 w-4" />
      Export CSV
    </Button>
  );
}