"use client";

import { cn } from "@/lib/utils";

import type {
  DiffLine,
  DiffViewerProps,
} from "./diff-viewer.types";

function createDiff(
  oldValue: string,
  newValue: string,
): DiffLine[] {
  const oldLines =
    oldValue.split("\n");

  const newLines =
    newValue.split("\n");

  const result: DiffLine[] = [];

  const maxLength = Math.max(
    oldLines.length,
    newLines.length,
  );

  for (
    let index = 0;
    index < maxLength;
    index += 1
  ) {
    const oldLine =
      oldLines[index];

    const newLine =
      newLines[index];

    if (
      oldLine === newLine
    ) {
      result.push({
        id: `same-${index}`,
        type: "unchanged",
        content:
          oldLine ?? "",
        oldLineNumber:
          oldLine === undefined
            ? undefined
            : index + 1,
        newLineNumber:
          newLine === undefined
            ? undefined
            : index + 1,
      });

      continue;
    }

    if (oldLine !== undefined) {
      result.push({
        id: `removed-${index}`,
        type: "removed",
        content: oldLine,
        oldLineNumber:
          index + 1,
      });
    }

    if (newLine !== undefined) {
      result.push({
        id: `added-${index}`,
        type: "added",
        content: newLine,
        newLineNumber:
          index + 1,
      });
    }
  }

  return result;
}

export function DiffViewer({
  oldValue,
  newValue,
  oldLabel = "Before",
  newLabel = "After",
  className,
  ...props
}: DiffViewerProps) {
  const lines = createDiff(
    oldValue,
    newValue,
  );

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-slate-950",
        className,
      )}
      {...props}
    >
      <div className="grid grid-cols-2 border-b border-slate-800 text-xs font-medium text-slate-400">
        <div className="border-r border-slate-800 px-4 py-2">
          {oldLabel}
        </div>

        <div className="px-4 py-2">
          {newLabel}
        </div>
      </div>

      <div className="overflow-auto font-mono text-xs">
        {lines.map(
          (line) => (
            <div
              key={line.id}
              className={cn(
                "grid grid-cols-[48px_48px_1fr] min-w-[600px] border-b border-slate-900 last:border-b-0",
                line.type ===
                  "added" &&
                  "bg-emerald-500/10",
                line.type ===
                  "removed" &&
                  "bg-red-500/10",
              )}
            >
              <span className="select-none border-r border-slate-900 px-2 py-1 text-right text-slate-600">
                {line.oldLineNumber ??
                  ""}
              </span>

              <span className="select-none border-r border-slate-900 px-2 py-1 text-right text-slate-600">
                {line.newLineNumber ??
                  ""}
              </span>

              <span
                className={cn(
                  "whitespace-pre px-3 py-1",
                  line.type ===
                    "added" &&
                    "text-emerald-300",
                  line.type ===
                    "removed" &&
                    "text-red-300",
                  line.type ===
                    "unchanged" &&
                    "text-slate-400",
                )}
              >
                {line.type ===
                  "added" && "+ "}
                {line.type ===
                  "removed" && "- "}
                {line.content}
              </span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}