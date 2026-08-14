import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import {
  usePaginationContext,
} from "./Pagination";

import type {
  PaginationLinkProps,
} from "./pagination.types";

const PaginationLink =
  forwardRef<
    HTMLAnchorElement,
    PaginationLinkProps
  >(
    (
      {
        active,
        disabled,
        page,
        className,
        children,
        onClick,
        href = "#",
        ...props
      },
      ref,
    ) => {
      const pagination =
        usePaginationContext();

      return (
        <a
          ref={ref}
          href={href}
          aria-current={
            active
              ? "page"
              : undefined
          }
          aria-disabled={
            disabled
          }
          onClick={(
            event,
          ) => {
            event.preventDefault();

            if (
              disabled ||
              page === undefined
            ) {
              return;
            }

            pagination.onPageChange?.(
              page,
            );

            onClick?.(event);
          }}
          className={cn(
            "inline-flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 text-sm transition-colors",

            active &&
              "border-primary bg-primary text-primary-foreground",

            !active &&
              "hover:bg-accent hover:text-accent-foreground",

            disabled &&
              "pointer-events-none opacity-50",

            className,
          )}
          {...props}
        >
          {children ??
            page}
        </a>
      );
    },
  );

PaginationLink.displayName =
  "PaginationLink";

export default PaginationLink;