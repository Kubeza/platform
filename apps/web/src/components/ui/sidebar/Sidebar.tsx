"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Card } from "../card";

export interface SidebarProps
  extends HTMLAttributes<HTMLElement> {}

export function Sidebar({
  className,
  children,
  ...props
}: SidebarProps) {
  return (
    <aside
      className={cn(
        "h-full w-72 shrink-0",
        className,
      )}
      {...props}
    >
      <Card className="flex h-full flex-col overflow-hidden rounded-none border-r">
        {children}
      </Card>
    </aside>
  );
}