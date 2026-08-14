import * as React from "react";

import { cn } from "@/lib/utils";

interface FormDividerProps
  extends React.HTMLAttributes<HTMLHRElement> {}

export function FormDivider({
  className,
  ...props
}: FormDividerProps) {
  return (
    <hr
      className={cn(
        "border-border",
        className,
      )}
      {...props}
    />
  );
}