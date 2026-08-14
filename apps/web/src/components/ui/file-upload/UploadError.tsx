import { AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";

interface UploadErrorProps {
  error: string;
  className?: string;
}

export function UploadError({
  error,
  className,
}: UploadErrorProps) {
  if (!error) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-start gap-2 rounded-lg border border-destructive/20 bg-destructive/5 p-3 text-sm text-destructive",
        className,
      )}
      role="alert"
      aria-live="polite"
    >
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />

      <span>{error}</span>
    </div>
  );
}