import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import StatCardChart from "./StatCardChart";
import StatCardFooter from "./StatCardFooter";
import StatCardHeader from "./StatCardHeader";
import StatCardTrend from "./StatCardTrend";
import StatCardValue from "./StatCardValue";

import type {
  StatCardProps,
} from "./stat-card.types";

const StatCard = forwardRef<
  HTMLDivElement,
  StatCardProps
>(
  (
    {
      heading,
      value,
      subtitle,
      icon,
      trend,
      trendDirection,
      trendLabel,
      status = "default",
      chartType,
      chartData,
      footer,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-sm transition-all duration-300 hover:border-slate-700 hover:shadow-lg",
          className,
        )}
        {...props}
      >
        <StatCardHeader
    heading={heading}
    icon={icon}
    status={status}
/>

        <StatCardValue
          value={value}
          subtitle={subtitle}
        />

        {(trend !==
          undefined ||
          trendLabel) && (
          <div className="mt-5">
            <StatCardTrend
              value={trend}
              direction={
                trendDirection
              }
              label={
                trendLabel
              }
            />
          </div>
        )}

        {chartType &&
          chartData && (
            <div className="mt-6">
              <StatCardChart
                type={
                  chartType
                }
                data={
                  chartData
                }
              />
            </div>
          )}

        {footer && (
          <StatCardFooter>
            {footer}
          </StatCardFooter>
        )}
      </div>
    );
  },
);

StatCard.displayName =
  "StatCard";

export default StatCard;