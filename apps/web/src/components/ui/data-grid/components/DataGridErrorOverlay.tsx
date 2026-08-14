import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";

interface DataGridErrorOverlayProps {
  error?: string;
  onRetry?: () => void;
}

export default function DataGridErrorOverlay({
  error = "Something went wrong while loading the data.",
  onRetry,
}: DataGridErrorOverlayProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex max-w-md flex-col items-center gap-4 rounded-lg border bg-background p-6 text-center shadow-lg">
        <AlertTriangle className="h-10 w-10 text-danger" />

        <div>
          <h3 className="text-lg font-semibold">
            Failed to Load
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            {error}
          </p>
        </div>

        {onRetry && (
          <Button
            variant="primary"
            onClick={onRetry}
          >
            Retry
          </Button>
        )}
      </div>
    </div>
  );
}