"use client";

import { cn } from "@/lib/utils";

import { SuccessStateContent } from "./SuccessStateContent";
import { SuccessStateIcon } from "./SuccessStateIcon";

import type {
  SuccessStateProps,
} from "./success-state.types";

export function SuccessState({
  title = "Operation successful",
  description,
  icon,
  action,
  className,
  children,
  ...props
}: SuccessStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex min-h-40 flex-col items-center justify-center gap-4 p-6",
        className,
      )}
      {...props}
    >
      {icon && (
        <SuccessStateIcon>
          {icon}
        </SuccessStateIcon>
      )}

      <SuccessStateContent
        title={title}
        description={description}
      >
        {children}
      </SuccessStateContent>

      {action && (
        <div className="flex items-center justify-center">
          {action}
        </div>
      )}
    </div>
  );
}