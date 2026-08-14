"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import type {
  CommandHistoryStatus as CommandHistoryStatusType,
} from "./command-history.types";

export interface CommandHistoryStatusProps
  extends HTMLAttributes<HTMLSpanElement> {
  status: CommandHistoryStatusType;
}

const statusStyles: Record<
  CommandHistoryStatusType,
  string
> = {
  success:
    "bg-green-500/10 text-green-600 dark:text-green-400",
  running:
    "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  failed:
    "bg-red-500/10 text-red-600 dark:text-red-400",
  cancelled:
    "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
};

export function CommandHistoryStatus({
  status,
  className,
  ...props
}: CommandHistoryStatusProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium capitalize",
        statusStyles[status],
        className,
      )}
      {...props}
    >
      {status}
    </span>
  );
}