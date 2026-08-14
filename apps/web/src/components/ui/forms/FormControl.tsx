import * as React from "react";

import { cn } from "@/lib/utils";

interface FormControlProps
  extends React.HTMLAttributes<HTMLDivElement> {
  error?: boolean;
}

export function FormControl({
  children,
  className,
  error = false,
  ...props
}: FormControlProps) {
  return (
    <div
      className={cn(
        "relative w-full",
        error &&
          "[&_input]:border-danger [&_textarea]:border-danger [&_select]:border-danger",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}