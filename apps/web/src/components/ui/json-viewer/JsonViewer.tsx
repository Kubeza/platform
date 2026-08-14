"use client";

import { cn } from "@/lib/utils";

import type {
  JsonViewerProps,
} from "./json-viewer.types";

export function JsonViewer({
  data,
  expanded = true,
  emptyMessage = "No JSON data",
  className,
  ...props
}: JsonViewerProps) {
  if (
    data === null ||
    data === undefined
  ) {
    return (
      <div
        className={cn(
          "rounded-lg border border-border bg-slate-950 p-4 font-mono text-sm text-slate-500",
          className,
        )}
      >
        {emptyMessage}
      </div>
    );
  }

  let formatted: string;

  try {
    formatted = expanded
      ? JSON.stringify(
          data,
          null,
          2,
        )
      : JSON.stringify(data);
  } catch {
    formatted = String(data);
  }

  return (
    <pre
      className={cn(
        "overflow-auto rounded-lg border border-border bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-200",
        className,
      )}
      {...props}
    >
      <code>{formatted}</code>
    </pre>
  );
}