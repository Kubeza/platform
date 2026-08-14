import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import {
  getToastClasses,
} from "./utils";

import ToastClose from "./ToastClose";

import type {
  ToastProps,
} from "./toast.types";

const Toast = forwardRef<
  HTMLDivElement,
  ToastProps
>(({ toast, className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex w-full flex-col gap-2 rounded-xl border bg-background p-4 shadow-lg transition-all duration-300",
        getToastClasses(
          toast.variant,
        ),
        className,
      )}
      {...props}
    >
      <ToastClose />

      {children}
    </div>
  );
});

Toast.displayName = "Toast";

export default Toast;