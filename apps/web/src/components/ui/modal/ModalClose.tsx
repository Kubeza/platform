import { forwardRef } from "react";

import { X } from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  ModalCloseProps,
} from "./modal.types";

const ModalClose =
  forwardRef<
    HTMLButtonElement,
    ModalCloseProps
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
          aria-label="Close"
          className={cn(
            "absolute right-4 top-4 rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
            className,
          )}
          {...props}
        >
          <X className="h-5 w-5" />
        </button>
      );
    },
  );

ModalClose.displayName =
  "ModalClose";

export default ModalClose;