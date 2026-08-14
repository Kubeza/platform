import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

interface ChartTooltipProps
  extends HTMLAttributes<HTMLDivElement> {
  title?: string;

  items?: Array<{
    label: string;
    value: string | number;
    color?: string;
  }>;
}

export function ChartTooltip({
  className,
  title,
  items = [],
  ...props
}: ChartTooltipProps) {
  return (
    <div
      className={cn(
        "min-w-44 rounded-lg border bg-popover p-3 shadow-lg",
        className,
      )}
      {...props}
    >
      {title && (
        <div className="mb-3 text-sm font-semibold">
          {title}
        </div>
      )}

      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  backgroundColor:
                    item.color ??
                    "currentColor",
                }}
              />

              <span className="text-xs text-muted-foreground">
                {item.label}
              </span>
            </div>

            <span className="text-xs font-medium">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}