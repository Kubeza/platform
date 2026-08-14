import { CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";

interface UploadProgressProps {
  progress: number;
  uploading?: boolean;
  className?: string;
}

export function UploadProgress({
  progress,
  uploading = false,
  className,
}: UploadProgressProps) {
  const value = Math.min(
    Math.max(progress, 0),
    100,
  );

  return (
    <div
      className={cn(
        "space-y-2",
        className,
      )}
    >
      <div className="flex items-center justify-between text-xs">
        <span>
          {uploading
            ? "Uploading..."
            : value === 100
              ? "Completed"
              : "Pending"}
        </span>

        <span>{value}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{
            width: `${value}%`,
          }}
        />
      </div>

      {value === 100 && (
        <div className="flex items-center gap-2 text-xs text-green-600">
          <CheckCircle2 className="h-4 w-4" />
          Upload completed successfully
        </div>
      )}
    </div>
  );
}