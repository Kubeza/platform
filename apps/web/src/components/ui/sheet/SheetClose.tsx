import { forwardRef } from "react";

import { X } from "lucide-react";

import { cn } from "@/lib/utils";

import { useSheetContext } from "./Sheet";

import type { SheetCloseProps } from "./sheet.types";

const SheetClose = forwardRef<
  HTMLButtonElement,
  SheetCloseProps
>(({ className, onClick, ...props }, ref) => {
  const sheet = useSheetContext();

  return (
    <button
      ref={ref}
      type="button"
      aria-label="Close sheet"
      className={cn(
        "absolute right-4 top-4 rounded-md p-2 transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring",
        className,
      )}
      onClick={(event) => {
        onClick?.(event);
        sheet.setOpen(false);
      }}
      {...props}
    >
      <X className="h-5 w-5" />
    </button>
  );
});

SheetClose.displayName = "SheetClose";

export default SheetClose;