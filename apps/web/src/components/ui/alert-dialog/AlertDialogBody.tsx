import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/cn";

export interface AlertDialogBodyProps
  extends HTMLAttributes<HTMLDivElement> {}

export default function AlertDialogBody({
  className,
  ...props
}: AlertDialogBodyProps) {
  return (
    <div
      className={cn(
        "p-6",
        className,
      )}
      {...props}
    />
  );
}