"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { ChartContainer } from "./ChartContainer";
import { useChart } from "./useChart";

interface PieChartProps {
  dataKey?: string;
  nameKey: string;
  innerRadius?: number;
  outerRadius?: number;
  showLegend?: boolean;
  showTooltip?: boolean;
}

export function PieChart({
  dataKey,
  nameKey,
  innerRadius = 0,
  outerRadius = 90,
  showLegend = true,
  showTooltip = true,
}: PieChartProps) {
  const { data, series } = useChart();

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
        <RechartsPieChart>
          <Pie
            data={data}
            dataKey={activeKey}
            nameKey={nameKey}
            outerRadius={outerRadius}
            innerRadius={innerRadius}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={
                  series[
                    index %
                      Math.max(
                        series.length,
                        1,
                      )
                  ]?.color ??
                  `hsl(${
                    (index * 47) % 360
                  } 70% 55%)`
                }
              />
            ))}
          </Pie>

          {showTooltip && <Tooltip />}

          {showLegend && <Legend />}
        </RechartsPieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}