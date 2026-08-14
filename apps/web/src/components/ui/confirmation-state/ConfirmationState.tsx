"use client";

import { cn } from "@/lib/utils";

import { ConfirmationStateContent } from "./ConfirmationStateContent";
import { ConfirmationStateIcon } from "./ConfirmationStateIcon";

import type {
  ConfirmationStateProps,
} from "./confirmation-state.types";

export function ConfirmationState({
  title = "Are you sure?",
  description,
  icon,
  action,
  className,
  children,
  ...props
}: ConfirmationStateProps) {
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
        <ConfirmationStateIcon>
          {icon}
        </ConfirmationStateIcon>
      )}

      <ConfirmationStateContent
        title={title}
        description={description}
      >
        {children}
      </ConfirmationStateContent>

      {action && (
        <div className="flex items-center justify-center gap-2">
          {action}
        </div>
      )}
    </div>
  );
}