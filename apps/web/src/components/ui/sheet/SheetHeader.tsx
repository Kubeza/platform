import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import type {
  SheetHeaderProps,
} from "./sheet.types";

const SheetHeader =
  forwardRef<
    HTMLDivElement,
    SheetHeaderProps
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
            "flex flex-col gap-2 border-b border-border p-6",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    },
  );

SheetHeader.displayName =
  "SheetHeader";

export default SheetHeader;