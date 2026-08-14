import * as React from "react";

import { cn } from "@/lib/utils";

interface FormMessageProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  error?: boolean;
}

export function FormMessage({
  className,
  children,
  error = true,
  ...props
}: FormMessageProps) {
  if (!children) {
    return null;
  }

  return (
    <p
      className={cn(
        "text-sm",
        error
          ? "text-danger"
          : "text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}