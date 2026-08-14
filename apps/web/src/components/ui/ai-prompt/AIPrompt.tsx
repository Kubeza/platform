"use client";

import {
  useState,
} from "react";

import {
  ArrowUp,
} from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  AIPromptProps,
} from "./ai-prompt.types";

export function AIPrompt({
  value: controlledValue,
  placeholder = "Ask your AI mentor...",
  submitLabel = "Send",
  disabled = false,
  onValueChange,
  onSubmitPrompt,
  className,
  ...props
}: AIPromptProps) {
  const [internalValue, setInternalValue] =
    useState("");

  const value =
    controlledValue ??
    internalValue;

  function updateValue(
    nextValue: string,
  ) {
    if (
      controlledValue ===
      undefined
    ) {
      setInternalValue(
        nextValue,
      );
    }

    onValueChange?.(
      nextValue,
    );
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const trimmed =
      value.trim();

    if (
      !trimmed ||
      disabled
    ) {
      return;
    }

    onSubmitPrompt?.(
      trimmed,
    );

    if (
      controlledValue ===
      undefined
    ) {
      setInternalValue("");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex items-end gap-2 rounded-lg border border-border bg-background p-2",
        className,
      )}
      {...props}
    >
      <textarea
        value={value}
        disabled={disabled}
        placeholder={
          placeholder
        }
        rows={1}
        onChange={(event) =>
          updateValue(
            event.target.value,
          )
        }
        onKeyDown={(event) => {
          if (
            event.key ===
              "Enter" &&
            !event.shiftKey
          ) {
            event.preventDefault();

            event.currentTarget.form?.requestSubmit();
          }
        }}
        className="max-h-32 min-h-9 flex-1 resize-none bg-transparent px-2 py-2 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
      />

      <button
        type="submit"
        disabled={
          disabled ||
          !value.trim()
        }
        aria-label={
          typeof submitLabel ===
          "string"
            ? submitLabel
            : "Send"
        }
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:pointer-events-none disabled:opacity-50"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </form>
  );
}