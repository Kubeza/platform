import { Search } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface DataGridAdvancedSearchProps {
  onSearch?: (query: string) => void;
}

export default function DataGridAdvancedSearch({
  onSearch,
}: DataGridAdvancedSearchProps) {
  const [query, setQuery] =
    useState("");

  return (
    <div className="rounded-lg border p-4">
      <div className="mb-4 flex items-center gap-2">
        <Search className="h-4 w-4" />
        <h3 className="font-medium">
          Advanced Search
        </h3>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          placeholder="name:john status:active"
          onChange={(event) =>
            setQuery(
              event.target.value,
            )
          }
          className="flex-1 rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
        />

        <Button
          variant="primary"
          onClick={() =>
            onSearch?.(query)
          }
        >
          Search
        </Button>
      </div>
    </div>
  );
}