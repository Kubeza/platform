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

interface DonutChartProps {
  dataKey?: string;
  nameKey: string;
  innerRadius?: number;
  outerRadius?: number;
  showLegend?: boolean;
  showTooltip?: boolean;
}

export function DonutChart({
  dataKey,
  nameKey,
  innerRadius = 60,
  outerRadius = 90,
  showLegend = true,
  showTooltip = true,
}: DonutChartProps) {
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
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={2}
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