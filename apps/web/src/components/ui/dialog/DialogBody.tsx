import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import type {
  DialogBodyProps,
} from "./dialog.types";

const DialogBody =
  forwardRef<
    HTMLDivElement,
    DialogBodyProps
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
            "flex-1 overflow-auto p-6",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    },
  );

DialogBody.displayName =
  "DialogBody";

export default DialogBody;