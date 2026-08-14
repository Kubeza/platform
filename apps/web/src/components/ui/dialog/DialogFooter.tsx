import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import type {
  DialogFooterProps,
} from "./dialog.types";

const DialogFooter =
  forwardRef<
    HTMLDivElement,
    DialogFooterProps
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
            "flex items-center justify-end gap-3 border-t border-border p-6",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    },
  );

DialogFooter.displayName =
  "DialogFooter";

export default DialogFooter;