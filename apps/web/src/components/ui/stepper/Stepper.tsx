import {
  createContext,
  forwardRef,
  useContext,
  useMemo,
} from "react";

import { cn } from "@/lib/cn";

import type {
  StepperContextValue,
  StepperProps,
} from "./stepper.types";

const StepperContext =
  createContext<StepperContextValue | null>(
    null,
  );

export function useStepper() {
  const context =
    useContext(
      StepperContext,
    );

  if (!context) {
    throw new Error(
      "Step components must be used inside Stepper.",
    );
  }

  return context;
}

const Stepper = forwardRef<
  HTMLDivElement,
  StepperProps
>(
  (
    {
      children,
      className,
      activeStep = 0,
      orientation =
        "horizontal",
      ...props
    },
    ref,
  ) => {
    const value =
      useMemo<
        StepperContextValue
      >(
        () => ({
          activeStep,
          orientation,
        }),
        [
          activeStep,
          orientation,
        ],
      );

    return (
      <StepperContext.Provider
        value={value}
      >
        <div
          ref={ref}
          className={cn(
            orientation ===
              "horizontal"
              ? "flex w-full items-start justify-between gap-4"
              : "flex w-full flex-col gap-6",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </StepperContext.Provider>
    );
  },
);

Stepper.displayName =
  "Stepper";

export default Stepper;