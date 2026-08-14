import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import {
  DIALOG_Z_INDEX,
} from "./constants";

import {
  useDialogContext,
} from "./Dialog";

import type {
  DialogOverlayProps,
} from "./dialog.types";

const DialogOverlay =
  forwardRef<
    HTMLDivElement,
    DialogOverlayProps
  >(
    (
      {
        className,
        ...props
      },
      ref,
    ) => {
      const dialog =
        useDialogContext();

      if (!dialog.open) {
        return null;
      }

      return (
        <div
          ref={ref}
          className={cn(
            "fixed inset-0 bg-black/60 backdrop-blur-sm",
            className,
          )}
          style={{
            zIndex:
              DIALOG_Z_INDEX,
          }}
          {...props}
        />
      );
    },
  );

DialogOverlay.displayName =
  "DialogOverlay";

export default DialogOverlay;