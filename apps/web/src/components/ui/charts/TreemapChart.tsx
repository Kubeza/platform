"use client";

import {
  ResponsiveContainer,
  Tooltip,
  Treemap,
} from "recharts";

import { ChartContainer } from "./ChartContainer";
import { useChart } from "./useChart";

interface TreemapChartProps {
  dataKey?: string;
  nameKey: string;
  aspectRatio?: number;
}

export function TreemapChart({
  dataKey,
  nameKey,
  aspectRatio = 4 / 3,
}: TreemapChartProps) {
  const {
    data,
    series,
  } = useChart();

  const activeKey =
    dataKey ??
    series[0]?.dataKey;

  if (!activeKey) {
    return null;
  }

  return (
    <ChartContainer>
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <Treemap
          data={data}
          dataKey={activeKey}
          nameKey={nameKey}
          aspectRatio={
            aspectRatio
          }
          stroke="hsl(var(--border))"
          fill="hsl(var(--primary))"
        >
          <Tooltip />
        </Treemap>
      </ResponsiveContainer>
    </ChartContainer>
  );
}