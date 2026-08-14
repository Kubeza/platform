import * as React from "react";

import { cn } from "@/lib/utils";

interface FormFieldsetProps
  extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend?: string;
  description?: string;
}

export function FormFieldset({
  legend,
  description,
  className,
  children,
  ...props
}: FormFieldsetProps) {
  return (
    <fieldset
      className={cn(
        "space-y-4 rounded-lg border p-6",
        className,
      )}
      {...props}
    >
      {(legend || description) && (
        <div className="space-y-1">
          {legend && (
            <legend className="text-base font-semibold">
              {legend}
            </legend>
          )}

          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      )}

      {children}
    </fieldset>
  );
}