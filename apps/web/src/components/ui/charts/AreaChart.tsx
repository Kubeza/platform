"use client";

import {
  Area,
  AreaChart as RechartsAreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartContainer } from "./ChartContainer";
import { useChart } from "./useChart";

interface AreaChartProps {
  xAxisKey: string;
  dataKey?: string;
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
  showGrid?: boolean;
  showTooltip?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
}

export function AreaChart({
  xAxisKey,
  dataKey,
  stroke = "hsl(var(--primary))",
  fill = "hsl(var(--primary) / 0.18)",
  strokeWidth = 2,
  showGrid = true,
  showTooltip = true,
  showXAxis = true,
  showYAxis = true,
}: AreaChartProps) {
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
        <RechartsAreaChart data={data}>
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

          <Area
            type="monotone"
            dataKey={activeKey}
            stroke={stroke}
            fill={fill}
            strokeWidth={strokeWidth}
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}