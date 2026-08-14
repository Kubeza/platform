import * as React from "react";

import { cn } from "@/lib/utils";

interface FormColumnProps
  extends React.HTMLAttributes<HTMLDivElement> {
  span?: 1 | 2 | 3 | 4;
}

const spans = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
} as const;

export function FormColumn({
  span = 1,
  className,
  children,
  ...props
}: FormColumnProps) {
  return (
    <div
      className={cn(
        spans[span],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}