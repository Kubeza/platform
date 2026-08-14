"use client";

import {
  Bot,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  AIMessageProps,
} from "./ai-message.types";

export function AIMessage({
  role,
  content,
  timestamp,
  actions,
  className,
  ...props
}: AIMessageProps) {
  const isUser =
    role === "user";

  return (
    <div
      className={cn(
        "flex gap-3",
        isUser &&
          "justify-end",
        className,
      )}
      {...props}
    >
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Bot className="h-4 w-4" />
        </div>
      )}

      <div
        className={cn(
          "max-w-[80%]",
          isUser &&
            "items-end",
        )}
      >
        <div
          className={cn(
            "rounded-lg px-4 py-2.5 text-sm",
            isUser
              ? "bg-primary text-primary-foreground"
              : "bg-muted",
          )}
        >
          {content}
        </div>

        {(timestamp || actions) && (
          <div
            className={cn(
              "mt-1 flex items-center gap-3 text-[11px] text-muted-foreground",
              isUser &&
                "justify-end",
            )}
          >
            {timestamp && (
              <span>
                {timestamp}
              </span>
            )}

            {actions}
          </div>
        )}
      </div>

      {isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
          <User className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}