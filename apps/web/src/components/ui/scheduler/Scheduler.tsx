"use client";

import { cn } from "@/lib/utils";

import type {
  SchedulerProps,
} from "./scheduler.types";

export function Scheduler({
  resources = [],
  events = [],
  startHour = 8,
  endHour = 18,
  className,
  ...props
}: SchedulerProps) {
  const hours = Array.from(
    {
      length:
        endHour - startHour,
    },
    (_, index) =>
      startHour + index,
  );

  return (
    <div
      className={cn(
        "overflow-auto rounded-lg border border-border bg-background",
        className,
      )}
      {...props}
    >
      <div
        className="grid min-w-[800px]"
        style={{
          gridTemplateColumns: `180px repeat(${hours.length}, minmax(100px, 1fr))`,
        }}
      >
        <div className="border-b border-r border-border p-3 text-sm font-semibold">
          Resources
        </div>

        {hours.map(
          (hour) => (
            <div
              key={hour}
              className="border-b border-border p-3 text-center text-xs text-muted-foreground"
            >
              {`${String(hour).padStart(2, "0")}:00`}
            </div>
          ),
        )}

        {resources.map(
          (resource) => (
            <div
              key={resource.id}
              className="contents"
            >
              <div className="border-b border-r border-border p-3 text-sm font-medium">
                {resource.name}
              </div>

              {hours.map(
                (hour) => {
                  const cellStart =
                    new Date();
                  cellStart.setHours(
                    hour,
                    0,
                    0,
                    0,
                  );

                  const cellEnd =
                    new Date();
                  cellEnd.setHours(
                    hour + 1,
                    0,
                    0,
                    0,
                  );

                  const matching =
                    events.filter(
                      (event) =>
                        event.resourceId ===
                          resource.id &&
                        event.start <
                          cellEnd &&
                        event.end >
                          cellStart,
                    );

                  return (
                    <div
                      key={`${resource.id}-${hour}`}
                      className="min-h-16 border-b border-border p-1"
                    >
                      {matching.map(
                        (event) => (
                          <div
                            key={event.id}
                            className="rounded bg-primary/10 p-2 text-xs text-primary"
                          >
                            {event.title}
                          </div>
                        ),
                      )}
                    </div>
                  );
                },
              )}
            </div>
          ),
        )}
      </div>
    </div>
  );
}