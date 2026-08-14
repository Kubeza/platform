"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts";

import { cn } from "@/lib/utils";

export interface MetricSparklinePoint {
  value: number;
}

export interface MetricSparklineProps {
  data: MetricSparklinePoint[];
  className?: string;
  color?: string;
  strokeWidth?: number;
}

export function MetricSparkline({
  data,
  className,
  color = "hsl(var(--primary))",
  strokeWidth = 2,
}: MetricSparklineProps) {
  return (
    <div
      className={cn(
        "h-14 w-full",
        className,
      )}
    >
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={strokeWidth}
            dot={false}
            activeDot={false}
            isAnimationActive
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}