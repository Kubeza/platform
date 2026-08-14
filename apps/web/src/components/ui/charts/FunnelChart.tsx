"use client";

import {
  Funnel,
  FunnelChart as RechartsFunnelChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { ChartContainer } from "./ChartContainer";
import { useChart } from "./useChart";

interface FunnelChartProps {
  dataKey?: string;
  nameKey: string;
  showTooltip?: boolean;
}

export function FunnelChart({
  dataKey,
  nameKey,
  showTooltip = true,
}: FunnelChartProps) {
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
        <RechartsFunnelChart>
          {showTooltip && (
            <Tooltip />
          )}

          <Funnel
            data={data}
            dataKey={activeKey}
            nameKey={nameKey}
            fill="hsl(var(--primary))"
          >
            <LabelList
              position="right"
              dataKey={nameKey}
            />
          </Funnel>
        </RechartsFunnelChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}