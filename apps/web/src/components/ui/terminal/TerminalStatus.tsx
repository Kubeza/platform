"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import type { TerminalStatus as TerminalStatusType } from "./terminal.types";

export interface TerminalStatusProps
  extends HTMLAttributes<HTMLSpanElement> {
  status: TerminalStatusType;
}

const statusClasses: Record<
  TerminalStatusType,
  string
> = {
  disconnected: "bg-gray-500",
  connecting: "bg-yellow-500",
  connected: "bg-green-500",
  error: "bg-red-500",
};

export function TerminalStatus({
  status,
  className,
  ...props
}: TerminalStatusProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-medium",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "h-2 w-2 rounded-full",
          statusClasses[status],
        )}
      />

      <span className="capitalize">
        {status}
      </span>
    </span>
  );
}