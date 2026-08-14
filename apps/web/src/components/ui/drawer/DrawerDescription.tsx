import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type {
  DrawerDescriptionProps,
} from "./drawer.types";

const DrawerDescription =
  forwardRef<
    HTMLParagraphElement,
    DrawerDescriptionProps
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
        <p
          ref={ref}
          className={cn(
            "mt-2 text-sm leading-6 text-muted-foreground",
            className,
          )}
          {...props}
        >
          {children}
        </p>
      );
    },
  );

DrawerDescription.displayName =
  "DrawerDescription";

export default DrawerDescription;