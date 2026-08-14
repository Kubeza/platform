import TableCell from "./TableCell";

import { cn } from "@/lib/utils";

import type {
  TableRowProps,
} from "./table.types";

const TableRow = <T,>({
  row,
  columns,
  index,
}: TableRowProps<T>) => {
  return (
    <tr
      className={cn(
        "border-b border-border transition-colors",
        "hover:bg-muted/50",
      )}
    >
      {columns.map((column) => (
        <TableCell
          key={String(column.key)}
          row={row}
          column={column}
          index={index}
        />
      ))}
    </tr>
  );
};

export default TableRow;