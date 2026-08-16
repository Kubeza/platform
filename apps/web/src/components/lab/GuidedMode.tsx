"use client";

import {
  ChevronDown,
  ChevronUp,
  FileText,
  Play,
  Search,
  TerminalSquare,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

export interface GuidedAction {
  id: string;
  title: string;
  description: string;
  icon?: "check" | "test" | "file";
}

export interface GuidedModeProps {
  actions?: GuidedAction[];
  onAction?: (action: GuidedAction) => void;
  className?: string;
}

const defaultActions: GuidedAction[] = [
  {
    id: "check-nginx",
    title: "Check Nginx",
    description: "See whether the Nginx service is running.",
    icon: "check",
  },
  {
    id: "test-config",
    title: "Test configuration",
    description: "Check whether the Nginx configuration is valid.",
    icon: "test",
  },
  {
    id: "view-config",
    title: "Look at the config",
    description: "Read the configuration file causing the problem.",
    icon: "file",
  },
];

function ActionIcon({
  type,
}: {
  type: GuidedAction["icon"];
}) {
  if (type === "file") {
    return (
      <FileText
        className="size-4"
        aria-hidden="true"
      />
    );
  }

  if (type === "test") {
    return (
      <TerminalSquare
        className="size-4"
        aria-hidden="true"
      />
    );
  }

  return (
    <Search
      className="size-4"
      aria-hidden="true"
    />
  );
}

export function GuidedMode({
  actions = defaultActions,
  onAction,
  className,
}: GuidedModeProps): React.JSX.Element {
  const [open, setOpen] = useState(true);

  return (
    <section
      className={cn(
        "border-t border-white/[0.07] bg-[#070B16]",
        className,
      )}
      aria-label="Guided mode"
    >
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#67E8F9]/10 bg-[#67E8F9]/[0.06] text-[#67E8F9]">
            <Play
              className="size-3.5"
              aria-hidden="true"
            />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-medium text-slate-200">
              Not sure what to type?
            </p>

            <p className="mt-0.5 truncate text-xs text-slate-500">
              Try an action and see what happens.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-xs text-slate-500 transition-colors hover:bg-white/[0.04] hover:text-slate-300"
          aria-expanded={open}
        >
          {open ? "Hide" : "Show"}

          {open ? (
            <ChevronUp
              className="size-3.5"
              aria-hidden="true"
            />
          ) : (
            <ChevronDown
              className="size-3.5"
              aria-hidden="true"
            />
          )}
        </button>
      </div>

      {open && (
        <div className="grid gap-2 px-5 pb-4 md:grid-cols-3">
          {actions.map((action) => (
            <button
              key={action.id}
              type="button"
              onClick={() => onAction?.(action)}
              className={cn(
                "group flex min-w-0 items-start gap-3 rounded-xl",
                "border border-white/[0.07]",
                "bg-[#0A0F1C]",
                "p-3.5 text-left",
                "transition-all duration-150",
                "hover:border-[#4F46E5]/40",
                "hover:bg-[#0D1324]",
                "focus-visible:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-[#67E8F9]/40",
              )}
            >
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-lg",
                  "border border-white/[0.07]",
                  "bg-white/[0.025]",
                  "text-slate-500",
                  "transition-colors",
                  "group-hover:border-[#67E8F9]/20",
                  "group-hover:text-[#67E8F9]",
                )}
              >
                <ActionIcon type={action.icon} />
              </span>

              <span className="min-w-0">
                <span className="block text-sm font-medium text-slate-300 group-hover:text-white">
                  {action.title}
                </span>

                <span className="mt-1 block text-xs leading-5 text-slate-600 group-hover:text-slate-500">
                  {action.description}
                </span>
              </span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}