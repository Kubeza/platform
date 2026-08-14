"use client";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

import { useTabs } from "./useTabs";

export interface TabsContentProps
  extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function TabsContent({
  value,
  className,
  children,
  ...props
}: TabsContentProps) {
  const {
    value: activeValue,
  } = useTabs();

  if (activeValue !== value) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      data-state="active"
      className={cn(
        "mt-4 outline-none",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}