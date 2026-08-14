import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type {
  DropdownLabelProps,
} from "./dropdown.types";

const DropdownLabel =
  forwardRef<
    HTMLDivElement,
    DropdownLabelProps
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
            "px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    },
  );

DropdownLabel.displayName =
  "DropdownLabel";

export default DropdownLabel;