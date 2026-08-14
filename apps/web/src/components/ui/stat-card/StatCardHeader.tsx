import { forwardRef } from "react";

import {
  AlertTriangle,
  CheckCircle2,
  Info,
  XCircle,
} from "lucide-react";

import { cn } from "@/lib/cn";

import type {
  StatCardHeaderProps,
} from "./stat-card.types";

const statusIcons = {
  default: null,

  success: (
    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
  ),

  warning: (
    <AlertTriangle className="h-4 w-4 text-amber-400" />
  ),

  error: (
    <XCircle className="h-4 w-4 text-red-400" />
  ),

  info: (
    <Info className="h-4 w-4 text-sky-400" />
  ),
};

const StatCardHeader = forwardRef<
  HTMLDivElement,
  StatCardHeaderProps
>(
  (
    {
    heading,
      icon,
      status = "default",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-between",
          className,
        )}
        {...props}
      >
        <div className="flex items-center gap-3">
          {icon && (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300">
              {icon}
            </div>
          )}

          <div>
            <h3 className="text-sm font-medium text-slate-400">
              {heading}
            </h3>
          </div>
        </div>

        {statusIcons[status]}
      </div>
    );
  },
);

StatCardHeader.displayName =
  "StatCardHeader";

export default StatCardHeader;