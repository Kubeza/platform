import { forwardRef } from "react";

import {
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
} from "recharts";

import { cn } from "@/lib/cn";

import type {
  ChartDataPoint,
} from "./chart.types";

export interface SparklineProps
  extends React.HTMLAttributes<HTMLDivElement> {
  data: ChartDataPoint[];

  dataKey?: string;

  color?: string;

  strokeWidth?: number;
}

const Sparkline = forwardRef<
  HTMLDivElement,
  SparklineProps
>(
  (
    {
      data,
      dataKey = "value",
      color = "#6366F1",
      strokeWidth = 2,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "h-14 w-full",
          className,
        )}
        {...props}
      >
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <RechartsLineChart data={data}>
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={strokeWidth}
              dot={false}
              activeDot={false}
              isAnimationActive
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    );
  },
);

Sparkline.displayName =
  "Sparkline";

export default Sparkline;