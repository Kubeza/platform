import { cn } from "@/lib/utils";

import {
  getCellValue,
} from "./table.utils";

import type {
  TableCellProps,
} from "./table.types";

const TableCell = <T,>({
  row,
  column,
  index,
}: TableCellProps<T>) => {
  const value =
    getCellValue(
      row,
      column,
    );

  return (
    <td
      className={cn(
        "px-4 py-3 text-sm",
        column.className,
        column.align ===
          "center" &&
          "text-center",
        column.align ===
          "right" &&
          "text-right",
      )}
    >
      {column.render
        ? column.render(
            row,
            index,
          )
        : String(
            value ?? "",
          )}
    </td>
  );
};

export default TableCell;