import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface UploadActionsProps
  extends HTMLAttributes<HTMLDivElement> {
  align?: "start" | "center" | "end";
  direction?: "horizontal" | "vertical";
}

export function UploadActions({
  align = "end",
  direction = "horizontal",
  className,
  children,
  ...props
}: UploadActionsProps) {
  return (
    <div
      className={cn(
        "flex gap-2",
        direction === "horizontal"
          ? "flex-row"
          : "flex-col",
        align === "start" && "justify-start",
        align === "center" && "justify-center",
        align === "end" && "justify-end",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}