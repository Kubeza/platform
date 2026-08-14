import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface JsonViewerProps
  extends Omit<
    HTMLAttributes<HTMLPreElement>,
    "children"
  > {
  data: unknown;
  expanded?: boolean;
  emptyMessage?: ReactNode;
}