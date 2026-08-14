"use client";

import type {
  ButtonHTMLAttributes,
} from "react";

import { PanelLeft } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "../button";

export interface SidebarTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function SidebarTrigger({
  className,
  ...props
}: SidebarTriggerProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(className)}
      {...props}
    >
      <PanelLeft className="h-4 w-4" />
    </Button>
  );
}