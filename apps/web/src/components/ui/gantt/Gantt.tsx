"use client";

import { cn } from "@/lib/utils";

import type {
  GanttProps,
} from "./gantt.types";

function dateDiff(
  start: Date,
  end: Date,
) {
  return Math.max(
    1,
    Math.ceil(
      (end.getTime() -
        start.getTime()) /
        86_400_000,
    ),
  );
}

export function Gantt({
  tasks = [],
  startDate,
  endDate,
  className,
  ...props
}: GanttProps) {
  if (
    tasks.length === 0
  ) {
    return (
      <div
        className={cn(
          "rounded-lg border border-border p-8 text-center text-sm text-muted-foreground",
          className,
        )}
        {...props}
      >
        No tasks
      </div>
    );
  }

  const minimum =
    startDate ??
    new Date(
      Math.min(
        ...tasks.map(
          (task) =>
            task.start.getTime(),
        ),
      ),
    );

  const maximum =
    endDate ??
    new Date(
      Math.max(
        ...tasks.map(
          (task) =>
            task.end.getTime(),
        ),
      ),
    );

  const totalDays =
    dateDiff(
      minimum,
      maximum,
    );

  return (
    <div
      className={cn(
        "overflow-auto rounded-lg border border-border bg-background",
        className,
      )}
      {...props}
    >
      <div className="min-w-[800px]">
        {tasks.map(
          (task) => {
            const offset =
              dateDiff(
                minimum,
                task.start,
              ) - 1;

            const duration =
              dateDiff(
                task.start,
                task.end,
              );

            const left =
              (offset /
                totalDays) *
              100;

            const width =
              (duration /
                totalDays) *
              100;

            const progress =
              Math.min(
                100,
                Math.max(
                  0,
                  task.progress ?? 0,
                ),
              );

            return (
              <div
                key={task.id}
                className="grid grid-cols-[200px_1fr] border-b border-border"
              >
                <div className="p-3 text-sm font-medium">
                  {task.name}
                </div>

                <div className="relative min-h-12 p-2">
                  <div
                    className="absolute inset-y-2 rounded bg-primary/15"
                    style={{
                      left: `${left}%`,
                      width: `${width}%`,
                    }}
                  >
                    <div
                      className="h-full rounded bg-primary"
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}