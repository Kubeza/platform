"use client";

import { cn } from "@/lib/utils";

import { NotFoundStateContent } from "./NotFoundStateContent";
import { NotFoundStateIcon } from "./NotFoundStateIcon";

import type {
  NotFoundStateProps,
} from "./not-found-state.types";

export function NotFoundState({
  title = "Not found",
  description = "The requested resource could not be found.",
  icon,
  action,
  className,
  children,
  ...props
}: NotFoundStateProps) {
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
        <NotFoundStateIcon>
          {icon}
        </NotFoundStateIcon>
      )}

      <NotFoundStateContent
        title={title}
        description={description}
      >
        {children}
      </NotFoundStateContent>

      {action && (
        <div className="flex items-center justify-center gap-2">
          {action}
        </div>
      )}
    </div>
  );
}