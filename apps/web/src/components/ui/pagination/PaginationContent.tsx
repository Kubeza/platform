import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type {
  PaginationContentProps,
} from "./pagination.types";

const PaginationContent =
  forwardRef<
    HTMLUListElement,
    PaginationContentProps
  >(
    (
      {
        className,
        children,
        ...props
      },
      ref,
    ) => {
      return (
        <ul
          ref={ref}
          className={cn(
            "flex items-center gap-2",
            className,
          )}
          {...props}
        >
          {children}
        </ul>
      );
    },
  );

PaginationContent.displayName =
  "PaginationContent";

export default PaginationContent;