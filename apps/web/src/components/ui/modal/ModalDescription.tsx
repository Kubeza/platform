import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type {
  ModalDescriptionProps,
} from "./modal.types";

const ModalDescription =
  forwardRef<
    HTMLParagraphElement,
    ModalDescriptionProps
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
            "mt-2 text-sm leading-6 text-muted-foreground",
            className,
          )}
          {...props}
        >
          {children}
        </p>
      );
    },
  );

ModalDescription.displayName =
  "ModalDescription";

export default ModalDescription;