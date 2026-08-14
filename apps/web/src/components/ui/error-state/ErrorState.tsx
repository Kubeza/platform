"use client";

import { cn } from "@/lib/utils";

import { ErrorStateContent } from "./ErrorStateContent";
import { ErrorStateIcon } from "./ErrorStateIcon";

import type {
  ErrorStateProps,
} from "./error-state.types";

export function ErrorState({
  title = "Something went wrong",
  description,
  icon,
  action,
  className,
  children,
  ...props
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={cn(
        "flex min-h-40 flex-col items-center justify-center gap-4 p-6",
        className,
      )}
      {...props}
    >
      {icon && (
        <ErrorStateIcon>
          {icon}
        </ErrorStateIcon>
      )}

      <ErrorStateContent
        title={title}
        description={description}
      >
        {children}
      </ErrorStateContent>

      {action && (
        <div className="flex items-center justify-center">
          {action}
        </div>
      )}
    </div>
  );
}