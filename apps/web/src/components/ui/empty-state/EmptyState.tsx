"use client";

import { cn } from "@/lib/utils";

import { EmptyStateContent } from "./EmptyStateContent";
import { EmptyStateIcon } from "./EmptyStateIcon";

import type {
  EmptyStateProps,
} from "./empty-state.types";

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  children,
  ...props
}: EmptyStateProps) {
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
        <EmptyStateIcon>
          {icon}
        </EmptyStateIcon>
      )}

      <EmptyStateContent
        title={title}
        description={description}
      >
        {children}
      </EmptyStateContent>

      {action && (
        <div className="flex items-center justify-center">
          {action}
        </div>
      )}
    </div>
  );
}