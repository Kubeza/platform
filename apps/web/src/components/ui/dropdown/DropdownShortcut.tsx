import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type {
  DropdownShortcutProps,
} from "./dropdown.types";

const DropdownShortcut =
  forwardRef<
    HTMLSpanElement,
    DropdownShortcutProps
  >(
    (
      {
        className,
        children,
        ...props
      },
      ref,
    ) => {
      return (
        <span
          ref={ref}
          className={cn(
            "ml-auto text-xs tracking-widest text-muted-foreground",
            className,
          )}
          {...props}
        >
          {children}
        </span>
      );
    },
  );

DropdownShortcut.displayName =
  "DropdownShortcut";

export default DropdownShortcut;