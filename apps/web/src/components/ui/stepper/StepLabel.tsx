import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import { useStepper } from "./Stepper";

import type {
  StepLabelProps,
} from "./stepper.types";

const StepLabel = forwardRef<
  HTMLDivElement,
  StepLabelProps
>(
  (
    {
      title,
      description,
      className,
      ...props
    },
    ref,
  ) => {
    const {
      orientation,
    } = useStepper();

    return (
      <div
        ref={ref}
        className={cn(
          orientation ===
            "horizontal"
            ? "flex flex-col items-center text-center"
            : "flex flex-col items-start text-left",

          className,
        )}
        {...props}
      >
        <span
          className={cn(
            "text-sm font-semibold text-slate-100",
          )}
        >
          {title}
        </span>

        {description && (
          <span
            className={cn(
              "mt-1 text-xs leading-relaxed text-slate-400",
            )}
          >
            {description}
          </span>
        )}
      </div>
    );
  },
);

StepLabel.displayName =
  "StepLabel";

export default StepLabel;