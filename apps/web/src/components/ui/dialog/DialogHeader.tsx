import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import type {
  DialogHeaderProps,
} from "./dialog.types";

const DialogHeader =
  forwardRef<
    HTMLDivElement,
    DialogHeaderProps
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

DialogHeader.displayName =
  "DialogHeader";

export default DialogHeader;