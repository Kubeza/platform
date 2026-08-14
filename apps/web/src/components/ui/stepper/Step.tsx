import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import { useStepper } from "./Stepper";

import type {
  StepProps,
  StepStatus,
} from "./stepper.types";

const Step = forwardRef<
  HTMLDivElement,
  StepProps
>(
  (
    {
      children,
      className,
      index,
      status,
      ...props
    },
    ref,
  ) => {
    const {
      activeStep,
      orientation,
    } = useStepper();

    const computedStatus: StepStatus =
      status ??
      (index < activeStep
        ? "completed"
        : index === activeStep
          ? "active"
          : "pending");

    return (
      <div
        ref={ref}
        className={cn(
          orientation ===
            "horizontal"
            ? "relative flex flex-1 flex-col items-center"
            : "relative flex items-start gap-4",

          className,
        )}
        data-status={
          computedStatus
        }
        {...props}
      >
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300",

            computedStatus ===
              "completed" &&
              "border-emerald-500 bg-emerald-500 text-white",

            computedStatus ===
              "active" &&
              "border-indigo-500 bg-indigo-600 text-white shadow-lg shadow-indigo-600/30",

            computedStatus ===
              "pending" &&
              "border-slate-700 bg-slate-900 text-slate-400",

            computedStatus ===
              "error" &&
              "border-red-500 bg-red-500 text-white",
          )}
        >
          {index + 1}
        </div>

        <div
          className={cn(
            orientation ===
              "horizontal"
              ? "mt-3 flex w-full flex-col items-center text-center"
              : "flex min-w-0 flex-1 flex-col pt-1",
          )}
        >
          {children}
        </div>

       {orientation === "horizontal" && (
  <div
    className={cn(
      "absolute top-5 left-1/2 h-0.5 w-full -translate-y-1/2",

      computedStatus === "completed"
        ? "bg-emerald-500"
        : "bg-slate-800",
    )}
  />
)}
      </div>
    );
  },
);

Step.displayName =
  "Step";

export default Step;