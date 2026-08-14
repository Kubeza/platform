import type { ColumnDef } from "@tanstack/react-table";

export function getColumnId<T>(
  column: ColumnDef<T, unknown>,
  index: number,
) {
  if ("id" in column && column.id) {
    return column.id;
  }

  if (
    "accessorKey" in column &&
    column.accessorKey
  ) {
    return String(
      column.accessorKey,
    );
  }

  return `column-${index}`;
}