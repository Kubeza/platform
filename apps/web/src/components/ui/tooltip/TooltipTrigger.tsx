import {
  forwardRef,
} from "react";

import {
  TOOLTIP_DELAY,
} from "./constants";

import {
  useTooltipContext,
} from "./Tooltip";

import type {
  TooltipTriggerProps,
} from "./tooltip.types";

const TooltipTrigger =
  forwardRef<
    HTMLDivElement,
    TooltipTriggerProps
  >(
    (
      {
        onMouseEnter,
        onMouseLeave,
        onFocus,
        onBlur,
        children,
        ...props
      },
      ref,
    ) => {
      const tooltip =
        useTooltipContext();

      let timer:
        ReturnType<
          typeof setTimeout
        >;

      return (
        <div
          ref={ref}
          onMouseEnter={(event) => {
            onMouseEnter?.(event);

            timer =
              setTimeout(
                () =>
                  tooltip.show(),
                TOOLTIP_DELAY,
              );
          }}
          onMouseLeave={(event) => {
            onMouseLeave?.(event);

            clearTimeout(
              timer,
            );

            tooltip.hide();
          }}
          onFocus={(event) => {
            onFocus?.(event);

            tooltip.show();
          }}
          onBlur={(event) => {
            onBlur?.(event);

            tooltip.hide();
          }}
          {...props}
        >
          {children}
        </div>
      );
    },
  );

TooltipTrigger.displayName =
  "TooltipTrigger";

export default TooltipTrigger;