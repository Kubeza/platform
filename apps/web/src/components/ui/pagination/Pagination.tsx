import {
  createContext,
  useContext,
} from "react";

import { cn } from "@/lib/utils";

import { usePagination } from "./hooks";

import type {
  PaginationProps,
} from "./pagination.types";

interface PaginationContextValue {
  page: number;

  totalPages: number;

  pages: (
    | number
    | string
  )[];

  hasPrevious: boolean;

  hasNext: boolean;

  onPageChange?: (
    page: number,
  ) => void;
}

const PaginationContext =
  createContext<
    PaginationContextValue | undefined
  >(undefined);

export function usePaginationContext() {
  const context =
    useContext(
      PaginationContext,
    );

  if (!context) {
    throw new Error(
      "Pagination components must be used inside <Pagination>.",
    );
  }

  return context;
}

const Pagination = ({
  page,
  totalPages,
  onPageChange,
  children,
  className,
  ...props
}: PaginationProps) => {
  const pagination =
    usePagination({
      page,
      totalPages,
    });

  return (
    <PaginationContext.Provider
      value={{
        page,
        totalPages,
        onPageChange,
        ...pagination,
      }}
    >
      <nav
        aria-label="Pagination"
        className={cn(
          "flex justify-center",
          className,
        )}
        {...props}
      >
        {children}
      </nav>
    </PaginationContext.Provider>
  );
};

export default Pagination;