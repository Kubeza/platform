"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function NotificationSkeleton() {
  return (
    <div className="flex gap-4 border-b p-4">
      <Skeleton className="h-10 w-10 rounded-full" />

      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-40" />

        <Skeleton className="h-4 w-full" />

        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  );
}