"use client";

import { useMemo } from "react";

import { ChartContainer } from "./ChartContainer";

interface GaugeChartProps {
  value: number;
  min?: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  showValue?: boolean;
}

export function GaugeChart({
  value,
  min = 0,
  max = 100,
  size = 220,
  strokeWidth = 18,
  color = "hsl(var(--primary))",
  backgroundColor = "hsl(var(--muted))",
  showValue = true,
}: GaugeChartProps) {
  const radius =
    (size - strokeWidth) / 2;

  const circumference =
    Math.PI * radius;

  const progress = useMemo(() => {
    const percentage =
      (value - min) / (max - min);

    return Math.max(
      0,
      Math.min(percentage, 1),
    );
  }, [value, min, max]);

  return (
    <ChartContainer>
      <svg
        width={size}
        height={size / 2 + strokeWidth}
        viewBox={`0 0 ${size} ${
          size / 2 + strokeWidth
        }`}
      >
        <path
          d={`M ${strokeWidth / 2} ${
            size / 2
          }
          A ${radius} ${radius} 0 0 1 ${
            size - strokeWidth / 2
          } ${size / 2}`}
          fill="none"
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        <path
          d={`M ${strokeWidth / 2} ${
            size / 2
          }
          A ${radius} ${radius} 0 0 1 ${
            size - strokeWidth / 2
          } ${size / 2}`}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circumference}`}
          strokeDashoffset={
            circumference *
            (1 - progress)
          }
        />

        {showValue && (
          <text
            x="50%"
            y="88%"
            textAnchor="middle"
            fontSize="22"
            fontWeight="600"
            fill="currentColor"
          >
            {value}
          </text>
        )}
      </svg>
    </ChartContainer>
  );
}