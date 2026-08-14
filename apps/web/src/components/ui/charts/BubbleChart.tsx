"use client";

import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart as RechartsScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

import { ChartContainer } from "./ChartContainer";
import { useChart } from "./useChart";

interface BubbleChartProps {
  xAxisKey: string;
  yAxisKey: string;
  zAxisKey: string;
  fill?: string;
  showGrid?: boolean;
  showTooltip?: boolean;
}

export function BubbleChart({
  xAxisKey,
  yAxisKey,
  zAxisKey,
  fill = "hsl(var(--primary))",
  showGrid = true,
  showTooltip = true,
}: BubbleChartProps) {
  const { data } = useChart();

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsScatterChart>
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
            />
          )}

          <XAxis
            type="number"
            dataKey={xAxisKey}
          />

          <YAxis
            type="number"
            dataKey={yAxisKey}
          />

          <ZAxis
            type="number"
            dataKey={zAxisKey}
            range={[60, 500]}
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