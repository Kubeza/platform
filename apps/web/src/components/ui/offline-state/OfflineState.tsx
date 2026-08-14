"use client";

import { cn } from "@/lib/utils";

import { OfflineStateContent } from "./OfflineStateContent";
import { OfflineStateIcon } from "./OfflineStateIcon";

import type {
  OfflineStateProps,
} from "./offline-state.types";

export function OfflineState({
  title = "You're offline",
  description = "Check your connection and try again.",
  icon,
  action,
  className,
  children,
  ...props
}: OfflineStateProps) {
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
        <OfflineStateIcon>
          {icon}
        </OfflineStateIcon>
      )}

      <OfflineStateContent
        title={title}
        description={description}
      >
        {children}
      </OfflineStateContent>

      {action && (
        <div className="flex items-center justify-center gap-2">
          {action}
        </div>
      )}
    </div>
  );
}