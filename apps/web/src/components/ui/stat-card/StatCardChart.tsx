import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import type {
  StatCardChartProps,
} from "./stat-card.types";

const StatCardChart = forwardRef<
  HTMLDivElement,
  StatCardChartProps
>(
  (
    {
      data = [],
      type = "line",
      className,
      ...props
    },
    ref,
  ) => {
    if (
      data.length === 0
    ) {
      return null;
    }

    const max =
      Math.max(
        ...data.map(
          (
            point,
          ) =>
            point.value,
        ),
      ) || 1;

    return (
      <div
        ref={ref}
        className={cn(
          "flex h-16 items-end gap-1",
          className,
        )}
        {...props}
      >
        {data.map(
          (
            point,
            index,
          ) => {
            const height = Math.max(
              (point.value /
                max) *
                100,
              8,
            );

            return (
              <div
                key={
                  index
                }
                className="flex flex-1 items-end"
              >
                <div
                  className={cn(
                    "w-full rounded-sm bg-indigo-500/80 transition-all duration-300",
                    type ===
                      "area" &&
                      "rounded-t-md",
                    type ===
                      "progress" &&
                      "rounded-full",
                  )}
                  style={{
                    height: `${height}%`,
                  }}
                />
              </div>
            );
          },
        )}
      </div>
    );
  },
);

StatCardChart.displayName =
  "StatCardChart";

export default StatCardChart;