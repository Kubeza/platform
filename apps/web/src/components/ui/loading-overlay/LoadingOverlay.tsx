"use client";

import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  LoadingOverlayProps,
} from "./loading-overlay.types";

export function LoadingOverlay({
  open = true,
  label = "Loading...",
  description,
  blur = false,
  className,
  children,
  ...props
}: LoadingOverlayProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={cn(
        "absolute inset-0 z-50 flex items-center justify-center bg-background/70 p-6",
        blur && "backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      <div className="flex max-w-sm flex-col items-center justify-center gap-3 text-center">
        <Loader2
          className="h-6 w-6 animate-spin text-primary"
          aria-hidden="true"
        />

        <div className="space-y-1">
          <div className="text-sm font-medium">
            {label}
          </div>

          {description && (
            <div className="text-xs text-muted-foreground">
              {description}
            </div>
          )}
        </div>

        {children}
      </div>
    </div>
  );
}