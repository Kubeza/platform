import {
  ChevronRight,
} from "lucide-react";

import PaginationLink from "./PaginationLink";

import {
  usePaginationContext,
} from "./Pagination";

import type {
  PaginationNextProps,
} from "./pagination.types";

const PaginationNext = (
  props: PaginationNextProps,
) => {
  const pagination =
    usePaginationContext();

  return (
    <PaginationLink
      page={
        pagination.page + 1
      }
      disabled={
        !pagination.hasNext
      }
      {...props}
    >
      Next

      <ChevronRight className="ml-1 h-4 w-4" />
    </PaginationLink>
  );
};

export default PaginationNext;