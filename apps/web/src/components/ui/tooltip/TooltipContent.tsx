import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import {
  TOOLTIP_MAX_WIDTH,
  TOOLTIP_OFFSET,
  TOOLTIP_Z_INDEX,
} from "./constants";

import {
  getTooltipPlacementClasses,
} from "./utils";

import {
  useTooltipContext,
} from "./Tooltip";

import type {
  TooltipContentProps,
} from "./tooltip.types";

const TooltipContent =
  forwardRef<
    HTMLDivElement,
    TooltipContentProps
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
      const tooltip =
        useTooltipContext();

      if (
        !tooltip.open
      ) {
        return null;
      }

      return (
        <div
          ref={ref}
          style={{
            maxWidth:
              TOOLTIP_MAX_WIDTH,
            margin:
              TOOLTIP_OFFSET,
            zIndex:
              TOOLTIP_Z_INDEX,
            ...style,
          }}
          className={cn(
            "absolute rounded-lg bg-gray-900 px-3 py-2 text-sm text-white shadow-xl",
            getTooltipPlacementClasses(
              tooltip.placement,
            ),
            className,
          )}
          role="tooltip"
          {...props}
        >
          {children}
        </div>
      );
    },
  );

TooltipContent.displayName =
  "TooltipContent";

export default TooltipContent;