"use client";

import { cn } from "@/lib/utils";

import { InfoStateContent } from "./InfoStateContent";
import { InfoStateIcon } from "./InfoStateIcon";

import type {
  InfoStateProps,
} from "./info-state.types";

export function InfoState({
  title = "Information",
  description,
  icon,
  action,
  className,
  children,
  ...props
}: InfoStateProps) {
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
        <InfoStateIcon>
          {icon}
        </InfoStateIcon>
      )}

      <InfoStateContent
        title={title}
        description={description}
      >
        {children}
      </InfoStateContent>

      {action && (
        <div className="flex items-center justify-center gap-2">
          {action}
        </div>
      )}
    </div>
  );
}