import { memo } from "react";

import type {
  DataGridColumn as DataGridColumnType,
} from "./data-grid.types";

export interface DataGridColumnProps<
  T extends Record<string, unknown> = Record<
    string,
    unknown
  >,
> extends DataGridColumnType<T> {}

function DataGridColumnComponent<
  T extends Record<string, unknown> = Record<
    string,
    unknown
  >,
>(
  _: DataGridColumnProps<T>,
) {
  return null;
}

export default memo(
  DataGridColumnComponent,
);