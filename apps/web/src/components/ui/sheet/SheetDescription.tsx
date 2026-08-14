import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type { SheetDescriptionProps } from "./sheet.types";

const SheetDescription = forwardRef<
  HTMLParagraphElement,
  SheetDescriptionProps
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "text-sm leading-6 text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
});

SheetDescription.displayName = "SheetDescription";

export default SheetDescription;