"use client";

import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface NotificationAvatarProps
  extends HTMLAttributes<HTMLDivElement> {
  avatar?: ReactNode;
}

export function NotificationAvatar({
  avatar,
  className,
  ...props
}: NotificationAvatarProps) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-muted text-sm font-medium",
        className,
      )}
      {...props}
    >
      {avatar}
    </div>
  );
}