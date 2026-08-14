import {
  useMemo,
} from "react";

import {
  generatePagination,
} from "./utils";

interface UsePaginationOptions {
  page: number;

  totalPages: number;
}

export function usePagination({
  page,
  totalPages,
}: UsePaginationOptions) {
  const pages =
    useMemo(
      () =>
        generatePagination(
          page,
          totalPages,
        ),
      [
        page,
        totalPages,
      ],
    );

  return {
    pages,
    hasPrevious:
      page > 1,
    hasNext:
      page < totalPages,
  };
}