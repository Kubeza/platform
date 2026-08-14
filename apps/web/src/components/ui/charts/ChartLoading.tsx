import { Loader2 } from "lucide-react";

export function ChartLoading() {
  return (
    <div className="flex h-full min-h-[320px] w-full items-center justify-center rounded-xl border bg-background">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />

        <div className="space-y-1 text-center">
          <h3 className="text-sm font-semibold">
            Loading chart...
          </h3>

          <p className="text-xs text-muted-foreground">
            Fetching latest metrics
          </p>
        </div>
      </div>
    </div>
  );
}