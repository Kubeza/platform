import { forwardRef } from "react";

import {
  Check,
  AlertTriangle,
  XCircle,
  Loader2,
  Clock3,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/cn";

import type {
  TimelineDotProps,
} from "./timeline.types";

const statusStyles: Record<
  NonNullable<TimelineDotProps["status"]>,
  string
> = {
  default:
    "border-slate-700 bg-slate-900 text-slate-400",

  success:
    "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",

  warning:
    "border-amber-500/40 bg-amber-500/10 text-amber-400",

  error:
    "border-red-500/40 bg-red-500/10 text-red-400",

  running:
    "border-sky-500/40 bg-sky-500/10 text-sky-400",

  pending:
    "border-violet-500/40 bg-violet-500/10 text-violet-400",

  ai:
    "border-cyan-500/40 bg-cyan-500/10 text-cyan-400",
};

const TimelineDot = forwardRef<
  HTMLDivElement,
  TimelineDotProps
>(
  (
    {
      status = "default",
      icon,
      className,
      ...props
    },
    ref,
  ) => {
    const renderIcon = () => {
      if (icon) {
        return icon;
      }

      switch (status) {
        case "success":
          return (
            <Check className="h-4 w-4" />
          );

        case "warning":
          return (
            <AlertTriangle className="h-4 w-4" />
          );

        case "error":
          return (
            <XCircle className="h-4 w-4" />
          );

        case "running":
          return (
            <Loader2 className="h-4 w-4 animate-spin" />
          );

        case "pending":
          return (
            <Clock3 className="h-4 w-4" />
          );

        case "ai":
          return (
            <Sparkles className="h-4 w-4" />
          );

        default:
          return (
            <div className="h-2 w-2 rounded-full bg-current" />
          );
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border shadow-sm",
          statusStyles[status],
          className,
        )}
        {...props}
      >
        {renderIcon()}
      </div>
    );
  },
);

TimelineDot.displayName =
  "TimelineDot";

export default TimelineDot;