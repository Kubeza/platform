import type {
  TableColumn,
} from "./table.types";

export function getCellValue<T>(
  row: T,
  column: TableColumn<T>,
) {
  return (row as Record<
    string,
    unknown
  >)[column.key as string];
}

export function searchRows<T>(
  rows: T[],
  columns: TableColumn<T>[],
  query: string,
) {
  if (!query.trim()) {
    return rows;
  }

  const search =
    query.toLowerCase();

  return rows.filter((row) =>
    columns.some((column) => {
      if (!column.searchable) {
        return false;
      }

      const value = getCellValue(
        row,
        column,
      );

      return String(value ?? "")
        .toLowerCase()
        .includes(search);
    }),
  );
}

export function paginateRows<T>(
  rows: T[],
  page: number,
  pageSize: number,
) {
  const start =
    (page - 1) * pageSize;

  return rows.slice(
    start,
    start + pageSize,
  );
}