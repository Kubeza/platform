import { Loader2 } from "lucide-react";

interface DataGridLoadingOverlayProps {
  loading?: boolean;
  message?: string;
}

export default function DataGridLoadingOverlay({
  loading = false,
  message = "Loading data...",
}: DataGridLoadingOverlayProps) {
  if (!loading) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3 rounded-lg border bg-background p-6 shadow-lg">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />

        <p className="text-sm text-muted-foreground">
          {message}
        </p>
      </div>
    </div>
  );
}