import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import type {
  SheetTitleProps,
} from "./sheet.types";

const SheetTitle =
  forwardRef<
    HTMLHeadingElement,
    SheetTitleProps
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
        <h2
          ref={ref}
          className={cn(
            "text-xl font-semibold tracking-tight",
            className,
          )}
          {...props}
        >
          {children}
        </h2>
      );
    },
  );

SheetTitle.displayName =
  "SheetTitle";

export default SheetTitle;