import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import {
  MODAL_Z_INDEX,
  OVERLAY_OPACITY,
} from "./constants";

import type {
  ModalOverlayProps,
} from "./modal.types";

const ModalOverlay =
  forwardRef<
    HTMLDivElement,
    ModalOverlayProps
  >(
    (
      {
        className,
        children,
        style,
        ...props
      },
      ref,
    ) => {
      return (
        <div
          ref={ref}
          style={{
            backgroundColor: `rgba(0,0,0,${OVERLAY_OPACITY})`,
            zIndex:
              MODAL_Z_INDEX,
            ...style,
          }}
          className={cn(
            "fixed inset-0 flex items-center justify-center p-6 backdrop-blur-sm",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    },
  );

ModalOverlay.displayName =
  "ModalOverlay";

export default ModalOverlay;