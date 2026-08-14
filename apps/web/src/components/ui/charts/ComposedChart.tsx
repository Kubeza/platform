"use client";

import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart as RechartsComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartContainer } from "./ChartContainer";
import { useChart } from "./useChart";

interface ComposedChartProps {
  xAxisKey: string;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
}

export function ComposedChart({
  xAxisKey,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
}: ComposedChartProps) {
  const {
    data,
    series,
  } = useChart();

  return (
    <ChartContainer>
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <RechartsComposedChart
          data={data}
        >
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
            />
          )}

          <XAxis
            dataKey={xAxisKey}
          />

          <YAxis />

          {showTooltip && (
            <Tooltip />
          )}

          {showLegend && (
            <Legend />
          )}

          {series[0] && (
            <Bar
              dataKey={
                series[0].dataKey
              }
              fill={
                series[0].color ??
                "hsl(var(--primary))"
              }
            />
          )}

          {series[1] && (
            <Area
              dataKey={
                series[1].dataKey
              }
              stroke={
                series[1].color ??
                "hsl(var(--chart-2))"
              }
              fill={
                series[1].color ??
                "hsl(var(--chart-2))"
              }
              fillOpacity={0.2}
            />
          )}

          {series[2] && (
            <Line
              dataKey={
                series[2].dataKey
              }
              stroke={
                series[2].color ??
                "hsl(var(--chart-3))"
              }
              strokeWidth={2}
            />
          )}
        </RechartsComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}