"use client";

import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartContainer } from "./ChartContainer";
import { useChart } from "./useChart";

interface LineChartProps {
  dataKey?: string;

  xAxisKey: string;

  stroke?: string;

  strokeWidth?: number;

  showGrid?: boolean;

  showTooltip?: boolean;

  showXAxis?: boolean;

  showYAxis?: boolean;
}

export function LineChart({
  xAxisKey,
  dataKey,
  stroke = "hsl(var(--primary))",
  strokeWidth = 2,
  showGrid = true,
  showTooltip = true,
  showXAxis = true,
  showYAxis = true,
}: LineChartProps) {
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
        <RechartsLineChart
          data={data}
        >
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />
          )}

          {showXAxis && (
            <XAxis
              dataKey={xAxisKey}
            />
          )}

          {showYAxis && (
            <YAxis />
          )}

          {showTooltip && (
            <Tooltip />
          )}

          <Line
            type="monotone"
            dataKey={activeKey}
            stroke={stroke}
            strokeWidth={
              strokeWidth
            }
            dot={false}
            activeDot={{
              r: 5,
            }}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}