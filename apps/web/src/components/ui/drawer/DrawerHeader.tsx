import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import type {
  DrawerHeaderProps,
} from "./drawer.types";

const DrawerHeader =
  forwardRef<
    HTMLDivElement,
    DrawerHeaderProps
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
        <div
          ref={ref}
          className={cn(
            "border-b border-border px-6 py-5",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    },
  );

DrawerHeader.displayName =
  "DrawerHeader";

export default DrawerHeader;