import * as React from "react";
import { AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";

export interface ValidationError {
  field: string;
  message: string;
}

interface FormValidationSummaryProps
  extends React.HTMLAttributes<HTMLDivElement> {
  errors: ValidationError[];
  title?: string;
}

export function FormValidationSummary({
  errors,
  title = "Please correct the following errors",
  className,
  ...props
}: FormValidationSummaryProps) {
  if (errors.length === 0) {
    return null;
  }

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={cn(
        "rounded-lg border border-destructive/20 bg-destructive/5 p-4",
        className,
      )}
      {...props}
    >
      <div className="mb-3 flex items-center gap-2">
        <AlertCircle className="h-5 w-5 text-destructive" />
        <h3 className="font-medium">{title}</h3>
      </div>

      <ul className="list-disc space-y-1 pl-6 text-sm">
        {errors.map((error) => (
          <li key={error.field}>
            <strong>{error.field}:</strong>{" "}
            {error.message}
          </li>
        ))}
      </ul>
    </div>
  );
}