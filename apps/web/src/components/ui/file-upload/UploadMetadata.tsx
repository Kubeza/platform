import { CalendarDays } from "lucide-react";

import { UploadFileSize } from "./UploadFileSize";

import { cn } from "@/lib/utils";

interface UploadMetadataProps {
  file: File;
  className?: string;
  showType?: boolean;
  showSize?: boolean;
  showModified?: boolean;
}

export function UploadMetadata({
  file,
  className,
  showType = true,
  showSize = true,
  showModified = true,
}: UploadMetadataProps) {
  return (
    <div
      className={cn(
        "space-y-1 text-xs text-muted-foreground",
        className,
      )}
    >
      {showType && (
        <div className="flex justify-between gap-3">
          <span>Type</span>

          <span className="truncate">
            {file.type || "Unknown"}
          </span>
        </div>
      )}

      {showSize && (
        <div className="flex justify-between gap-3">
          <span>Size</span>

          <UploadFileSize
            bytes={file.size}
          />
        </div>
      )}

      {showModified && (
        <div className="flex items-center justify-between gap-3">
          <span className="flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" />
            Modified
          </span>

          <span>
            {new Date(
              file.lastModified,
            ).toLocaleDateString()}
          </span>
        </div>
      )}
    </div>
  );
}