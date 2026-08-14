import * as React from "react";

import { cn } from "@/lib/utils";

interface FormRequiredIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

export function FormRequiredIndicator({
  className,
  ...props
}: FormRequiredIndicatorProps) {
  return (
    <span
      aria-label="required"
      className={cn(
        "ml-1 text-danger",
        className,
      )}
      {...props}
    >
      *
    </span>
  );
}