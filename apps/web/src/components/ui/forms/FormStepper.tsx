import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export interface FormStep {
  id: string;
  title: string;
  description?: string;
}

interface FormStepperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  steps: FormStep[];
  currentStep: number;
}

export function FormStepper({
  steps,
  currentStep,
  className,
  ...props
}: FormStepperProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4",
        className,
      )}
      {...props}
    >
      {steps.map((step, index) => {
        const completed =
          index < currentStep;

        const active =
          index === currentStep;

        return (
          <div
            key={step.id}
            className="flex flex-1 items-center gap-3"
          >
            <div
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border",
                completed &&
                  "bg-primary text-primary-foreground",
                active &&
                  "border-primary",
              )}
            >
              {completed ? (
                <Check className="h-4 w-4" />
              ) : (
                index + 1
              )}
            </div>

            <div>
              <p className="font-medium">
                {step.title}
              </p>

              {step.description && (
                <p className="text-xs text-muted-foreground">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}