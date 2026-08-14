"use client";

import {
  BrainCircuit,
} from "lucide-react";

import {
  cn,
} from "@/lib/utils";

import type {
  AIThinkingProps,
} from "./ai-thinking.types";

export function AIThinking({
  title = "AI is thinking",
  detail,
  active = true,
  className,
  ...props
}: AIThinkingProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg border border-border bg-muted/50 px-4 py-3",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary",
          active &&
            "animate-pulse",
        )}
      >
        <BrainCircuit className="h-4 w-4" />
      </div>

      <div className="min-w-0">
        <div className="text-sm font-medium">
          {title}
        </div>

        {detail && (
          <div className="mt-0.5 text-xs text-muted-foreground">
            {detail}
          </div>
        )}
      </div>

      {active && (
        <div className="ml-auto flex gap-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary" />
        </div>
      )}
    </div>
  );
}