import {
  forwardRef,
} from "react";

import {
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

import {
  useDialogContext,
} from "./Dialog";

import type {
  DialogCloseProps,
} from "./dialog.types";

const DialogClose =
  forwardRef<
    HTMLButtonElement,
    DialogCloseProps
  >(
    (
      {
        className,
        onClick,
        ...props
      },
      ref,
    ) => {
      const dialog =
        useDialogContext();

      return (
        <button
          ref={ref}
          type="button"
          onClick={(event) => {
            onClick?.(event);
            dialog.setOpen(false);
          }}
          className={cn(
            "absolute right-4 top-4 rounded-md p-2 transition-colors hover:bg-muted",
            className,
          )}
          aria-label="Close dialog"
          {...props}
        >
          <X className="h-5 w-5" />
        </button>
      );
    },
  );

DialogClose.displayName =
  "DialogClose";

export default DialogClose;