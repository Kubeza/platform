import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import {
  DRAWER_WIDTH,
  DRAWER_MAX_WIDTH,
} from "./constants";

import {
  getDrawerPositionClasses,
} from "./utils";

import type {
  DrawerContentProps,
} from "./drawer.types";

const DrawerContent =
  forwardRef<
    HTMLDivElement,
    DrawerContentProps
  >(
    (
      {
        position = "right",
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
            "fixed overflow-auto border-border bg-background shadow-2xl",
            getDrawerPositionClasses(
              position,
            ),
            className,
          )}
          style={{
            width:
              position ===
                "left" ||
              position ===
                "right"
                ? DRAWER_WIDTH
                : undefined,
            maxWidth:
              DRAWER_MAX_WIDTH,
          }}
          {...props}
        >
          {children}
        </div>
      );
    },
  );

DrawerContent.displayName =
  "DrawerContent";

export default DrawerContent;