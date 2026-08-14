import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type {
  ToastDescriptionProps,
} from "./toast.types";

const ToastDescription =
  forwardRef<
    HTMLParagraphElement,
    ToastDescriptionProps
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

ToastDescription.displayName =
  "ToastDescription";

export default ToastDescription;