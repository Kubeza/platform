import { cn } from "@/lib/utils";

interface UploadFileSizeProps {
  bytes: number;
  className?: string;
  precision?: number;
}

const UNITS = [
  "B",
  "KB",
  "MB",
  "GB",
  "TB",
];

function formatBytes(
  bytes: number,
  precision: number,
) {
  if (bytes <= 0) {
    return "0 B";
  }

  const index = Math.min(
    Math.floor(
      Math.log(bytes) / Math.log(1024),
    ),
    UNITS.length - 1,
  );

  const value =
    bytes /
    Math.pow(1024, index);

  return `${value.toFixed(
    precision,
  )} ${UNITS[index]}`;
}

export function UploadFileSize({
  bytes,
  className,
  precision = 2,
}: UploadFileSizeProps) {
  return (
    <span
      className={cn(
        "text-xs text-muted-foreground",
        className,
      )}
    >
      {formatBytes(
        bytes,
        precision,
      )}
    </span>
  );
}