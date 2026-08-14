import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type {
  DrawerBodyProps,
} from "./drawer.types";

const DrawerBody =
  forwardRef<
    HTMLDivElement,
    DrawerBodyProps
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
            "flex-1 overflow-auto px-6 py-5",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    },
  );

DrawerBody.displayName =
  "DrawerBody";

export default DrawerBody;