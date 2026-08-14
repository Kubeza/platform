import { X } from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  ToastCloseProps,
} from "./toast.types";

const ToastClose = ({
  className,
  ...props
}: ToastCloseProps) => {
  return (
    <button
      type="button"
      aria-label="Close"
      className={cn(
        "absolute right-3 top-3 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
        className,
      )}
      {...props}
    >
      <X className="h-4 w-4" />
    </button>
  );
};

export default ToastClose;