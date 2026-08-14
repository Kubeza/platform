"use client";

import type {
  MouseEvent,
} from "react";

import { cn } from "@/lib/utils";

import { useContextMenu } from "./useContextMenu";

import type {
  ContextMenuTriggerProps,
} from "./context-menu.types";

export function ContextMenuTrigger({
  className,
  children,
  onContextMenu,
  ...props
}: ContextMenuTriggerProps) {
  const {
    setOpen,
    setPosition,
  } = useContextMenu();

  function handleContextMenu(
    event: MouseEvent<HTMLDivElement>,
  ) {
    event.preventDefault();

    setPosition(
      event.clientX,
      event.clientY,
    );

    setOpen(true);

    onContextMenu?.(event);
  }

  return (
    <div
      onContextMenu={handleContextMenu}
      className={cn(
        "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}