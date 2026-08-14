import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import type {
  StatCardFooterProps,
} from "./stat-card.types";

const StatCardFooter = forwardRef<
  HTMLDivElement,
  StatCardFooterProps
>(
  (
    {
      children,
      className,
      ...props
    },
    ref,
  ) => {
    if (!children) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          "mt-6 flex items-center justify-between border-t border-slate-800 pt-4 text-sm text-slate-400",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

StatCardFooter.displayName =
  "StatCardFooter";

export default StatCardFooter;