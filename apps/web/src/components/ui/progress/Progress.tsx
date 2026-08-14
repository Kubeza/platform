import type { HTMLAttributes } from "react";

import { motion } from "framer-motion";

import { cn } from "@/lib/cn";

export interface ProgressProps
  extends HTMLAttributes<HTMLDivElement> {
  value: number;

  max?: number;

  showLabel?: boolean;

  size?: "sm" | "md" | "lg";

  variant?:
    | "primary"
    | "success"
    | "warning"
    | "danger";
}

const sizeClasses = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-4",
};

const colorClasses = {
  primary: "bg-indigo-600",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-red-500",
};

export default function Progress({
  className,
  value,
  max = 100,
  showLabel = false,
  size = "md",
  variant = "primary",
  ...props
}: ProgressProps) {
  const percentage = Math.min(
    Math.max((value / max) * 100, 0),
    100,
  );

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-slate-300">
            Progress
          </span>

          <span className="text-slate-400">
            {Math.round(percentage)}%
          </span>
        </div>
      )}

      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        className={cn(
          "overflow-hidden rounded-full bg-slate-800",
          sizeClasses[size],
        )}
        {...props}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${percentage}%`,
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className={cn(
            "h-full rounded-full",
            colorClasses[variant],
          )}
        />
      </div>
    </div>
  );
}