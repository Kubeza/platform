import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import type {
  ModalTitleProps,
} from "./modal.types";

const ModalTitle =
  forwardRef<
    HTMLHeadingElement,
    ModalTitleProps
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
        <h2
          ref={ref}
          className={cn(
            "text-xl font-semibold tracking-tight",
            className,
          )}
          {...props}
        >
          {children}
        </h2>
      );
    },
  );

ModalTitle.displayName =
  "ModalTitle";

export default ModalTitle;