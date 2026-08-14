"use client";

import {
  CheckCircle2,
  Circle,
  Clock3,
  Loader2,
  RotateCcw,
  XCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  DeploymentStatusProps,
  DeploymentStatusValue,
} from "./deployment-status.types";

const statusConfig: Record<
  DeploymentStatusValue,
  {
    label: string;
    className: string;
  }
> = {
  pending: {
    label: "Pending",
    className:
      "border-border bg-muted text-muted-foreground",
  },
  deploying: {
    label: "Deploying",
    className:
      "border-blue-500/30 bg-blue-500/10 text-blue-500",
  },
  success: {
    label: "Successful",
    className:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-500",
  },
  failed: {
    label: "Failed",
    className:
      "border-red-500/30 bg-red-500/10 text-red-500",
  },
  cancelled: {
    label: "Cancelled",
    className:
      "border-border bg-muted text-muted-foreground",
  },
  rollback: {
    label: "Rollback",
    className:
      "border-amber-500/30 bg-amber-500/10 text-amber-500",
  },
};

function StatusIcon({
  status,
}: {
  status: DeploymentStatusValue;
}) {
  switch (status) {
    case "deploying":
      return (
        <Loader2 className="h-4 w-4 animate-spin" />
      );

    case "success":
      return (
        <CheckCircle2 className="h-4 w-4" />
      );

    case "failed":
      return (
        <XCircle className="h-4 w-4" />
      );

    case "rollback":
      return (
        <RotateCcw className="h-4 w-4" />
      );

    case "pending":
      return (
        <Clock3 className="h-4 w-4" />
      );

    default:
      return (
        <Circle className="h-4 w-4" />
      );
  }
}

export function DeploymentStatus({
  status,
  name,
  version,
  environment,
  message,
  duration,
  className,
  ...props
}: DeploymentStatusProps) {
  const config = statusConfig[status];

  return (
    <div
      className={cn(
        "rounded-lg border bg-background p-4",
        className,
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          {name && (
            <div className="truncate text-sm font-semibold">
              {name}
            </div>
          )}

          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            {version && (
              <span>{version}</span>
            )}

            {environment && (
              <>
                <span>•</span>
                <span>
                  {environment}
                </span>
              </>
            )}
          </div>
        </div>

        <div
          className={cn(
            "flex shrink-0 items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium",
            config.className,
          )}
        >
          <StatusIcon status={status} />
          {config.label}
        </div>
      </div>

      {(message || duration) && (
        <div className="mt-3 flex items-center justify-between gap-3 border-t border-border pt-3 text-xs text-muted-foreground">
          <span>{message}</span>
          {duration && (
            <span className="shrink-0">
              {duration}
            </span>
          )}
        </div>
      )}
    </div>
  );
}