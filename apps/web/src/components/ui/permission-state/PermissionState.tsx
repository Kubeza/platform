"use client";

import { cn } from "@/lib/utils";

import { PermissionStateContent } from "./PermissionStateContent";
import { PermissionStateIcon } from "./PermissionStateIcon";

import type {
  PermissionStateProps,
} from "./permission-state.types";

export function PermissionState({
  title = "Permission required",
  description = "You don't have permission to access this resource.",
  icon,
  action,
  className,
  children,
  ...props
}: PermissionStateProps) {
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
        <PermissionStateIcon>
          {icon}
        </PermissionStateIcon>
      )}

      <PermissionStateContent
        title={title}
        description={description}
      >
        {children}
      </PermissionStateContent>

      {action && (
        <div className="flex items-center justify-center gap-2">
          {action}
        </div>
      )}
    </div>
  );
}