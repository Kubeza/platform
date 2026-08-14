"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";

import { useChart } from "./useChart";

interface MiniAreaChartProps {
  dataKey?: string;
  stroke?: string;
  fill?: string;
}

export function MiniAreaChart({
  dataKey,
  stroke = "hsl(var(--primary))",
  fill = "hsl(var(--primary) / 0.18)",
}: MiniAreaChartProps) {
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
      <AreaChart
        data={data}
      >
        <Area
          type="monotone"
          dataKey={activeKey}
          stroke={stroke}
          fill={fill}
          strokeWidth={2}
          dot={false}
          isAnimationActive
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}