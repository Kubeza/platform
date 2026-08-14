"use client";

import {
  AlertCircle,
  CheckCircle2,
  Info,
  TriangleAlert,
} from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  CalloutProps,
  CalloutVariant,
} from "./callout.types";

const variantStyles: Record<
  CalloutVariant,
  string
> = {
  default:
    "border-border bg-muted/30",
  info:
    "border-blue-500/30 bg-blue-500/5 text-blue-700 dark:text-blue-300",
  success:
    "border-emerald-500/30 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300",
  warning:
    "border-amber-500/30 bg-amber-500/5 text-amber-700 dark:text-amber-300",
  error:
    "border-destructive/30 bg-destructive/5 text-destructive",
};

function DefaultIcon({
  variant,
}: {
  variant: CalloutVariant;
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

export function Callout({
  variant = "default",
  icon,
  title,
  className,
  children,
  ...props
}: CalloutProps) {
  return (
    <div
      role="note"
      className={cn(
        "flex gap-3 rounded-lg border p-4",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      <div className="mt-0.5 shrink-0">
        {icon ?? (
          <DefaultIcon
            variant={variant}
          />
        )}
      </div>

      <div className="min-w-0 flex-1 space-y-1">
        {title && (
          <div className="text-sm font-semibold">
            {title}
          </div>
        )}

        <div className="text-sm opacity-90">
          {children}
        </div>
      </div>
    </div>
  );
}