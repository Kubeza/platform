import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import {
  CLOSE_ON_ITEM_CLICK,
} from "./constants";

import {
  useDropdownContext,
} from "./Dropdown";

import {
  getItemClasses,
} from "./utils";

import type {
  DropdownItemProps,
} from "./dropdown.types";

const DropdownItem =
  forwardRef<
    HTMLButtonElement,
    DropdownItemProps
  >(
    (
      {
        icon,
        inset,
        destructive,
        className,
        children,
        onClick,
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

            if (
              CLOSE_ON_ITEM_CLICK
            ) {
              dropdown.setOpen(
                false,
              );
            }
          }}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors",
            inset &&
              "pl-8",
            getItemClasses(
              destructive,
            ),
            className,
          )}
          {...props}
        >
          {icon}

          <span>
            {children}
          </span>
        </button>
      );
    },
  );

DropdownItem.displayName =
  "DropdownItem";

export default DropdownItem;