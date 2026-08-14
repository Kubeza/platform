import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  Loader2,
  XCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";

export type UploadStatusType =
  | "idle"
  | "queued"
  | "uploading"
  | "success"
  | "error"
  | "cancelled";

interface UploadStatusProps {
  status: UploadStatusType;
  className?: string;
}

const STATUS = {
  idle: {
    icon: Clock3,
    label: "Idle",
    className: "text-muted-foreground",
    spin: false,
  },
  queued: {
    icon: Clock3,
    label: "Queued",
    className: "text-amber-500",
    spin: false,
  },
  uploading: {
    icon: Loader2,
    label: "Uploading",
    className: "text-blue-500",
    spin: true,
  },
  success: {
    icon: CheckCircle2,
    label: "Uploaded",
    className: "text-green-600",
    spin: false,
  },
  error: {
    icon: AlertCircle,
    label: "Failed",
    className: "text-destructive",
    spin: false,
  },
  cancelled: {
    icon: XCircle,
    label: "Cancelled",
    className: "text-muted-foreground",
    spin: false,
  },
} as const;

export function UploadStatus({
  status,
  className,
}: UploadStatusProps) {
  const item = STATUS[status];
  const Icon = item.icon;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-sm",
        item.className,
        className,
      )}
    >
      <Icon
        className={cn(
          "h-4 w-4",
          item.spin && "animate-spin",
        )}
      />

      <span>{item.label}</span>
    </div>
  );
}