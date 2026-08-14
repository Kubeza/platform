"use client";

import {
  AlertTriangle,
  CheckCircle2,
  CircleHelp,
  XCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  KubernetesResourceProps,
  KubernetesResourceStatus,
} from "./kubernetes-resource.types";

const statusConfig: Record<
  KubernetesResourceStatus,
  {
    label: string;
    className: string;
  }
> = {
  healthy: {
    label: "Healthy",
    className: "text-emerald-500",
  },
  warning: {
    label: "Warning",
    className: "text-amber-500",
  },
  error: {
    label: "Error",
    className: "text-red-500",
  },
  unknown: {
    label: "Unknown",
    className: "text-muted-foreground",
  },
};

function StatusIcon({
  status,
}: {
  status: KubernetesResourceStatus;
}) {
  switch (status) {
    case "healthy":
      return (
        <CheckCircle2 className="h-4 w-4" />
      );

    case "warning":
      return (
        <AlertTriangle className="h-4 w-4" />
      );

    case "error":
      return (
        <XCircle className="h-4 w-4" />
      );

    default:
      return (
        <CircleHelp className="h-4 w-4" />
      );
  }
}

export function KubernetesResource({
  kind,
  name,
  namespace,
  status = "unknown",
  metadata,
  children,
  className,
  ...props
}: KubernetesResourceProps) {
  const config = statusConfig[status];

  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-background",
        className,
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-4 p-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="rounded bg-muted px-2 py-0.5 font-mono text-xs">
              {kind}
            </span>

            <span className="truncate text-sm font-semibold">
              {name}
            </span>
          </div>

          {namespace && (
            <div className="mt-1 font-mono text-xs text-muted-foreground">
              namespace/{namespace}
            </div>
          )}
        </div>

        <div
          className={cn(
            "flex shrink-0 items-center gap-1.5 text-xs font-medium",
            config.className,
          )}
        >
          <StatusIcon status={status} />
          {config.label}
        </div>
      </div>

      {metadata && (
        <div className="border-t border-border px-4 py-3">
          {metadata}
        </div>
      )}

      {children && (
        <div className="border-t border-border px-4 py-3">
          {children}
        </div>
      )}
    </div>
  );
}