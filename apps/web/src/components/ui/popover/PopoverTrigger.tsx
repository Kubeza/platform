import { forwardRef } from "react";

import {
  usePopoverContext,
} from "./Popover";

import type {
  PopoverTriggerProps,
} from "./popover.types";

const PopoverTrigger =
  forwardRef<
    HTMLButtonElement,
    PopoverTriggerProps
  >(
    (
      {
        onClick,
        children,
        ...props
      },
      ref,
    ) => {
      const popover =
        usePopoverContext();

      return (
        <button
          ref={ref}
          type="button"
          onClick={(event) => {
            onClick?.(event);
            popover.toggle();
          }}
          {...props}
        >
          {children}
        </button>
      );
    },
  );

PopoverTrigger.displayName =
  "PopoverTrigger";

export default PopoverTrigger;