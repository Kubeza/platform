"use client";

import { cn } from "@/lib/utils";

import { MaintenanceStateContent } from "./MaintenanceStateContent";
import { MaintenanceStateIcon } from "./MaintenanceStateIcon";

import type {
  MaintenanceStateProps,
} from "./maintenance-state.types";

export function MaintenanceState({
  title = "Under maintenance",
  description = "This service is temporarily unavailable while we perform maintenance.",
  icon,
  action,
  className,
  children,
  ...props
}: MaintenanceStateProps) {
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
        <MaintenanceStateIcon>
          {icon}
        </MaintenanceStateIcon>
      )}

      <MaintenanceStateContent
        title={title}
        description={description}
      >
        {children}
      </MaintenanceStateContent>

      {action && (
        <div className="flex items-center justify-center gap-2">
          {action}
        </div>
      )}
    </div>
  );
}