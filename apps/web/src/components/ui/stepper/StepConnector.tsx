import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import type {
  StepConnectorProps,
} from "./stepper.types";

const StepConnector = forwardRef<
  HTMLDivElement,
  StepConnectorProps
>(
  (
    {
      completed = false,
      orientation = "horizontal",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(
          "relative overflow-hidden rounded-full transition-all duration-300",

          orientation ===
            "horizontal"
            ? "h-0.5 flex-1"
            : "ml-5 h-12 w-0.5",

          completed
            ? "bg-emerald-500"
            : "bg-slate-800",

          className,
        )}
        {...props}
      >
        <div
          className={cn(
            "absolute inset-0 origin-left transition-transform duration-500",

            completed
              ? "scale-100 bg-emerald-500"
              : "scale-0 bg-emerald-500",
          )}
        />
      </div>
    );
  },
);

StepConnector.displayName =
  "StepConnector";

export default StepConnector;