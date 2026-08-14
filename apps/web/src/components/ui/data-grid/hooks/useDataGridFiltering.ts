import {
  useMemo,
  useState,
} from "react";

export function useDataGridFiltering<T>(
  rows: T[],
) {
  const [query, setQuery] =
    useState("");

  const filteredRows =
    useMemo(() => {
      if (!query) {
        return rows;
      }

      const value =
        query.toLowerCase();

      return rows.filter(
        (row) =>
          JSON.stringify(row)
            .toLowerCase()
            .includes(value),
      );
    }, [
      rows,
      query,
    ]);

  return {
    query,
    setQuery,
    filteredRows,
  };
}