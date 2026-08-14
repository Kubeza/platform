import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type {
  ModalBodyProps,
} from "./modal.types";

const ModalBody =
  forwardRef<
    HTMLDivElement,
    ModalBodyProps
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
            "px-6 py-5",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    },
  );

ModalBody.displayName =
  "ModalBody";

export default ModalBody;