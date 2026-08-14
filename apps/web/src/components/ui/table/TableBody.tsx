import TableRow from "./TableRow";

import type {
  TableBodyProps,
} from "./table.types";

const TableBody = <T,>({
  rows,
  columns,
}: TableBodyProps<T>) => {
  return (
    <tbody>
      {rows.map(
        (
          row,
          index,
        ) => (
          <TableRow
            key={index}
            row={row}
            columns={
              columns
            }
            index={index}
          />
        ),
      )}
    </tbody>
  );
};

export default TableBody;