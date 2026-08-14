import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/cn";

export interface AlertDialogHeaderProps
  extends HTMLAttributes<HTMLDivElement> {}

export default function AlertDialogHeader({
  className,
  ...props
}: AlertDialogHeaderProps) {
  return (
    <div
      className={cn(
        "border-b border-slate-800 p-6",
        className,
      )}
      {...props}
    />
  );
}