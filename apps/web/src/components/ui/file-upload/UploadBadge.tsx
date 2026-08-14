import { cn } from "@/lib/utils";

import type { UploadStatusType } from "./UploadStatus";

interface UploadBadgeProps {
  status: UploadStatusType;
  className?: string;
}

const styles: Record<
  UploadStatusType,
  string
> = {
  idle: "bg-muted text-muted-foreground",

  queued:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",

  uploading:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",

  success:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",

  error:
    "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",

  cancelled:
    "bg-muted text-muted-foreground",
};

export function UploadBadge({
  status,
  className,
}: UploadBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium capitalize",
        styles[status],
        className,
      )}
    >
      {status}
    </span>
  );
}