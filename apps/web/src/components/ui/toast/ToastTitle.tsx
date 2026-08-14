import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type {
  ToastTitleProps,
} from "./toast.types";

const ToastTitle = forwardRef<
  HTMLHeadingElement,
  ToastTitleProps
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
      <h5
        ref={ref}
        className={cn(
          "text-sm font-semibold",
          className,
        )}
        {...props}
      >
        {children}
      </h5>
    );
  },
);

ToastTitle.displayName =
  "ToastTitle";

export default ToastTitle;