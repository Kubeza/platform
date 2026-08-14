"use client";

import {
  AlertTriangle,
  CheckCircle2,
  Circle,
  Loader2,
  XCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  CloudResourceProps,
  CloudResourceStatus,
} from "./cloud-resource.types";

const statusConfig: Record<
  CloudResourceStatus,
  {
    label: string;
    className: string;
  }
> = {
  available: {
    label: "Available",
    className: "text-emerald-500",
  },
  provisioning: {
    label: "Provisioning",
    className: "text-blue-500",
  },
  degraded: {
    label: "Degraded",
    className: "text-amber-500",
  },
  failed: {
    label: "Failed",
    className: "text-red-500",
  },
  stopped: {
    label: "Stopped",
    className: "text-muted-foreground",
  },
};

function StatusIcon({
  status,
}: {
  status: CloudResourceStatus;
}) {
  switch (status) {
    case "available":
      return (
        <CheckCircle2 className="h-4 w-4" />
      );

    case "provisioning":
      return (
        <Loader2 className="h-4 w-4 animate-spin" />
      );

    case "degraded":
      return (
        <AlertTriangle className="h-4 w-4" />
      );

    case "failed":
      return (
        <XCircle className="h-4 w-4" />
      );

    default:
      return (
        <Circle className="h-4 w-4" />
      );
  }
}

export function CloudResource({
  provider,
  type,
  name,
  region,
  status = "available",
  identifier,
  metadata,
  className,
  ...props
}: CloudResourceProps) {
  const config =
    statusConfig[status];

  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-background p-4",
        className,
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded bg-muted px-2 py-0.5 text-[11px] font-medium">
              {provider}
            </span>

            <span className="font-mono text-[11px] text-muted-foreground">
              {type}
            </span>
          </div>

          <div className="mt-2 truncate text-sm font-semibold">
            {name}
          </div>

          {region && (
            <div className="mt-1 text-xs text-muted-foreground">
              {region}
            </div>
          )}
        </div>

        <div
          className={cn(
            "flex shrink-0 items-center gap-1.5 text-xs font-medium",
            config.className,
          )}
        >
          <StatusIcon
            status={status}
          />
          {config.label}
        </div>
      </div>

      {identifier && (
        <div className="mt-4 rounded-md bg-muted/50 px-3 py-2 font-mono text-xs text-muted-foreground">
          {identifier}
        </div>
      )}

      {metadata && (
        <div className="mt-3 border-t border-border pt-3">
          {metadata}
        </div>
      )}
    </div>
  );
}