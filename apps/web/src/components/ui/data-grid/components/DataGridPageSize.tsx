import { useDataGridContext } from "./DataGrid";

export default function DataGridPageSize() {
  const { table } =
    useDataGridContext<any>();

  return (
    <select
      className="rounded-md border bg-background px-3 py-2 text-sm"
      value={
        table.getState()
          .pagination.pageSize
      }
      onChange={(e) =>
        table.setPageSize(
          Number(
            e.target.value,
          ),
        )
      }
    >
      {[10, 20, 50, 100].map(
        (size) => (
          <option
            key={size}
            value={size}
          >
            {size} rows
          </option>
        ),
      )}
    </select>
  );
}