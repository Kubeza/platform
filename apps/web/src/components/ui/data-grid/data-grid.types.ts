import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface DataGridColumn<T = unknown> {
  id: string;

  header: ReactNode;

  accessor: keyof T | ((row: T) => ReactNode);

  width?: number;

  sortable?: boolean;

  align?: "left" | "center" | "right";
}

export interface DataGridProps<T = unknown>
  extends HTMLAttributes<HTMLDivElement> {
  data: T[];

  columns: DataGridColumn<T>[];

  loading?: boolean;

  emptyMessage?: string;

  page?: number;

  pageSize?: number;

  totalRows?: number;

  children?: ReactNode;
}

export interface DataGridHeaderProps
  extends HTMLAttributes<HTMLTableSectionElement> {}

export interface DataGridBodyProps
  extends HTMLAttributes<HTMLTableSectionElement> {}

export interface DataGridRowProps
  extends HTMLAttributes<HTMLTableRowElement> {}

export interface DataGridCellProps
  extends HTMLAttributes<HTMLTableCellElement> {}

export interface DataGridToolbarProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DataGridPaginationProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DataGridLoadingProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface DataGridEmptyProps
  extends HTMLAttributes<HTMLDivElement> {
  message?: string;
}

export interface DataGridErrorProps
  extends HTMLAttributes<HTMLDivElement> {
  message?: string;
}