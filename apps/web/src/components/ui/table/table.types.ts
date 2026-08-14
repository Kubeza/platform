import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type TableDensity =
  | "compact"
  | "comfortable"
  | "spacious";

export interface TableColumn<T> {
  key: keyof T | string;

  title: ReactNode;

  width?: number | string;

  minWidth?: number;

  maxWidth?: number;

  sortable?: boolean;

  searchable?: boolean;

  align?: "left" | "center" | "right";

  className?: string;

  render?: (
    row: T,
    index: number,
  ) => ReactNode;
}

export interface TableProps<T>
  extends HTMLAttributes<HTMLDivElement> {
  data: T[];

  columns: TableColumn<T>[];

  loading?: boolean;

  searchable?: boolean;

  sortable?: boolean;

  selectable?: boolean;

  pagination?: boolean;

  density?: TableDensity;

  emptyMessage?: ReactNode;
}

export interface TableHeaderProps<T> {
  columns: TableColumn<T>[];
}

export interface TableHeadProps
  extends HTMLAttributes<HTMLTableCellElement> {
  sortable?: boolean;
  sorted?: boolean | "asc" | "desc";
}

export interface TableCaptionProps
  extends HTMLAttributes<HTMLTableCaptionElement> {}

export interface TableBodyProps<T> {
  rows: T[];

  columns: TableColumn<T>[];
}

export interface TableRowProps<T> {
  row: T;

  columns: TableColumn<T>[];

  index: number;
}

export interface TableCellProps<T> {
  row: T;

  column: TableColumn<T>;

  index: number;
}

export interface TableSearchProps {
  value: string;

  onChange: (
    value: string,
  ) => void;

  placeholder?: string;
}

export interface TablePaginationProps {
  page: number;

  pageSize: number;

  total: number;

  onPageChange: (
    page: number,
  ) => void;

  onPageSizeChange: (
    pageSize: number,
  ) => void;
}

export interface TableLoadingProps {
  rows?: number;
}

export interface TableEmptyProps {
  message?: ReactNode;
  colSpan: number;
}