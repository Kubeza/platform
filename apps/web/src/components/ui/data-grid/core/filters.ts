import type {
  FilterFn,
  Row,
} from "@tanstack/react-table";

/**
 * Case-insensitive global text search.
 */
export const globalTextFilter: FilterFn<any> = (
  row,
  columnId,
  value,
) => {
  const cellValue = row.getValue(columnId);

  if (
    cellValue === null ||
    cellValue === undefined
  ) {
    return false;
  }

  return String(cellValue)
    .toLowerCase()
    .includes(
      String(value).toLowerCase(),
    );
};

/**
 * Multiple value filter.
 *
 * Example:
 * ["Active", "Pending"]
 */
export const multiSelectFilter: FilterFn<any> = (
  row,
  columnId,
  values,
) => {
  if (
    !Array.isArray(values) ||
    values.length === 0
  ) {
    return true;
  }

  return values.includes(
    row.getValue(columnId),
  );
};

/**
 * Exact value filter.
 */
export const equalsFilter: FilterFn<any> = (
  row,
  columnId,
  value,
) => {
  return (
    row.getValue(columnId) === value
  );
};

/**
 * Starts With filter.
 */
export const startsWithFilter: FilterFn<any> = (
  row,
  columnId,
  value,
) => {
  const cell = row.getValue(columnId);

  if (
    cell === null ||
    cell === undefined
  ) {
    return false;
  }

  return String(cell)
    .toLowerCase()
    .startsWith(
      String(value).toLowerCase(),
    );
};

/**
 * Ends With filter.
 */
export const endsWithFilter: FilterFn<any> = (
  row,
  columnId,
  value,
) => {
  const cell = row.getValue(columnId);

  if (
    cell === null ||
    cell === undefined
  ) {
    return false;
  }

  return String(cell)
    .toLowerCase()
    .endsWith(
      String(value).toLowerCase(),
    );
};

/**
 * Between numbers.
 *
 * Example:
 * [100, 500]
 */
export const betweenNumberFilter: FilterFn<any> = (
  row,
  columnId,
  range,
) => {
  if (
    !Array.isArray(range) ||
    range.length !== 2
  ) {
    return true;
  }

  const value = Number(
    row.getValue(columnId),
  );

  return (
    value >= range[0] &&
    value <= range[1]
  );
};

/**
 * Between dates.
 *
 * Example:
 * ["2025-01-01", "2025-12-31"]
 */
export const betweenDateFilter: FilterFn<any> = (
  row,
  columnId,
  range,
) => {
  if (
    !Array.isArray(range) ||
    range.length !== 2
  ) {
    return true;
  }

  const value = new Date(
    row.getValue(columnId) as string,
  ).getTime();

  const start = new Date(
    range[0],
  ).getTime();

  const end = new Date(
    range[1],
  ).getTime();

  return (
    value >= start &&
    value <= end
  );
};

/**
 * Boolean filter.
 */
export const booleanFilter: FilterFn<any> = (
  row,
  columnId,
  value,
) => {
  return (
    Boolean(
      row.getValue(columnId),
    ) === Boolean(value)
  );
};

/**
 * Utility function to filter rows manually.
 */
export function filterRows<T>(
  rows: Row<T>[],
  predicate: (
    row: Row<T>,
  ) => boolean,
): Row<T>[] {
  return rows.filter(predicate);
}