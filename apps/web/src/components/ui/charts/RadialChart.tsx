"use client";

import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { ChartContainer } from "./ChartContainer";
import { useChart } from "./useChart";

interface RadialChartProps {
  dataKey?: string;
  innerRadius?: string;
  outerRadius?: string;
  startAngle?: number;
  endAngle?: number;
  showTooltip?: boolean;
}

export function RadialChart({
  dataKey,
  innerRadius = "45%",
  outerRadius = "95%",
  startAngle = 90,
  endAngle = -270,
  showTooltip = true,
}: RadialChartProps) {
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
        <RadialBarChart
          data={data}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, "dataMax"]}
            tick={false}
          />

          {showTooltip && <Tooltip />}

          <RadialBar
            dataKey={activeKey}
            background
            fill={
              series[0]?.color ??
              "hsl(var(--primary))"
            }
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}