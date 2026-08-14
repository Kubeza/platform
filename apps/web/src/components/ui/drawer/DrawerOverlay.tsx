import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import {
  DRAWER_Z_INDEX,
} from "./constants";

import type {
  DrawerOverlayProps,
} from "./drawer.types";

const DrawerOverlay =
  forwardRef<
    HTMLDivElement,
    DrawerOverlayProps
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
            "fixed inset-0 bg-black/60 backdrop-blur-sm",
            "flex",
            className,
          )}
          style={{
            zIndex:
              DRAWER_Z_INDEX,
          }}
          {...props}
        >
          {children}
        </div>
      );
    },
  );

DrawerOverlay.displayName =
  "DrawerOverlay";

export default DrawerOverlay;