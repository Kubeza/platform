import type { Column } from "@tanstack/react-table";
import { Search } from "lucide-react";

interface DataGridColumnSearchProps<
  TData,
  TValue,
> {
  column: Column<TData, TValue>;
  placeholder?: string;
}

export default function DataGridColumnSearch<
  TData,
  TValue,
>({
  column,
  placeholder = "Search...",
}: DataGridColumnSearchProps<
  TData,
  TValue
>) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <input
        type="text"
        value={
          (column.getFilterValue() as string) ??
          ""
        }
        onChange={(event) =>
          column.setFilterValue(
            event.target.value,
          )
        }
        placeholder={placeholder}
        className="h-9 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}