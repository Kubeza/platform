import { forwardRef } from "react";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

const DataGridToolbar =
  forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
  >(
    (
      {
        className,
        children,
        ...props
      },
      ref,
    ) => {
      return (
        <div
          ref={ref}
          className={cn(
            "flex items-center justify-between gap-4 border-b bg-background px-4 py-3",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    },
  );

DataGridToolbar.displayName =
  "DataGridToolbar";

export default DataGridToolbar;