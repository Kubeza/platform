"use client";

import { cn } from "@/lib/utils";

import type {
  OrganizationChartProps,
  OrganizationNode,
} from "./organization-chart.types";

function Node({
  node,
}: {
  node: OrganizationNode;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="min-w-40 rounded-lg border border-border bg-background p-4 text-center shadow-sm">
        {node.avatar && (
          <img
            src={node.avatar}
            alt=""
            className="mx-auto mb-2 h-10 w-10 rounded-full object-cover"
          />
        )}

        <div className="text-sm font-semibold">
          {node.name}
        </div>

        {node.title && (
          <div className="mt-1 text-xs text-muted-foreground">
            {node.title}
          </div>
        )}

        {node.content}
      </div>

      {node.children &&
        node.children.length > 0 && (
          <>
            <div className="h-6 w-px bg-border" />

            <div className="relative flex gap-6">
              {node.children.map(
                (child) => (
                  <Node
                    key={child.id}
                    node={child}
                  />
                ),
              )}
            </div>
          </>
        )}
    </div>
  );
}

export function OrganizationChart({
  data,
  orientation = "vertical",
  className,
  ...props
}: OrganizationChartProps) {
  return (
    <div
      className={cn(
        "overflow-auto rounded-lg border border-border bg-background p-8",
        orientation ===
          "horizontal" &&
          "[&>div]:rotate-[-90deg]",
        className,
      )}
      {...props}
    >
      <div className="flex min-w-max justify-center">
        <Node node={data} />
      </div>
    </div>
  );
}