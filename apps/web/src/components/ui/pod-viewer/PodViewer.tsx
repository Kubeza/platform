"use client";

import {
  Box,
  CheckCircle2,
  CircleHelp,
  Clock3,
  XCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  PodContainer,
  PodStatus,
  PodViewerProps,
} from "./pod-viewer.types";

const statusClass: Record<
  PodStatus,
  string
> = {
  Pending: "text-amber-500",
  Running: "text-emerald-500",
  Succeeded: "text-blue-500",
  Failed: "text-red-500",
  Unknown: "text-muted-foreground",
};

function PodStatusIcon({
  status,
}: {
  status: PodStatus;
}) {
  switch (status) {
    case "Running":
    case "Succeeded":
      return (
        <CheckCircle2 className="h-4 w-4" />
      );

    case "Failed":
      return (
        <XCircle className="h-4 w-4" />
      );

    case "Pending":
      return (
        <Clock3 className="h-4 w-4" />
      );

    default:
      return (
        <CircleHelp className="h-4 w-4" />
      );
  }
}

function ContainerRow({
  container,
}: {
  container: PodContainer;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border py-2 last:border-b-0">
      <div className="flex min-w-0 items-center gap-2">
        <Box className="h-4 w-4 shrink-0 text-muted-foreground" />

        <div className="min-w-0">
          <div className="truncate text-xs font-medium">
            {container.name}
          </div>

          {container.image && (
            <div className="truncate font-mono text-[11px] text-muted-foreground">
              {container.image}
            </div>
          )}
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3 text-xs text-muted-foreground">
        <span>
          {container.restartCount ??
            0}{" "}
          restarts
        </span>

        <span
          className={cn(
            "font-medium",
            container.ready
              ? "text-emerald-500"
              : "text-amber-500",
          )}
        >
          {container.ready
            ? "Ready"
            : "Not ready"}
        </span>
      </div>
    </div>
  );
}

export function PodViewer({
  name,
  namespace,
  status = "Unknown",
  node,
  containers = [],
  age,
  className,
  ...props
}: PodViewerProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-background",
        className,
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-4 p-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="rounded-md bg-muted p-2">
            <Box className="h-5 w-5 text-muted-foreground" />
          </div>

          <div className="min-w-0">
            <div className="truncate font-mono text-sm font-semibold">
              {name}
            </div>

            {namespace && (
              <div className="text-xs text-muted-foreground">
                {namespace}
              </div>
            )}
          </div>
        </div>

        <div
          className={cn(
            "flex shrink-0 items-center gap-1.5 text-xs font-medium",
            statusClass[status],
          )}
        >
          <PodStatusIcon
            status={status}
          />
          {status}
        </div>
      </div>

      <div className="grid grid-cols-2 border-y border-border text-xs">
        <div className="border-r border-border p-3">
          <div className="text-muted-foreground">
            Node
          </div>
          <div className="mt-1 truncate font-mono">
            {node ?? "—"}
          </div>
        </div>

        <div className="p-3">
          <div className="text-muted-foreground">
            Age
          </div>
          <div className="mt-1">
            {age ?? "—"}
          </div>
        </div>
      </div>

      {containers.length > 0 && (
        <div className="p-4">
          <div className="mb-2 text-xs font-medium text-muted-foreground">
            Containers
          </div>

          {containers.map(
            (container) => (
              <ContainerRow
                key={container.name}
                container={
                  container
                }
              />
            ),
          )}
        </div>
      )}
    </div>
  );
}