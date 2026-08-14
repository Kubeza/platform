import * as React from "react";

import { cn } from "@/lib/utils";

interface FormActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function FormActions({
  className,
  children,
  ...props
}: FormActionsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-end gap-3 pt-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}