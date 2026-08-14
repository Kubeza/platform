import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type {
  ModalFooterProps,
} from "./modal.types";

const ModalFooter =
  forwardRef<
    HTMLDivElement,
    ModalFooterProps
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
            "flex items-center justify-end gap-3 border-t border-border px-6 py-4",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    },
  );

ModalFooter.displayName =
  "ModalFooter";

export default ModalFooter;