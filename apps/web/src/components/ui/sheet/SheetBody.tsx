import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type { SheetBodyProps } from "./sheet.types";

const SheetBody = forwardRef<
  HTMLDivElement,
  SheetBodyProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex-1 overflow-y-auto p-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

SheetBody.displayName = "SheetBody";

export default SheetBody;