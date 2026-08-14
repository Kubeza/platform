import * as React from "react";
import { AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";

interface FormErrorSummaryProps
  extends React.HTMLAttributes<HTMLDivElement> {
  errors: string[];
  title?: string;
}

export function FormErrorSummary({
  errors,
  title = "Please fix the following errors",
  className,
  ...props
}: FormErrorSummaryProps) {
  if (errors.length === 0) {
    return null;
  }

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={cn(
        "rounded-lg border border-danger/20 bg-danger/5 p-4",
        className,
      )}
      {...props}
    >
      <div className="mb-3 flex items-center gap-2">
        <AlertCircle className="h-5 w-5 text-danger" />
        <h3 className="font-medium text-danger">
          {title}
        </h3>
      </div>

      <ul className="list-disc space-y-1 pl-6 text-sm text-danger">
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    </div>
  );
}