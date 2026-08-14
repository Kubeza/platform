import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type { SheetFooterProps } from "./sheet.types";

const SheetFooter = forwardRef<
  HTMLDivElement,
  SheetFooterProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-end gap-3 border-t border-border p-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

SheetFooter.displayName = "SheetFooter";

export default SheetFooter;