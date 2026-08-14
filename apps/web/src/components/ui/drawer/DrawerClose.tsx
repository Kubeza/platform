import { forwardRef } from "react";

import { X } from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  DrawerCloseProps,
} from "./drawer.types";

const DrawerClose =
  forwardRef<
    HTMLButtonElement,
    DrawerCloseProps
  >(
    (
      {
        className,
        ...props
      },
      ref,
    ) => {
      return (
        <button
          ref={ref}
          type="button"
          aria-label="Close drawer"
          className={cn(
            "absolute right-4 top-4 rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
            className,
          )}
          {...props}
        >
          <X className="h-5 w-5" />
        </button>
      );
    },
  );

DrawerClose.displayName =
  "DrawerClose";

export default DrawerClose;