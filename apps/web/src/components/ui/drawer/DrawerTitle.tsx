import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import type {
  DrawerTitleProps,
} from "./drawer.types";

const DrawerTitle =
  forwardRef<
    HTMLHeadingElement,
    DrawerTitleProps
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
            "text-xl font-semibold",
            className,
          )}
          {...props}
        >
          {children}
        </h2>
      );
    },
  );

DrawerTitle.displayName =
  "DrawerTitle";

export default DrawerTitle;