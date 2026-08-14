"use client";

import { useMemo } from "react";

export function useDataGridFilters<
  T = unknown,
>(
  data: T[],
  query: string,
  getValue: (
    row: T,
  ) => string,
) {
  return useMemo(() => {
    const normalizedQuery =
      query.trim().toLowerCase();

    if (!normalizedQuery) {
      return data;
    }

    return data.filter((row) =>
      getValue(row)
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [data, query, getValue]);
}