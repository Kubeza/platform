"use client";

import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartContainer } from "./ChartContainer";
import { useChart } from "./useChart";

interface StackedBarChartProps {
  xAxisKey: string;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
}

export function StackedBarChart({
  xAxisKey,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
}: StackedBarChartProps) {
  const { data, series } = useChart();

  if (series.length === 0) {
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

          <XAxis dataKey={xAxisKey} />

          <YAxis />

          {showTooltip && <Tooltip />}

          {showLegend && <Legend />}

          {series.map((item) => (
            <Bar
              key={item.id}
              stackId="stack"
              dataKey={item.dataKey}
              fill={
                item.color ??
                "hsl(var(--primary))"
              }
              radius={[4, 4, 0, 0]}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}