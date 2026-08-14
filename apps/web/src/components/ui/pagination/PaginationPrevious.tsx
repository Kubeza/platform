import {
  ChevronLeft,
} from "lucide-react";

import PaginationLink from "./PaginationLink";

import {
  usePaginationContext,
} from "./Pagination";

import type {
  PaginationPreviousProps,
} from "./pagination.types";

const PaginationPrevious = (
  props: PaginationPreviousProps,
) => {
  const pagination =
    usePaginationContext();

  return (
    <PaginationLink
      page={
        pagination.page - 1
      }
      disabled={
        !pagination.hasPrevious
      }
      {...props}
    >
      <ChevronLeft className="mr-1 h-4 w-4" />

      Previous
    </PaginationLink>
  );
};

export default PaginationPrevious;