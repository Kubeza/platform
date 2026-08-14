import { Bookmark } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface SavedView {
  id: string;
  name: string;
}

export default function DataGridSavedViews() {
  const [views, setViews] =
    useState<SavedView[]>([]);

  function createView() {
    const name = window.prompt(
      "View name",
    );

    if (!name) {
      return;
    }

    setViews((previous) => [
      ...previous,
      {
        id: crypto.randomUUID(),
        name,
      },
    ]);
  }

  return (
    <div className="space-y-3 rounded-lg border p-4">
      <div className="flex items-center gap-2">
        <Bookmark className="h-4 w-4" />
        <h3 className="font-medium">
          Saved Views
        </h3>
      </div>

      {views.length === 0 && (
        <p className="text-sm text-muted-foreground">
          No saved views.
        </p>
      )}

      {views.map((view) => (
        <button
          key={view.id}
          className="block w-full rounded-md border px-3 py-2 text-left hover:bg-muted"
        >
          {view.name}
        </button>
      ))}

      <Button
        variant="secondary"
        onClick={createView}
      >
        Save Current View
      </Button>
    </div>
  );
}