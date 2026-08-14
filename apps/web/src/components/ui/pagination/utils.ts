import {
  MAX_VISIBLE_PAGES,
} from "./constants";

export function generatePagination(
  currentPage: number,
  totalPages: number,
) {
  if (
    totalPages <=
    MAX_VISIBLE_PAGES
  ) {
    return Array.from(
      {
        length: totalPages,
      },
      (_, index) => index + 1,
    );
  }

  const pages: (
    | number
    | string
  )[] = [];

  pages.push(1);

  if (currentPage > 3) {
    pages.push("...");
  }

  const start = Math.max(
    2,
    currentPage - 1,
  );

  const end = Math.min(
    totalPages - 1,
    currentPage + 1,
  );

  for (
    let page = start;
    page <= end;
    page++
  ) {
    pages.push(page);
  }

  if (
    currentPage <
    totalPages - 2
  ) {
    pages.push("...");
  }

  pages.push(totalPages);

  return pages;
}