import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import {
  SHEET_WIDTH,
  SHEET_MAX_WIDTH,
  SHEET_Z_INDEX,
} from "./constants";

import {
  getSheetPositionClasses,
} from "./utils";

import {
  useSheetContext,
} from "./Sheet";

import type {
  SheetContentProps,
} from "./sheet.types";

const SheetContent =
  forwardRef<
    HTMLDivElement,
    SheetContentProps
  >(
    (
      {
        className,
        style,
        children,
        ...props
      },
      ref,
    ) => {
      const sheet =
        useSheetContext();

      if (!sheet.open) {
        return null;
      }

      return (
        <div
          ref={ref}
          className={cn(
            "fixed overflow-auto border-border bg-background shadow-2xl",
            getSheetPositionClasses(
              sheet.side,
            ),
            className,
          )}
          style={{
            width:
              sheet.side ===
                "left" ||
              sheet.side ===
                "right"
                ? SHEET_WIDTH
                : "100%",
            maxWidth:
              SHEET_MAX_WIDTH,
            zIndex:
              SHEET_Z_INDEX +
              1,
            ...style,
          }}
          role="dialog"
          aria-modal="true"
          {...props}
        >
          {children}
        </div>
      );
    },
  );

SheetContent.displayName =
  "SheetContent";

export default SheetContent;