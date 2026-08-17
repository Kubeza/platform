"use client";

import {
  useEffect,
  useRef,
} from "react";

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
  const viewportRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport =
      viewportRef.current;

    if (!viewport) {
      return;
    }

    requestAnimationFrame(() => {
      viewport.scrollTo({
        top: viewport.scrollHeight,
        behavior: "smooth",
      });
    });
  }, [messages.length]);

  return (
    <div
      className={cn(
        "flex min-h-0 flex-col rounded-lg border border-border bg-background",
        className,
      )}
      {...props}
    >
      <div className="shrink-0 border-b border-border px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Bot className="h-4 w-4 text-primary" />
          AI Mentor
        </div>
      </div>

      <div
        ref={viewportRef}
        className="min-h-0 flex-1 space-y-4 overflow-auto p-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
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
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Bot className="h-4 w-4" />
                  </div>
                )}

                <div
                  className={cn(
                    "max-w-[86%] rounded-xl px-3.5 py-3 text-sm leading-6",
                    isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted",
                  )}
                >
                  <div className="whitespace-pre-wrap break-words">
                    {message.content}
                  </div>

                  {message.timestamp && (
                    <div className="mt-1.5 text-[10px] leading-4 opacity-60">
                      {message.timestamp}
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
          })
        )}
      </div>

      {footer && (
        <div className="shrink-0 border-t border-border p-3">
          {footer}
        </div>
      )}
    </div>
  );
}