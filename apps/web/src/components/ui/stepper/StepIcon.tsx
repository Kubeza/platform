import { forwardRef } from "react";

import {
  AlertCircle,
  Check,
} from "lucide-react";

import { cn } from "@/lib/cn";

import type {
  StepIconProps,
} from "./stepper.types";

const StepIcon = forwardRef<
  HTMLDivElement,
  StepIconProps
>(
  (
    {
      className,
      index,
      status = "pending",
      children,
      ...props
    },
    ref,
  ) => {
    const icon =
      status === "completed" ? (
        <Check className="h-5 w-5" />
      ) : status ===
        "error" ? (
        <AlertCircle className="h-5 w-5" />
      ) : (
        <span>{index + 1}</span>
      );

    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300",

          status ===
            "completed" &&
            "border-emerald-500 bg-emerald-500 text-white",

          status ===
            "active" &&
            "border-indigo-500 bg-indigo-600 text-white shadow-lg shadow-indigo-600/30",

          status ===
            "pending" &&
            "border-slate-700 bg-slate-900 text-slate-400",

          status ===
            "error" &&
            "border-red-500 bg-red-500 text-white",

          className,
        )}
        {...props}
      >
        {children ?? icon}
      </div>
    );
  },
);

StepIcon.displayName =
  "StepIcon";

export default StepIcon;