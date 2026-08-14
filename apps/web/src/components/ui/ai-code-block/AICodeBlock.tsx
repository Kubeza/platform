"use client";

import {
  Check,
  Copy,
} from "lucide-react";

import {
  useState,
} from "react";

import { cn } from "@/lib/utils";

import type {
  AICodeBlockProps,
} from "./ai-code-block.types";

export function AICodeBlock({
  code,
  language = "text",
  title,
  actions,
  className,
  ...props
}: AICodeBlockProps) {
  const [copied, setCopied] =
    useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(
        code,
      );

      setCopied(true);

      window.setTimeout(
        () =>
          setCopied(
            false,
          ),
        1500,
      );
    } catch {
      setCopied(false);
    }
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-slate-950",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          {title && (
            <span className="font-medium text-slate-300">
              {title}
            </span>
          )}

          <span>
            {language}
          </span>
        </div>

        <div className="flex items-center gap-1">
          {actions}

          <button
            type="button"
            onClick={copyCode}
            className="flex items-center gap-1 rounded px-2 py-1 text-xs text-slate-400 hover:bg-slate-800 hover:text-slate-200"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}

            {copied
              ? "Copied"
              : "Copy"}
          </button>
        </div>
      </div>

      <pre className="overflow-auto p-4 text-xs leading-6 text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}