import * as React from "react";

import { cn } from "@/lib/utils";

interface FormLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export function FormLabel({
  children,
  required = false,
  className,
  ...props
}: FormLabelProps) {
  return (
    <label
      className={cn(
        "text-sm font-medium leading-none text-foreground",
        className,
      )}
      {...props}
    >
      {children}

      {required && (
        <span className="ml-1 text-danger">
          *
        </span>
      )}
    </label>
  );
}