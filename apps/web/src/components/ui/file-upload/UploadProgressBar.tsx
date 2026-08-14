import { cn } from "@/lib/utils";

interface UploadProgressBarProps {
  value: number;
  className?: string;
  showPercentage?: boolean;
}

export function UploadProgressBar({
  value,
  className,
  showPercentage = true,
}: UploadProgressBarProps) {
  const progress = Math.min(
    Math.max(value, 0),
    100,
  );

  return (
    <div className={cn("space-y-2", className)}>
      {showPercentage && (
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
      )}

      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}