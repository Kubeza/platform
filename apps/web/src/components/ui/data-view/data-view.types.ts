import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type DataViewMode =
  | "table"
  | "grid"
  | "list";

export interface DataViewItem {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  content?: ReactNode;
  [key: string]: unknown;
}

export interface DataViewProps
  extends HTMLAttributes<HTMLDivElement> {
  data: DataViewItem[];
  mode?: DataViewMode;
  emptyMessage?: ReactNode;
  renderItem?: (
    item: DataViewItem,
    index: number,
  ) => ReactNode;
}