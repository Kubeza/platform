import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type {
  DrawerFooterProps,
} from "./drawer.types";

const DrawerFooter =
  forwardRef<
    HTMLDivElement,
    DrawerFooterProps
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

DrawerFooter.displayName =
  "DrawerFooter";

export default DrawerFooter;