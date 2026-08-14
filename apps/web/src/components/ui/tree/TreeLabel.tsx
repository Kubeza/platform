import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import type {
  TreeLabelProps,
} from "./tree.types";

const TreeLabel = forwardRef<
  HTMLSpanElement,
  TreeLabelProps
>(
  (
    {
      children,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "flex-1 truncate text-sm font-medium text-slate-200 select-none",
          className,
        )}
        {...props}
      >
        {children}
      </span>
    );
  },
);

TreeLabel.displayName =
  "TreeLabel";

export default TreeLabel;