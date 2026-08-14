import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useChart } from "./useChart";

interface ChartLegendProps
  extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

export function ChartLegend({
  className,
  orientation = "horizontal",
  ...props
}: ChartLegendProps) {
  const { series } = useChart();

  return (
    <div
      className={cn(
        "flex flex-wrap gap-4",
        orientation === "vertical" &&
          "flex-col items-start",
        className,
      )}
      {...props}
    >
      {series.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-2"
        >
          <span
            className="h-3 w-3 rounded-full border"
            style={{
              backgroundColor:
                item.color ??
                "currentColor",
            }}
          />

          <span className="text-sm text-muted-foreground">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}