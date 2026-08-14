import * as React from "react";

import { cn } from "@/lib/utils";

interface FormGroupProps
  extends React.HTMLAttributes<HTMLFieldSetElement> {
  title?: string;
}

export function FormGroup({
  title,
  className,
  children,
  ...props
}: FormGroupProps) {
  return (
    <fieldset
      className={cn(
        "space-y-4 rounded-lg border p-4",
        className,
      )}
      {...props}
    >
      {title && (
        <legend className="px-2 text-sm font-semibold">
          {title}
        </legend>
      )}

      {children}
    </fieldset>
  );
}