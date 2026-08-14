import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import type {
  DialogTitleProps,
} from "./dialog.types";

const DialogTitle =
  forwardRef<
    HTMLHeadingElement,
    DialogTitleProps
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
            "text-2xl font-semibold tracking-tight",
            className,
          )}
          {...props}
        >
          {children}
        </h2>
      );
    },
  );

DialogTitle.displayName =
  "DialogTitle";

export default DialogTitle;