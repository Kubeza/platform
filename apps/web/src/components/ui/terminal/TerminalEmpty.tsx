"use client";

import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

export interface TerminalEmptyProps
  extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  title?: string;
  description?: string;
}

export function TerminalEmpty({
  icon,
  title = "Terminal is empty",
  description = "Run a command to start the session.",
  className,
  ...props
}: TerminalEmptyProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col items-center justify-center px-6 py-12 text-center",
        className,
      )}
      {...props}
    >
      {icon ? (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-zinc-900">
          {icon}
        </div>
      ) : null}

      <h3 className="text-base font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-zinc-400">
        {description}
      </p>
    </div>
  );
}