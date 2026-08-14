import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type {
  PopoverArrowProps,
} from "./popover.types";

const PopoverArrow =
  forwardRef<
    HTMLDivElement,
    PopoverArrowProps
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
            "absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-border bg-background",
            className,
          )}
          {...props}
        />
      );
    },
  );

PopoverArrow.displayName =
  "PopoverArrow";

export default PopoverArrow;