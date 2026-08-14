"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
} from "recharts";

import { useChart } from "./useChart";

interface MiniBarChartProps {
  dataKey?: string;
  fill?: string;
  radius?: number;
}

export function MiniBarChart({
  dataKey,
  fill = "hsl(var(--primary))",
  radius = 2,
}: MiniBarChartProps) {
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
    <ResponsiveContainer
      width="100%"
      height="100%"
    >
      <BarChart data={data}>
        <Bar
          dataKey={activeKey}
          fill={fill}
          radius={radius}
          isAnimationActive
        />
      </BarChart>
    </ResponsiveContainer>
  );
}