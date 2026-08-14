"use client";

import { cn } from "@/lib/utils";

import { WarningStateContent } from "./WarningStateContent";
import { WarningStateIcon } from "./WarningStateIcon";

import type {
  WarningStateProps,
} from "./warning-state.types";

export function WarningState({
  title = "Warning",
  description,
  icon,
  action,
  className,
  children,
  ...props
}: WarningStateProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex min-h-40 flex-col items-center justify-center gap-4 p-6",
        className,
      )}
      {...props}
    >
      {icon && (
        <WarningStateIcon>
          {icon}
        </WarningStateIcon>
      )}

      <WarningStateContent
        title={title}
        description={description}
      >
        {children}
      </WarningStateContent>

      {action && (
        <div className="flex items-center justify-center gap-2">
          {action}
        </div>
      )}
    </div>
  );
}