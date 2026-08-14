import * as React from "react";

import { cn } from "@/lib/utils";

interface FormGridProps
  extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4;
}

const columnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
} as const;

export function FormGrid({
  columns = 2,
  className,
  children,
  ...props
}: FormGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        columnClasses[columns],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}