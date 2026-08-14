import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import type {
  StatCardValueProps,
} from "./stat-card.types";

const StatCardValue = forwardRef<
  HTMLDivElement,
  StatCardValueProps
>(
  (
    {
      value,
      subtitle,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mt-6",
          className,
        )}
        {...props}
      >
        <div className="text-4xl font-bold tracking-tight text-slate-100">
          {value}
        </div>

        {subtitle && (
          <p className="mt-2 text-sm text-slate-400">
            {subtitle}
          </p>
        )}
      </div>
    );
  },
);

StatCardValue.displayName =
  "StatCardValue";

export default StatCardValue;