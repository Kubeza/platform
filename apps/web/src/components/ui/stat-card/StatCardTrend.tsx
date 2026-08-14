import { forwardRef } from "react";

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import { cn } from "@/lib/cn";

import type {
  StatCardTrendProps,
} from "./stat-card.types";

const styles = {
  up: {
    icon: ArrowUpRight,
    className:
      "text-emerald-400",
  },

  down: {
    icon: ArrowDownRight,
    className:
      "text-red-400",
  },

  neutral: {
    icon: ArrowRight,
    className:
      "text-slate-400",
  },
};

const StatCardTrend = forwardRef<
  HTMLDivElement,
  StatCardTrendProps
>(
  (
    {
      value,
      direction = "neutral",
      label,
      className,
      ...props
    },
    ref,
  ) => {
    const {
      icon: Icon,
      className: color,
    } =
      styles[
        direction
      ];

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-3",
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            "inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-semibold",
            color,
          )}
        >
          <Icon className="h-4 w-4" />

          {value !==
            undefined &&
            `${Math.abs(
              value,
            )}%`}
        </div>

        {label && (
          <span className="text-sm text-slate-500">
            {label}
          </span>
        )}
      </div>
    );
  },
);

StatCardTrend.displayName =
  "StatCardTrend";

export default StatCardTrend;