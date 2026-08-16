"use client";

import {
  useEffect,
  useRef,
} from "react";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TerminalBodyProps
  extends HTMLAttributes<HTMLDivElement> {
  autoScrollKey?: string | number;
}

export function TerminalBody({
  className,
  children,
  autoScrollKey,
  ...props
}: TerminalBodyProps) {
  const bodyRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = bodyRef.current;

    if (!body) {
      return;
    }

    body.scrollTop = body.scrollHeight;
  }, [autoScrollKey]);

  return (
    <div
      ref={bodyRef}
      className={cn(
        "min-h-0 flex-1 overflow-y-auto overflow-x-hidden",
        "bg-[#02040A]",
        "px-5 py-6",
        "font-mono text-[13px] leading-6",
        "text-slate-300",
        "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10",
        className,
      )}
      {...props}
    >
      <div className="min-h-0 w-full">
        {children}
      </div>
    </div>
  );
}