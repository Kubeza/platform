import {
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
  type TableOptions,
} from "@tanstack/react-table";

export function createDataGrid<T>(
  options: TableOptions<T>,
) {
  return useReactTable({
    ...options,
    getCoreRowModel: getCoreRowModel(),
  });
}

export type {
  ColumnDef,
};