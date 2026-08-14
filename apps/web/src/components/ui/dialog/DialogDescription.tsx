import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import type {
  DialogDescriptionProps,
} from "./dialog.types";

const DialogDescription =
  forwardRef<
    HTMLParagraphElement,
    DialogDescriptionProps
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
        <p
          ref={ref}
          className={cn(
            "text-sm text-muted-foreground",
            className,
          )}
          {...props}
        >
          {children}
        </p>
      );
    },
  );

DialogDescription.displayName =
  "DialogDescription";

export default DialogDescription;