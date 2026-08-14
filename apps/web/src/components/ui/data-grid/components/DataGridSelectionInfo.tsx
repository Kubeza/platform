import { useDataGridContext } from "./DataGrid";

export default function DataGridSelectionInfo() {
  const { table } =
    useDataGridContext<any>();

  const selected =
    table
      .getFilteredSelectedRowModel()
      .rows.length;

  const filtered =
    table
      .getFilteredRowModel()
      .rows.length;

  const total =
    table
      .getCoreRowModel()
      .rows.length;

  return (
    <div className="flex items-center gap-6 rounded-md border bg-muted/40 px-4 py-2 text-sm">
      <span>
        Selected:{" "}
        <strong>{selected}</strong>
      </span>

      <span>
        Filtered:{" "}
        <strong>{filtered}</strong>
      </span>

      <span>
        Total:{" "}
        <strong>{total}</strong>
      </span>
    </div>
  );
}