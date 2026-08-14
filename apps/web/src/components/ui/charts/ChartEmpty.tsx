import { BarChart3 } from "lucide-react";

export function ChartEmpty() {
  return (
    <div className="flex h-full min-h-[320px] w-full items-center justify-center rounded-xl border border-dashed bg-background">
      <div className="flex flex-col items-center gap-4">
        <BarChart3 className="h-10 w-10 text-muted-foreground" />

        <div className="space-y-1 text-center">
          <h3 className="font-semibold">
            No Data Available
          </h3>

          <p className="max-w-xs text-sm text-muted-foreground">
            There is currently no data available for this chart.
          </p>
        </div>
      </div>
    </div>
  );
}