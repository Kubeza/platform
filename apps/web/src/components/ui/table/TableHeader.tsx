import type {
  TableHeaderProps,
} from "./table.types";

const TableHeader = <T,>({
  columns,
}: TableHeaderProps<T>) => {
  return (
    <thead className="sticky top-0 bg-muted/60 backdrop-blur">
      <tr className="border-b border-border">
        {columns.map(
          (column) => (
            <th
              key={String(
                column.key,
              )}
              style={{
                width:
                  column.width,
                minWidth:
                  column.minWidth,
                maxWidth:
                  column.maxWidth,
              }}
              className="h-12 px-4 text-left text-sm font-semibold text-muted-foreground"
            >
              {column.title}
            </th>
          ),
        )}
      </tr>
    </thead>
  );
};

export default TableHeader;