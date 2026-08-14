"use client";

import { cn } from "@/lib/utils";

import type { NotificationSeverity } from "./notification.types";

export interface NotificationFilterProps {
  value: NotificationSeverity | "all";
  onChange: (
    value: NotificationSeverity | "all",
  ) => void;
  className?: string;
}

const options: (NotificationSeverity | "all")[] = [
  "all",
  "info",
  "success",
  "warning",
  "error",
];

export function NotificationFilter({
  value,
  onChange,
  className,
}: NotificationFilterProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-2",
        className,
      )}
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={cn(
            "rounded-md border px-3 py-1.5 text-xs font-medium capitalize transition-colors",
            value === option
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}