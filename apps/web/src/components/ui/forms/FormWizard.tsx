import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FormWizardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
}

export function FormWizard({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  children,
  className,
  ...props
}: FormWizardProps) {
  return (
    <div
      className={cn(
        "space-y-8",
        className,
      )}
      {...props}
    >
      {children}

      <div className="flex items-center justify-between">
        <Button
          type="button"
          variant="outline"
          disabled={currentStep === 0}
          onClick={onPrevious}
        >
          Previous
        </Button>

        <span className="text-sm text-muted-foreground">
          Step {currentStep + 1} of{" "}
          {totalSteps}
        </span>

        <Button
          type="button"
          variant="primary"
          onClick={onNext}
        >
          {currentStep ===
          totalSteps - 1
            ? "Finish"
            : "Next"}
        </Button>
      </div>
    </div>
  );
}