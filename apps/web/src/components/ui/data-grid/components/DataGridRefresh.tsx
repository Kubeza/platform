import { RefreshCw } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface DataGridRefreshProps {
  onRefresh?: () => Promise<void> | void;
}

export default function DataGridRefresh({
  onRefresh,
}: DataGridRefreshProps) {
  const [loading, setLoading] =
    useState(false);

  async function handleRefresh() {
    try {
      setLoading(true);

      await onRefresh?.();
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      disabled={loading}
      onClick={handleRefresh}
    >
      <RefreshCw
        className={`mr-2 h-4 w-4 ${
          loading
            ? "animate-spin"
            : ""
        }`}
      />

      Refresh
    </Button>
  );
}