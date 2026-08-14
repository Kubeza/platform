"use client";

import {
  AlertTriangle,
  CheckCircle2,
  CircleHelp,
  XCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  ClusterMapProps,
  ClusterNodeStatus,
} from "./cluster-map.types";

const statusClass: Record<
  ClusterNodeStatus,
  string
> = {
  healthy:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-500",
  warning:
    "border-amber-500/30 bg-amber-500/10 text-amber-500",
  error:
    "border-red-500/30 bg-red-500/10 text-red-500",
  unknown:
    "border-border bg-muted text-muted-foreground",
};

function NodeIcon({
  status,
}: {
  status: ClusterNodeStatus;
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

export function ClusterMap({
  nodes,
  title = "Cluster",
  className,
  ...props
}: ClusterMapProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-background",
        className,
      )}
      {...props}
    >
      <div className="border-b border-border px-4 py-3">
        <div className="text-sm font-semibold">
          {title}
        </div>

        <div className="mt-1 text-xs text-muted-foreground">
          {nodes.length} resources
        </div>
      </div>

      <div className="relative overflow-auto p-6">
        <div className="mx-auto flex min-w-max flex-wrap justify-center gap-4">
          {nodes.map(
            (node) => {
              const status =
                node.status ??
                "unknown";

              return (
                <div
                  key={node.id}
                  className={cn(
                    "relative w-48 rounded-lg border p-4",
                    statusClass[
                      status
                    ],
                  )}
                >
                  <div className="flex items-center gap-2">
                    <NodeIcon
                      status={
                        status
                      }
                    />

                    <span className="truncate text-sm font-medium">
                      {node.name}
                    </span>
                  </div>

                  <div className="mt-2 font-mono text-[11px] opacity-70">
                    {node.type}
                  </div>

                  {node.description && (
                    <div className="mt-2 text-xs opacity-70">
                      {
                        node.description
                      }
                    </div>
                  )}
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}