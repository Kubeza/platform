import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type {
  ToastActionProps,
} from "./toast.types";

const ToastAction = forwardRef<
  HTMLButtonElement,
  ToastActionProps
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
      <button
        ref={ref}
        className={cn(
          "mt-2 inline-flex h-9 items-center justify-center rounded-md border border-border px-4 text-sm font-medium transition-colors hover:bg-muted",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

ToastAction.displayName =
  "ToastAction";

export default ToastAction;