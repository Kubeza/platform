import * as React from "react";

import { cn } from "@/lib/utils";

interface FormHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export function FormHeader({
  title,
  description,
  children,
  className,
  ...props
}: FormHeaderProps) {
  return (
    <header
      className={cn(
        "space-y-2 border-b pb-6",
        className,
      )}
      {...props}
    >
      {title && (
        <h2 className="text-2xl font-semibold tracking-tight">
          {title}
        </h2>
      )}

      {description && (
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      )}

      {children}
    </header>
  );
}