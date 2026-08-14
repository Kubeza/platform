import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import {
  POPOVER_MIN_WIDTH,
  POPOVER_MAX_WIDTH,
  POPOVER_OFFSET,
  POPOVER_Z_INDEX,
} from "./constants";

import {
  getPopoverPlacementClasses,
} from "./utils";

import {
  usePopoverContext,
} from "./Popover";

import type {
  PopoverContentProps,
} from "./popover.types";

const PopoverContent =
  forwardRef<
    HTMLDivElement,
    PopoverContentProps
  >(
    (
      {
        className,
        style,
        children,
        ...props
      },
      ref,
    ) => {
      const popover =
        usePopoverContext();

      if (!popover.open) {
        return null;
      }

      return (
        <div
          ref={ref}
          style={{
            minWidth:
              POPOVER_MIN_WIDTH,
            maxWidth:
              POPOVER_MAX_WIDTH,
            marginTop:
              POPOVER_OFFSET,
            zIndex:
              POPOVER_Z_INDEX,
            ...style,
          }}
          className={cn(
            getPopoverPlacementClasses(),
            "rounded-xl border border-border bg-background p-4 shadow-xl",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    },
  );

PopoverContent.displayName =
  "PopoverContent";

export default PopoverContent;