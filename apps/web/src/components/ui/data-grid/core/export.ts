import type {
  Cell,
  Row,
  Table,
} from "@tanstack/react-table";

export interface ExportOptions {
  fileName?: string;
  onlySelected?: boolean;
}

function escapeCSV(value: unknown): string {
  if (value === null || value === undefined) {
    return "";
  }

  const text = String(value);

  if (
    text.includes(",") ||
    text.includes('"') ||
    text.includes("\n")
  ) {
    return `"${text.replace(/"/g, '""')}"`;
  }

  return text;
}

function getRows<T>(
  table: Table<T>,
  onlySelected: boolean,
): Row<T>[] {
  return onlySelected
    ? table.getFilteredSelectedRowModel().rows
    : table.getFilteredRowModel().rows;
}

function getHeaders<T>(
  table: Table<T>,
): string[] {
  return table
    .getVisibleLeafColumns()
    .map((column) => column.id);
}

function getRowValues<T>(
  row: Row<T>,
): string[] {
  return row
    .getVisibleCells()
    .map((cell: Cell<T, unknown>) =>
      escapeCSV(cell.getValue()),
    );
}

export function exportToCSV<T>(
  table: Table<T>,
  options: ExportOptions = {},
) {
  const {
    fileName = "data-grid-export.csv",
    onlySelected = false,
  } = options;

  const rows = getRows(
    table,
    onlySelected,
  );

  if (!rows.length) {
    return;
  }

  const csv = [
    getHeaders(table).join(","),
    ...rows.map((row) =>
      getRowValues(row).join(","),
    ),
  ].join("\n");

  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;",
  });

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;
  link.download = fileName;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

export function exportToJSON<T>(
  table: Table<T>,
  options: ExportOptions = {},
) {
  const {
    fileName = "data-grid-export.json",
    onlySelected = false,
  } = options;

  const rows = getRows(
    table,
    onlySelected,
  );

  const data = rows.map(
    (row) => row.original,
  );

  const blob = new Blob(
    [
      JSON.stringify(
        data,
        null,
        2,
      ),
    ],
    {
      type: "application/json",
    },
  );

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;
  link.download = fileName;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}