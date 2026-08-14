"use client";

import {
  Bot,
  CheckCircle2,
  CircleAlert,
  CircleDot,
  Clock3,
  Loader2,
} from "lucide-react";

import {
  cn,
} from "@/lib/utils";

import type {
  AIAgentStatusProps,
  AIAgentStatusValue,
} from "./ai-agent-status.types";

const statusConfig: Record<
  AIAgentStatusValue,
  {
    label: string;
    className: string;
  }
> = {
  idle: {
    label: "Idle",
    className:
      "text-muted-foreground",
  },
  planning: {
    label: "Planning",
    className:
      "text-violet-500",
  },
  running: {
    label: "Running",
    className:
      "text-blue-500",
  },
  waiting: {
    label: "Waiting",
    className:
      "text-amber-500",
  },
  completed: {
    label: "Completed",
    className:
      "text-emerald-500",
  },
  failed: {
    label: "Failed",
    className:
      "text-red-500",
  },
};

function AgentIcon({
  status,
}: {
  status: AIAgentStatusValue;
}) {
  switch (status) {
    case "planning":
      return (
        <CircleDot className="h-4 w-4" />
      );

    case "running":
      return (
        <Loader2 className="h-4 w-4 animate-spin" />
      );

    case "waiting":
      return (
        <Clock3 className="h-4 w-4" />
      );

    case "completed":
      return (
        <CheckCircle2 className="h-4 w-4" />
      );

    case "failed":
      return (
        <CircleAlert className="h-4 w-4" />
      );

    default:
      return (
        <Bot className="h-4 w-4" />
      );
  }
}

export function AIAgentStatus({
  name = "AI Agent",
  status,
  task,
  detail,
  className,
  ...props
}: AIAgentStatusProps) {
  const config =
    statusConfig[status];

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg border border-border bg-background p-3",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted",
          config.className,
        )}
      >
        <AgentIcon
          status={status}
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="truncate text-sm font-medium">
            {name}
          </span>

          <span
            className={cn(
              "text-xs font-medium",
              config.className,
            )}
          >
            {config.label}
          </span>
        </div>

        {task && (
          <div className="mt-0.5 truncate text-xs text-muted-foreground">
            {task}
          </div>
        )}

        {detail && (
          <div className="mt-1 text-[11px] text-muted-foreground">
            {detail}
          </div>
        )}
      </div>
    </div>
  );
}