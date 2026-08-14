import { forwardRef } from "react";

import {
  ChevronRight,
  ChevronDown,
} from "lucide-react";

import { cn } from "@/lib/cn";

import type {
  TreeToggleProps,
} from "./tree.types";

const TreeToggle = forwardRef<
  HTMLButtonElement,
  TreeToggleProps
>(
  (
    {
      expanded,
      hasChildren,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        aria-label={
          expanded
            ? "Collapse"
            : "Expand"
        }
        className={cn(
          "flex h-5 w-5 items-center justify-center rounded transition-colors",

          hasChildren
            ? "hover:bg-slate-800"
            : "pointer-events-none opacity-0",

          className,
        )}
        {...props}
      >
        {!hasChildren ? null : expanded ? (
          <ChevronDown className="h-4 w-4 text-slate-400" />
        ) : (
          <ChevronRight className="h-4 w-4 text-slate-400" />
        )}
      </button>
    );
  },
);

TreeToggle.displayName =
  "TreeToggle";

export default TreeToggle;