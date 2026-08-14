"use client";

import {
  AlertCircle,
  CheckCircle2,
  Info,
  TriangleAlert,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  BannerProps,
  BannerVariant,
} from "./banner.types";

const variantStyles: Record<
  BannerVariant,
  string
> = {
  default:
    "border-border bg-muted/50",
  info:
    "border-blue-500/30 bg-blue-500/5",
  success:
    "border-emerald-500/30 bg-emerald-500/5",
  warning:
    "border-amber-500/30 bg-amber-500/5",
  error:
    "border-destructive/30 bg-destructive/5",
};

const iconStyles: Record<
  BannerVariant,
  string
> = {
  default:
    "text-muted-foreground",
  info:
    "text-blue-500",
  success:
    "text-emerald-500",
  warning:
    "text-amber-500",
  error:
    "text-destructive",
};

function DefaultIcon({
  variant,
}: {
  variant: BannerVariant;
}) {
  switch (variant) {
    case "success":
      return (
        <CheckCircle2
          className="h-5 w-5"
        />
      );

    case "warning":
      return (
        <TriangleAlert
          className="h-5 w-5"
        />
      );

    case "error":
      return (
        <AlertCircle
          className="h-5 w-5"
        />
      );

    case "info":
      return (
        <Info className="h-5 w-5" />
      );

    default:
      return (
        <Info className="h-5 w-5" />
      );
  }
}

export function Banner({
  variant = "default",
  title,
  icon,
  action,
  dismissible = false,
  onDismiss,
  className,
  children,
  ...props
}: BannerProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex w-full items-start gap-3 border px-4 py-3",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "mt-0.5 shrink-0",
          iconStyles[variant],
        )}
      >
        {icon ?? (
          <DefaultIcon
            variant={variant}
          />
        )}
      </div>

      <div className="min-w-0 flex-1">
        {title && (
          <div className="text-sm font-semibold">
            {title}
          </div>
        )}

        {children && (
          <div className="text-sm text-muted-foreground">
            {children}
          </div>
        )}
      </div>

      {action && (
        <div className="shrink-0">
          {action}
        </div>
      )}

      {dismissible && (
        <button
          type="button"
          aria-label="Dismiss"
          onClick={onDismiss}
          className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10"
        >
          <X
            className="h-4 w-4"
          />
        </button>
      )}
    </div>
  );
}