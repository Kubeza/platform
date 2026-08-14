"use client";

import { cn } from "@/lib/utils";

import type {
  DataViewProps,
} from "./data-view.types";

export function DataView({
  data,
  mode = "grid",
  emptyMessage = "No data available",
  renderItem,
  className,
  ...props
}: DataViewProps) {
  if (data.length === 0) {
    return (
      <div
        className={cn(
          "rounded-lg border border-border p-8 text-center text-sm text-muted-foreground",
          className,
        )}
        {...props}
      >
        {emptyMessage}
      </div>
    );
  }

  return (
    <div
      className={cn(
        mode === "grid" &&
          "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",

        mode === "list" &&
          "flex flex-col gap-2",

        mode === "table" &&
          "overflow-hidden rounded-lg border border-border",

        className,
      )}
      {...props}
    >
      {data.map(
        (item, index) =>
          renderItem ? (
            <div key={item.id}>
              {renderItem(
                item,
                index,
              )}
            </div>
          ) : (
            <div
              key={item.id}
              className={cn(
                "rounded-lg border border-border bg-background p-4",

                mode ===
                  "table" &&
                  "rounded-none border-0 border-b last:border-b-0",
              )}
            >
              {item.title && (
                <div className="text-sm font-semibold">
                  {item.title}
                </div>
              )}

              {item.description && (
                <div className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </div>
              )}

              {item.content}
            </div>
          ),
      )}
    </div>
  );
}