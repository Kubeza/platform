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

interface BarChartProps {
  xAxisKey: string;
  dataKey?: string;
  fill?: string;
  radius?: number;
  showGrid?: boolean;
  showTooltip?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
}

export function BarChart({
  xAxisKey,
  dataKey,
  fill = "hsl(var(--primary))",
  radius = 6,
  showGrid = true,
  showTooltip = true,
  showXAxis = true,
  showYAxis = true,
}: BarChartProps) {
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
        <RechartsBarChart data={data}>
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />
          )}

          {showXAxis && (
            <XAxis dataKey={xAxisKey} />
          )}

          {showYAxis && <YAxis />}

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