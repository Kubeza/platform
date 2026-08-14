import {
  useMemo,
  useState,
} from "react";

import {
  DEFAULT_PAGE_SIZE,
} from "./constants";

import {
  paginateRows,
  searchRows,
} from "./table.utils";

import type {
  TableColumn,
} from "./table.types";

export function useTable<T>(
  data: T[],
  columns: TableColumn<T>[],
) {
  const [query, setQuery] =
    useState("");

  const [page, setPage] =
    useState(1);

  const [pageSize, setPageSize] =
    useState(DEFAULT_PAGE_SIZE);

  const filtered =
    useMemo(
      () =>
        searchRows(
          data,
          columns,
          query,
        ),
      [
        data,
        columns,
        query,
      ],
    );

  const paginated =
    useMemo(
      () =>
        paginateRows(
          filtered,
          page,
          pageSize,
        ),
      [
        filtered,
        page,
        pageSize,
      ],
    );

  return {
    query,
    setQuery,

    page,
    setPage,

    pageSize,
    setPageSize,

    total: filtered.length,

    rows: paginated,
  };
}