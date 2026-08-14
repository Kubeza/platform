"use client";

import {
  CheckCircle2,
  CircleAlert,
  Loader2,
  Wrench,
} from "lucide-react";

import {
  cn,
} from "@/lib/utils";

import type {
  AIToolResultProps,
  AIToolResultStatus,
} from "./ai-tool-result.types";

const statusClass: Record<
  AIToolResultStatus,
  string
> = {
  running:
    "text-blue-500",
  success:
    "text-emerald-500",
  error:
    "text-red-500",
};

function StatusIcon({
  status,
}: {
  status: AIToolResultStatus;
}) {
  if (
    status ===
    "running"
  ) {
    return (
      <Loader2 className="h-4 w-4 animate-spin" />
    );
  }

  if (
    status ===
    "success"
  ) {
    return (
      <CheckCircle2 className="h-4 w-4" />
    );
  }

  return (
    <CircleAlert className="h-4 w-4" />
  );
}

export function AIToolResult({
  tool,
  status = "success",
  title,
  result,
  duration,
  className,
  ...props
}: AIToolResultProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-background",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-muted">
          <Wrench className="h-4 w-4 text-muted-foreground" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-xs font-medium text-muted-foreground">
            Tool
          </div>

          <div className="truncate font-mono text-sm">
            {tool}
          </div>
        </div>

        <div
          className={cn(
            "flex shrink-0 items-center gap-1.5 text-xs font-medium",
            statusClass[
              status
            ],
          )}
        >
          <StatusIcon
            status={status}
          />

          {status}
        </div>
      </div>

      {(title ||
        result !==
          undefined ||
        duration) && (
        <div className="p-4">
          {title && (
            <div className="mb-2 text-sm font-medium">
              {title}
            </div>
          )}

          {result !==
            undefined && (
            <div className="rounded-md bg-muted/50 p-3 text-sm">
              {result}
            </div>
          )}

          {duration && (
            <div className="mt-2 text-xs text-muted-foreground">
              {duration}
            </div>
          )}
        </div>
      )}
    </div>
  );
}