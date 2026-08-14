import { flexRender } from "@tanstack/react-table";

import { useDataGridContext } from "./DataGrid";

export default function DataGridBody() {
  const { table } = useDataGridContext<any>();

  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className="border-b transition-colors hover:bg-muted/50"
        >
          {row.getVisibleCells().map((cell) => (
            <td
              key={cell.id}
              className="px-4 py-3 align-middle text-sm"
            >
              {flexRender(
                cell.column.columnDef.cell,
                cell.getContext(),
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}