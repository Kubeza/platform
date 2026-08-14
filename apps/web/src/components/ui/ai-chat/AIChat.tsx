"use client";

import {
  Bot,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  AIChatProps,
} from "./ai-chat.types";

export function AIChat({
  messages = [],
  emptyMessage = "Start a conversation with your AI mentor.",
  footer,
  className,
  ...props
}: AIChatProps) {
  return (
    <div
      className={cn(
        "flex min-h-0 flex-col rounded-lg border border-border bg-background",
        className,
      )}
      {...props}
    >
      <div className="border-b border-border px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Bot className="h-4 w-4 text-primary" />
          AI Mentor
        </div>
      </div>

      <div className="min-h-0 flex-1 space-y-4 overflow-auto p-4">
        {messages.length === 0 ? (
          <div className="flex min-h-32 items-center justify-center text-center text-sm text-muted-foreground">
            {emptyMessage}
          </div>
        ) : (
          messages.map((message) => {
            const isUser =
              message.role === "user";

            return (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  isUser &&
                    "justify-end",
                )}
              >
                {!isUser && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Bot className="h-4 w-4" />
                  </div>
                )}

                <div
                  className={cn(
                    "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                    isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted",
                  )}
                >
                  <div>
                    {message.content}
                  </div>

                  {message.timestamp && (
                    <div className="mt-1 text-[10px] opacity-60">
                      {message.timestamp}
                    </div>
                  )}
                </div>

                {isUser && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {footer && (
        <div className="border-t border-border p-3">
          {footer}
        </div>
      )}
    </div>
  );
}