import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/cn";

export interface AlertDialogFooterProps
  extends HTMLAttributes<HTMLDivElement> {}

export default function AlertDialogFooter({
  className,
  ...props
}: AlertDialogFooterProps) {
  return (
    <div
      className={cn(
        "flex justify-end gap-3 border-t border-slate-800 p-6",
        className,
      )}
      {...props}
    />
  );
}