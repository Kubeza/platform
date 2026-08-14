"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { ChartContainer } from "./ChartContainer";

export interface HeatmapCell {
  x: string;
  y: string;
  value: number;
}

interface HeatmapChartProps {
  data: HeatmapCell[];
  className?: string;
  min?: number;
  max?: number;
  showValues?: boolean;
  color?: string;
}

function getOpacity(
  value: number,
  min: number,
  max: number,
) {
  if (max === min) return 1;

  return (
    (value - min) /
    (max - min)
  );
}

export function HeatmapChart({
  data,
  className,
  min,
  max,
  showValues = false,
  color = "hsl(var(--primary))",
}: HeatmapChartProps) {
  const xLabels = React.useMemo(
    () => [...new Set(data.map((d) => d.x))],
    [data],
  );

  const yLabels = React.useMemo(
    () => [...new Set(data.map((d) => d.y))],
    [data],
  );

  const values = data.map(
    (d) => d.value,
  );

  const minimum =
    min ??
    Math.min(...values);

  const maximum =
    max ??
    Math.max(...values);

  return (
    <ChartContainer
      className={className}
    >
      <div className="overflow-auto">
        <div
          className="grid gap-2"
          style={{
            gridTemplateColumns: `120px repeat(${xLabels.length}, minmax(56px,1fr))`,
          }}
        >
          <div />

          {xLabels.map((label) => (
            <div
              key={label}
              className="text-center text-xs font-medium text-muted-foreground"
            >
              {label}
            </div>
          ))}

          {yLabels.map((row) => (
            <React.Fragment
              key={row}
            >
              <div className="flex items-center text-xs font-medium text-muted-foreground">
                {row}
              </div>

              {xLabels.map((column) => {
                const cell =
                  data.find(
                    (item) =>
                      item.x ===
                        column &&
                      item.y === row,
                  );

                const opacity =
                  cell
                    ? getOpacity(
                        cell.value,
                        minimum,
                        maximum,
                      )
                    : 0;

                return (
                  <div
                    key={`${row}-${column}`}
                    className={cn(
                      "flex aspect-square items-center justify-center rounded-md border text-xs transition-colors",
                    )}
                    style={{
                      backgroundColor:
                        color,
                      opacity:
                        0.15 +
                        opacity *
                          0.85,
                    }}
                  >
                    {showValues &&
                      cell?.value}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </ChartContainer>
  );
}