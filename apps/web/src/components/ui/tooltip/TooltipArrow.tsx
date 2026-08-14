import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import type {
  TooltipArrowProps,
} from "./tooltip.types";

const TooltipArrow =
  forwardRef<
    HTMLDivElement,
    TooltipArrowProps
  >(
    (
      {
        className,
        ...props
      },
      ref,
    ) => {
      return (
        <div
          ref={ref}
          className={cn(
            "absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-900",
            className,
          )}
          {...props}
        />
      );
    },
  );

TooltipArrow.displayName =
  "TooltipArrow";

export default TooltipArrow;