"use client";

import {
  useEffect,
  useRef,
} from "react";

import { cn } from "@/lib/utils";

import type {
  YamlEditorProps,
} from "./yaml-editor.types";

export function YamlEditor({
  value = "",
  onChange,
  lineNumbers = true,
  className,
  ...props
}: YamlEditorProps) {
  const textareaRef =
    useRef<HTMLTextAreaElement>(null);

  const lines = value.split("\n");

  useEffect(() => {
    const textarea =
      textareaRef.current;

    if (!textarea) {
      return;
    }

    textarea.style.height = "auto";
    textarea.style.height = `${Math.max(
      192,
      textarea.scrollHeight,
    )}px`;
  }, [value]);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-slate-950 text-slate-100",
        className,
      )}
    >
      <div className="border-b border-slate-800 px-4 py-2">
        <span className="text-xs font-medium text-slate-400">
          YAML
        </span>
      </div>

      <div className="flex min-h-48 overflow-auto font-mono text-sm">
        {lineNumbers && (
          <div
            aria-hidden="true"
            className="select-none border-r border-slate-800 px-3 py-3 text-right text-slate-600"
          >
            {lines.map(
              (_, index) => (
                <div
                  key={index}
                  className="leading-6"
                >
                  {index + 1}
                </div>
              ),
            )}
          </div>
        )}

        <textarea
          ref={textareaRef}
          value={value}
          onChange={(event) =>
            onChange?.(
              event.target.value,
            )
          }
          spellCheck={false}
          wrap="off"
          className="min-h-48 min-w-0 flex-1 resize-none bg-transparent px-4 py-3 font-mono leading-6 text-slate-100 outline-none placeholder:text-slate-600"
          {...props}
        />
      </div>
    </div>
  );
}