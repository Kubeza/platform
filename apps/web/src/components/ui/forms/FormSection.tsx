import * as React from "react";

import { cn } from "@/lib/utils";

interface FormSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export function FormSection({
  title,
  description,
  className,
  children,
  ...props
}: FormSectionProps) {
  return (
    <section
      className={cn(
        "space-y-6 rounded-xl border p-6",
        className,
      )}
      {...props}
    >
      {(title || description) && (
        <header className="space-y-1">
          {title && (
            <h3 className="text-lg font-semibold">
              {title}
            </h3>
          )}

          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </header>
      )}

      {children}
    </section>
  );
}