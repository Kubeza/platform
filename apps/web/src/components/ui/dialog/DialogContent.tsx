import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import {
  DIALOG_MAX_HEIGHT,
  DIALOG_MAX_WIDTH,
  DIALOG_MIN_WIDTH,
  DIALOG_Z_INDEX,
} from "./constants";

import {
  useDialogContext,
} from "./Dialog";

import type {
  DialogContentProps,
} from "./dialog.types";

const DialogContent =
  forwardRef<
    HTMLDivElement,
    DialogContentProps
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
      const dialog =
        useDialogContext();

      if (
        !dialog.open
      ) {
        return null;
      }

      return (
        <div
          ref={ref}
          className={cn(
            "fixed left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-background shadow-2xl",
            className,
          )}
          style={{
            minWidth:
              DIALOG_MIN_WIDTH,
            maxWidth:
              DIALOG_MAX_WIDTH,
            maxHeight:
              DIALOG_MAX_HEIGHT,
            overflow: "auto",
            zIndex:
              DIALOG_Z_INDEX +
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

DialogContent.displayName =
  "DialogContent";

export default DialogContent;