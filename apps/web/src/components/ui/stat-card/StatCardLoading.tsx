import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import type {
  StatCardLoadingProps,
} from "./stat-card.types";

const StatCardLoading = forwardRef<
  HTMLDivElement,
  StatCardLoadingProps
>(
  (
    {
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-6",
          className,
        )}
        {...props}
      >
        <div className="animate-pulse">
          <div className="flex items-center justify-between">
            <div className="h-4 w-28 rounded bg-slate-800" />

            <div className="h-5 w-5 rounded-full bg-slate-800" />
          </div>

          <div className="mt-6 h-10 w-36 rounded bg-slate-800" />

          <div className="mt-3 h-4 w-24 rounded bg-slate-800" />

          <div className="mt-6 flex h-16 items-end gap-1">
            {Array.from({
              length: 12,
            }).map((_, index) => (
              <div
                key={index}
                className="flex flex-1 items-end"
              >
                <div
                  className="w-full rounded bg-slate-800"
                  style={{
                    height: `${
                      20 +
                      (index % 5) * 12
                    }px`,
                  }}
                />
              </div>
            ))}
          </div>

          <div className="mt-6 h-4 w-full rounded bg-slate-800" />
        </div>
      </div>
    );
  },
);

StatCardLoading.displayName =
  "StatCardLoading";

export default StatCardLoading;