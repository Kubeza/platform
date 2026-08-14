import type {
  ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

interface UploadRootProps
  extends ComponentPropsWithoutRef<"div"> {}

export function UploadRoot({
  className,
  children,
  ...props
}: UploadRootProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}