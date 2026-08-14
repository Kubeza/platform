"use client";

import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartContainer } from "./ChartContainer";
import { useChart } from "./useChart";

interface HorizontalBarChartProps {
  yAxisKey: string;
  dataKey?: string;
  fill?: string;
  radius?: number;
  showGrid?: boolean;
  showTooltip?: boolean;
}

export function HorizontalBarChart({
  yAxisKey,
  dataKey,
  fill = "hsl(var(--primary))",
  radius = 6,
  showGrid = true,
  showTooltip = true,
}: HorizontalBarChartProps) {
  const { data, series } = useChart();

  const activeKey =
    dataKey ?? series[0]?.dataKey;

  if (!activeKey) {
    return null;
  }

  return (
    <ChartContainer>
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <RechartsBarChart
          layout="vertical"
          data={data}
        >
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
            />
          )}

          <XAxis type="number" />

          <YAxis
            type="category"
            dataKey={yAxisKey}
          />

          {showTooltip && <Tooltip />}

          <Bar
            dataKey={activeKey}
            fill={fill}
            radius={radius}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}