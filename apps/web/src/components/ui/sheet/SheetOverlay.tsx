import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import {
  SHEET_Z_INDEX,
} from "./constants";

import {
  useSheetContext,
} from "./Sheet";

import type {
  SheetOverlayProps,
} from "./sheet.types";

const SheetOverlay =
  forwardRef<
    HTMLDivElement,
    SheetOverlayProps
  >(
    (
      {
        className,
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
            "fixed inset-0 bg-black/50 backdrop-blur-sm",
            className,
          )}
          style={{
            zIndex:
              SHEET_Z_INDEX,
          }}
          {...props}
        />
      );
    },
  );

SheetOverlay.displayName =
  "SheetOverlay";

export default SheetOverlay;