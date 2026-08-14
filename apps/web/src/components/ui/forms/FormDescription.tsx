import * as React from "react";

import { cn } from "@/lib/utils";

interface FormDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function FormDescription({
  className,
  children,
  ...props
}: FormDescriptionProps) {
  return (
    <p
      className={cn(
        "text-sm text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}