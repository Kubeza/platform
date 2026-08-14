import * as React from "react";

import { cn } from "@/lib/utils";

interface FormProgressProps
  extends React.HTMLAttributes<HTMLDivElement> {
  completedFields: number;
  totalFields: number;
  showPercentage?: boolean;
}

export function FormProgress({
  completedFields,
  totalFields,
  showPercentage = true,
  className,
  ...props
}: FormProgressProps) {
  const percentage =
    totalFields === 0
      ? 0
      : Math.round(
          (completedFields / totalFields) * 100,
        );

  return (
    <div
      className={cn("space-y-2", className)}
      {...props}
    >
      <div className="flex items-center justify-between text-sm">
        <span>
          {completedFields} / {totalFields} completed
        </span>

        {showPercentage && (
          <span>{percentage}%</span>
        )}
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}