"use client";

import {
  Check,
  Circle,
  Loader2,
  Minus,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  PipelineProps,
  PipelineStageStatus,
} from "./pipeline.types";

const statusStyles: Record<
  PipelineStageStatus,
  string
> = {
  pending:
    "border-slate-700 bg-slate-900 text-slate-500",
  running:
    "border-blue-500/50 bg-blue-500/10 text-blue-400",
  success:
    "border-emerald-500/50 bg-emerald-500/10 text-emerald-400",
  failed:
    "border-red-500/50 bg-red-500/10 text-red-400",
  skipped:
    "border-slate-700 bg-slate-900 text-slate-500",
};

function StageIcon({
  status,
}: {
  status: PipelineStageStatus;
}) {
  switch (status) {
    case "running":
      return (
        <Loader2 className="h-4 w-4 animate-spin" />
      );

    case "success":
      return (
        <Check className="h-4 w-4" />
      );

    case "failed":
      return (
        <X className="h-4 w-4" />
      );

    case "skipped":
      return (
        <Minus className="h-4 w-4" />
      );

    default:
      return (
        <Circle className="h-3 w-3" />
      );
  }
}

export function Pipeline({
  stages,
  orientation = "horizontal",
  className,
  ...props
}: PipelineProps) {
  return (
    <div
      className={cn(
        "w-full",
        orientation ===
          "horizontal"
          ? "flex items-start overflow-x-auto"
          : "flex flex-col",
        className,
      )}
      {...props}
    >
      {stages.map(
        (stage, index) => {
          const status =
            stage.status ??
            "pending";

          const isLast =
            index ===
            stages.length - 1;

          return (
            <div
              key={stage.id}
              className={cn(
                orientation ===
                  "horizontal"
                  ? "flex min-w-48 flex-1 items-start"
                  : "flex items-start",
              )}
            >
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border",
                      statusStyles[
                        status
                      ],
                    )}
                  >
                    <StageIcon
                      status={
                        status
                      }
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">
                      {stage.name}
                    </div>

                    {stage.duration && (
                      <div className="text-xs text-muted-foreground">
                        {
                          stage.duration
                        }
                      </div>
                    )}
                  </div>
                </div>

                {stage.description && (
                  <div className="mt-2 max-w-48 text-xs text-muted-foreground">
                    {
                      stage.description
                    }
                  </div>
                )}
              </div>

              {!isLast && (
                <div
                  className={cn(
                    orientation ===
                      "horizontal"
                      ? "mt-4 h-px min-w-8 flex-1 bg-border"
                      : "ml-[18px] h-8 w-px bg-border",
                  )}
                />
              )}
            </div>
          );
        },
      )}
    </div>
  );
}