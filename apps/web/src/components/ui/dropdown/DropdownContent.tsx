import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import {
  DROPDOWN_MIN_WIDTH,
  DROPDOWN_OFFSET,
  DROPDOWN_Z_INDEX,
} from "./constants";

import {
  useDropdownContext,
} from "./Dropdown";

import type {
  DropdownContentProps,
} from "./dropdown.types";

const DropdownContent =
  forwardRef<
    HTMLDivElement,
    DropdownContentProps
  >(
    (
      {
        className,
        children,
        style,
        ...props
      },
      ref,
    ) => {
      const dropdown =
        useDropdownContext();

      if (
        !dropdown.open
      ) {
        return null;
      }

      return (
        <div
          ref={ref}
          style={{
            minWidth:
              DROPDOWN_MIN_WIDTH,
            marginTop:
              DROPDOWN_OFFSET,
            zIndex:
              DROPDOWN_Z_INDEX,
            ...style,
          }}
          className={cn(
            "absolute right-0 rounded-xl border border-border bg-background p-2 shadow-xl",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    },
  );

DropdownContent.displayName =
  "DropdownContent";

export default DropdownContent;