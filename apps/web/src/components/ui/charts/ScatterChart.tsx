"use client";

import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart as RechartsScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartContainer } from "./ChartContainer";
import { useChart } from "./useChart";

interface ScatterChartProps {
  xAxisKey: string;
  yAxisKey: string;
  fill?: string;
  showGrid?: boolean;
  showTooltip?: boolean;
}

export function ScatterChart({
  xAxisKey,
  yAxisKey,
  fill = "hsl(var(--primary))",
  showGrid = true,
  showTooltip = true,
}: ScatterChartProps) {
  const { data } = useChart();

  return (
    <ChartContainer>
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <RechartsScatterChart>
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
            />
          )}

          <XAxis
            dataKey={xAxisKey}
            type="number"
          />

          <YAxis
            dataKey={yAxisKey}
            type="number"
          />

          {showTooltip && <Tooltip />}

          <Scatter
            data={data}
            fill={fill}
          />
        </RechartsScatterChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}