import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useChart } from "./useChart";
import { ChartLoading } from "./ChartLoading";
import { ChartEmpty } from "./ChartEmpty";

interface ChartContainerProps
  extends HTMLAttributes<HTMLDivElement> {}

export function ChartContainer({
  className,
  children,
  ...props
}: ChartContainerProps) {
  const {
    loading,
    empty,
  } = useChart();

  if (loading) {
    return <ChartLoading />;
  }

  if (empty) {
    return <ChartEmpty />;
  }

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}