import { forwardRef } from "react";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/cn";

import { useStepper } from "./Stepper";

import type {
  StepProps,
  StepStatus,
} from "./stepper.types";

const Step = forwardRef<HTMLDivElement, StepProps>(
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
          "group",
          orientation === "horizontal"
            ? "relative flex flex-1 flex-col items-center"
            : "relative flex items-start gap-4",
          className,
        )}
        data-status={computedStatus}
        {...props}
      >
        {orientation === "horizontal" && index < 4 && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[calc(50%+30px)] right-[-10px] top-5 z-0 flex -translate-y-1/2 items-center"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-[#4F46E5]/40 via-[#1D9BF0]/25 to-white/[0.06]" />

            <div className="flex size-5 items-center justify-center rounded-full border border-[#1D9BF0]/20 bg-[#050816]">
              <ArrowRight
                className="size-2.5 text-[#67E8F9]/60"
                aria-hidden="true"
              />
            </div>
          </div>
        )}

        <div
          className={cn(
            "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300",

            computedStatus === "completed" &&
              "border-emerald-500 bg-emerald-500 text-white",

            computedStatus === "active" &&
              "border-indigo-500 bg-indigo-600 text-white shadow-lg shadow-indigo-600/30",

            computedStatus === "pending" &&
              "border-slate-700 bg-slate-900 text-slate-400",

            computedStatus === "error" &&
              "border-red-500 bg-red-500 text-white",

            "group-hover:border-[#67E8F9]/50",
          )}
        >
          {index + 1}
        </div>

        <div
          className={cn(
            orientation === "horizontal"
              ? "mt-3 flex w-full flex-col items-center text-center"
              : "flex min-w-0 flex-1 flex-col pt-1",
          )}
        >
          {children}
        </div>
      </div>
    );
  },
);

Step.displayName = "Step";

export default Step;