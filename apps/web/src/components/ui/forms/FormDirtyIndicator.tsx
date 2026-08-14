import * as React from "react";
import { Circle, Save } from "lucide-react";

import { cn } from "@/lib/utils";

interface FormDirtyIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  dirty: boolean;
}

export function FormDirtyIndicator({
  dirty,
  className,
  ...props
}: FormDirtyIndicatorProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-sm",
        className,
      )}
      {...props}
    >
      {dirty ? (
        <>
          <Circle className="h-2.5 w-2.5 fill-yellow-500 text-yellow-500" />
          <span>Unsaved changes</span>
        </>
      ) : (
        <>
          <Save className="h-4 w-4 text-green-600" />
          <span>All changes saved</span>
        </>
      )}
    </div>
  );
}