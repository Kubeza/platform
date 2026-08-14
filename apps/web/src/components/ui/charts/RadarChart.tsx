"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart as RechartsRadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { ChartContainer } from "./ChartContainer";
import { useChart } from "./useChart";

interface RadarChartProps {
  angleKey: string;
  dataKey?: string;
  stroke?: string;
  fill?: string;
  fillOpacity?: number;
  showGrid?: boolean;
  showTooltip?: boolean;
}

export function RadarChart({
  angleKey,
  dataKey,
  stroke = "hsl(var(--primary))",
  fill = "hsl(var(--primary))",
  fillOpacity = 0.4,
  showGrid = true,
  showTooltip = true,
}: RadarChartProps) {
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
        <RechartsRadarChart data={data}>
          {showGrid && <PolarGrid />}

          <PolarAngleAxis dataKey={angleKey} />

          {showTooltip && <Tooltip />}

          <Radar
            dataKey={activeKey}
            stroke={stroke}
            fill={fill}
            fillOpacity={fillOpacity}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}