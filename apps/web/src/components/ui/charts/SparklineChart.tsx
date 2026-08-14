"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts";

import { useChart } from "./useChart";

interface SparklineChartProps {
  dataKey?: string;
  stroke?: string;
  strokeWidth?: number;
}

export function SparklineChart({
  dataKey,
  stroke = "hsl(var(--primary))",
  strokeWidth = 2,
}: SparklineChartProps) {
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
      <LineChart
        data={data}
      >
        <Line
          type="monotone"
          dataKey={activeKey}
          stroke={stroke}
          strokeWidth={
            strokeWidth
          }
          dot={false}
          isAnimationActive
        />
      </LineChart>
    </ResponsiveContainer>
  );
}