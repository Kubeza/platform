import { forwardRef } from "react";

import { MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  PaginationEllipsisProps,
} from "./pagination.types";

const PaginationEllipsis =
  forwardRef<
    HTMLSpanElement,
    PaginationEllipsisProps
  >(
    (
      {
        className,
        ...props
      },
      ref,
    ) => {
      return (
        <span
          ref={ref}
          aria-hidden="true"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center text-muted-foreground",
            className,
          )}
          {...props}
        >
          <MoreHorizontal className="h-4 w-4" />
        </span>
      );
    },
  );

PaginationEllipsis.displayName =
  "PaginationEllipsis";

export default PaginationEllipsis;