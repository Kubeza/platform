import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import type {
  ModalHeaderProps,
} from "./modal.types";

const ModalHeader =
  forwardRef<
    HTMLDivElement,
    ModalHeaderProps
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
            "border-b border-border px-6 py-5",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    },
  );

ModalHeader.displayName =
  "ModalHeader";

export default ModalHeader;