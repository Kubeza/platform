import type {
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

interface DataGridActionsProps {
  children: ReactNode;
  className?: string;
}

export default function DataGridActions({
  children,
  className,
}: DataGridActionsProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2",
        className,
      )}
    >
      {children}
    </div>
  );
}