import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

import { useDataGridContext } from "./DataGrid";

export default function DataGridSearch() {
  const { table } =
    useDataGridContext<any>();

  return (
    <div className="relative w-72">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <input
        value={
          (table.getState()
            .globalFilter ??
            "") as string
        }
        onChange={(event) =>
          table.setGlobalFilter(
            event.target.value,
          )
        }
        placeholder="Search..."
        className={cn(
          "h-10 w-full rounded-lg border bg-background pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary",
        )}
      />
    </div>
  );
}