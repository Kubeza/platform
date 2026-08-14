import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type {
  PaginationItemProps,
} from "./pagination.types";

const PaginationItem =
  forwardRef<
    HTMLLIElement,
    PaginationItemProps
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
        <li
          ref={ref}
          className={cn(
            "list-none",
            className,
          )}
          {...props}
        >
          {children}
        </li>
      );
    },
  );

PaginationItem.displayName =
  "PaginationItem";

export default PaginationItem;