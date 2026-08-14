"use client";

import { User } from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  ProfileCardProps,
} from "./profile-card.types";

export function ProfileCard({
  name,
  jobTitle,
  avatar,
  avatarAlt = "",
  description,
  status,
  metadata,
  actions,
  footer,
  className,
  ...props
}: ProfileCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-background p-5",
        className,
      )}
      {...props}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-muted-foreground">
          {avatar ? (
            <img
              src={avatar}
              alt={avatarAlt}
              className="h-full w-full object-cover"
            />
          ) : (
            <User
              className="h-6 w-6"
              aria-hidden="true"
            />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold">
                {name}
              </h3>

              {jobTitle && (
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {jobTitle}
                </p>
              )}
            </div>

            {status && (
              <div className="shrink-0">
                {status}
              </div>
            )}
          </div>

          {description && (
            <div className="mt-3 text-sm text-muted-foreground">
              {description}
            </div>
          )}

          {metadata && (
            <div className="mt-3">
              {metadata}
            </div>
          )}
        </div>
      </div>

      {actions && (
        <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
          {actions}
        </div>
      )}

      {footer && (
        <div className="mt-4 border-t border-border pt-4">
          {footer}
        </div>
      )}
    </div>
  );
}