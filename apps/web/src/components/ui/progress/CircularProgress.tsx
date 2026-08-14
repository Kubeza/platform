import { motion } from "framer-motion";

import { cn } from "@/lib/cn";

export interface CircularProgressProps {
  value: number;

  max?: number;

  size?: number;

  strokeWidth?: number;

  showLabel?: boolean;

  variant?:
    | "primary"
    | "success"
    | "warning"
    | "danger";

  className?: string;
}

const colors = {
  primary: "#4F46E5",
  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444",
};

export default function CircularProgress({
  value,
  max = 100,
  size = 120,
  strokeWidth = 10,
  showLabel = true,
  variant = "primary",
  className,
}: CircularProgressProps) {
  const percentage = Math.min(
    Math.max((value / max) * 100, 0),
    100,
  );

  const radius = (size - strokeWidth) / 2;

  const circumference =
    2 * Math.PI * radius;

  const offset =
    circumference -
    (percentage / 100) * circumference;

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        className,
      )}
    >
      <svg
        width={size}
        height={size}
        className="-rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1E293B"
          strokeWidth={strokeWidth}
        />

        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={colors[variant]}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{
            strokeDashoffset: circumference,
          }}
          animate={{
            strokeDashoffset: offset,
          }}
          transition={{
            duration: 0.4,
          }}
        />
      </svg>

      {showLabel && (
        <div className="absolute text-center">
          <div className="text-xl font-bold text-white">
            {Math.round(percentage)}%
          </div>
        </div>
      )}
    </div>
  );
}