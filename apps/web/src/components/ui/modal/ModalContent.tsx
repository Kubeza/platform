import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import {
  MODAL_WIDTH,
  MODAL_MAX_WIDTH,
} from "./constants";

import type {
  ModalContentProps,
} from "./modal.types";

const ModalContent =
  forwardRef<
    HTMLDivElement,
    ModalContentProps
  >(
    (
      {
        className,
        style,
        children,
        ...props
      },
      ref,
    ) => {
      return (
        <div
          ref={ref}
          style={{
            width:
              MODAL_WIDTH,
            maxWidth:
              MODAL_MAX_WIDTH,
            ...style,
          }}
          className={cn(
            "overflow-hidden rounded-2xl border border-border bg-background shadow-2xl",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    },
  );

ModalContent.displayName =
  "ModalContent";

export default ModalContent;