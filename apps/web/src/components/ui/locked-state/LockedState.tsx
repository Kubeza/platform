"use client";

import { cn } from "@/lib/utils";

import { LockedStateContent } from "./LockedStateContent";
import { LockedStateIcon } from "./LockedStateIcon";

import type {
  LockedStateProps,
} from "./locked-state.types";

export function LockedState({
  title = "Resource locked",
  description = "This resource is currently locked.",
  icon,
  action,
  className,
  children,
  ...props
}: LockedStateProps) {
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
        <LockedStateIcon>
          {icon}
        </LockedStateIcon>
      )}

      <LockedStateContent
        title={title}
        description={description}
      >
        {children}
      </LockedStateContent>

      {action && (
        <div className="flex items-center justify-center gap-2">
          {action}
        </div>
      )}
    </div>
  );
}