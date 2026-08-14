import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  LiHTMLAttributes,
  ReactNode,
} from "react";

export interface PaginationProps
  extends HTMLAttributes<HTMLElement> {
  page: number;

  totalPages: number;

  onPageChange?: (
    page: number,
  ) => void;

  children?: ReactNode;
}

export interface PaginationContentProps
  extends HTMLAttributes<HTMLUListElement> {}

export interface PaginationItemProps
  extends LiHTMLAttributes<HTMLLIElement> {}

export interface PaginationLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;

  disabled?: boolean;

  page?: number;
}

export interface PaginationPreviousProps
  extends PaginationLinkProps {}

export interface PaginationNextProps
  extends PaginationLinkProps {}

export interface PaginationEllipsisProps
  extends HTMLAttributes<HTMLSpanElement> {}