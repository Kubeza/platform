import * as React from "react";
import { Info } from "lucide-react";

import { cn } from "@/lib/utils";

interface FormHintProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
}

export function FormHint({
  children,
  icon,
  className,
  ...props
}: FormHintProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-2 rounded-md bg-muted/50 p-3 text-sm text-muted-foreground",
        className,
      )}
      {...props}
    >
      {icon ?? (
        <Info className="mt-0.5 h-4 w-4 shrink-0" />
      )}

      <div>{children}</div>
    </div>
  );
}