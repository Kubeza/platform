import * as React from "react";

import { cn } from "@/lib/utils";

interface FormFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function FormFooter({
  className,
  children,
  ...props
}: FormFooterProps) {
  return (
    <footer
      className={cn(
        "mt-8 border-t pt-6",
        className,
      )}
      {...props}
    >
      {children}
    </footer>
  );
}