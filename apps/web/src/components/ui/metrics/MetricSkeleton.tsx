"use client";

import { Skeleton } from "@/components/ui/skeleton";

import { MetricCard } from "./MetricCard";

export function MetricSkeleton() {
  return (
    <MetricCard>
      <div className="space-y-4">
        <Skeleton className="h-4 w-24" />

        <Skeleton className="h-10 w-40" />

        <Skeleton className="h-3 w-28" />

        <Skeleton className="h-12 w-full" />
      </div>
    </MetricCard>
  );
}