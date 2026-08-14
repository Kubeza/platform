import type { HTMLAttributes } from "react";

import { LoaderCircle } from "lucide-react";

import { cn } from "@/lib/cn";

export interface SpinnerProps
  extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";

  variant?:
    | "primary"
    | "white"
    | "success"
    | "warning"
    | "danger";

  fullscreen?: boolean;

  label?: string;
}

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12",
};

const colorClasses = {
  primary: "text-indigo-500",
  white: "text-white",
  success: "text-emerald-500",
  warning: "text-amber-500",
  danger: "text-red-500",
};

export default function Spinner({
  className,
  size = "md",
  variant = "primary",
  fullscreen = false,
  label = "Loading...",
  ...props
}: SpinnerProps) {
  const spinner = (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex items-center justify-center gap-3",
        className,
      )}
      {...props}
    >
      <LoaderCircle
        className={cn(
          "animate-spin",
          sizeClasses[size],
          colorClasses[variant],
        )}
      />

      <span className="text-sm text-slate-400">
        {label}
      </span>

      <span className="sr-only">{label}</span>
    </div>
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/70 backdrop-blur-md">
        {spinner}
      </div>
    );
  }

  return spinner;
}