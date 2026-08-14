"use client";

import {
  CheckCircle2,
  Info,
  TriangleAlert,
  XCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  ResultProps,
  ResultStatus,
} from "./result.types";

const statusStyles: Record<
  ResultStatus,
  string
> = {
  success:
    "border-emerald-500/30 bg-emerald-500/5",
  error:
    "border-destructive/30 bg-destructive/5",
  warning:
    "border-amber-500/30 bg-amber-500/5",
  info:
    "border-blue-500/30 bg-blue-500/5",
  default:
    "border-border bg-muted/30",
};

const statusIconStyles: Record<
  ResultStatus,
  string
> = {
  success: "text-emerald-500",
  error: "text-destructive",
  warning: "text-amber-500",
  info: "text-blue-500",
  default: "text-muted-foreground",
};

function DefaultIcon({
  status,
}: {
  status: ResultStatus;
}) {
  switch (status) {
    case "success":
      return (
        <CheckCircle2
          className="h-6 w-6"
        />
      );

    case "error":
      return (
        <XCircle className="h-6 w-6" />
      );

    case "warning":
      return (
        <TriangleAlert
          className="h-6 w-6"
        />
      );

    case "info":
      return (
        <Info className="h-6 w-6" />
      );

    default:
      return (
        <Info className="h-6 w-6" />
      );
  }
}

export function Result({
  status = "default",
  icon,
  title,
  description,
  action,
  className,
  children,
  ...props
}: ResultProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex w-full flex-col items-center justify-center gap-4 rounded-lg border p-8 text-center",
        statusStyles[status],
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center",
          statusIconStyles[status],
        )}
      >
        {icon ?? (
          <DefaultIcon
            status={status}
          />
        )}
      </div>

      <div className="space-y-2">
        {title && (
          <h2 className="text-lg font-semibold">
            {title}
          </h2>
        )}

        {description && (
          <p className="max-w-lg text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {children}

      {action && (
        <div className="flex items-center justify-center gap-2">
          {action}
        </div>
      )}
    </div>
  );
}