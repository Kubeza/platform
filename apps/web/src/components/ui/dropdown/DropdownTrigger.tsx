import {
  forwardRef,
} from "react";

import type {
  DropdownTriggerProps,
} from "./dropdown.types";

import {
  useDropdownContext,
} from "./Dropdown";

const DropdownTrigger =
  forwardRef<
    HTMLButtonElement,
    DropdownTriggerProps
  >(
    (
      {
        onClick,
        children,
        ...props
      },
      ref,
    ) => {
      const dropdown =
        useDropdownContext();

      return (
        <button
          ref={ref}
          type="button"
          onClick={(
            event,
          ) => {
            onClick?.(
              event,
            );

            dropdown.toggle();
          }}
          {...props}
        >
          {children}
        </button>
      );
    },
  );

DropdownTrigger.displayName =
  "DropdownTrigger";

export default DropdownTrigger;