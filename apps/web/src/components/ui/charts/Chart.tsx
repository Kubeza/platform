import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { ChartProvider } from "./ChartProvider";
import type {
  ChartProps,
} from "./chart.types";

interface Props
  extends ChartProps,
    Omit<
      HTMLAttributes<HTMLDivElement>,
      "children"
    > {}

export function Chart({
  className,
  children,
  data,
  series,
  loading = false,
  empty = false,
  width = "100%",
  height = 320,
  ...props
}: Props) {
  return (
    <ChartProvider
      data={data}
      series={series}
      loading={loading}
      empty={empty}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-xl border bg-background",
          className,
        )}
        style={{
          width,
          height,
        }}
        {...props}
      >
        {children}
      </div>
    </ChartProvider>
  );
}