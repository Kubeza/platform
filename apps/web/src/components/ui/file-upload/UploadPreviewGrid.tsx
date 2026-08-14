import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import type { UploadItem } from "./upload.types";
import { UploadPreviewItem } from "./UploadPreviewItem";

interface UploadPreviewGridProps
  extends HTMLAttributes<HTMLDivElement> {
  uploads: UploadItem[];
}

export function UploadPreviewGrid({
  uploads,
  className,
  ...props
}: UploadPreviewGridProps) {
  if (uploads.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className,
      )}
      {...props}
    >
      {uploads.map((upload) => (
        <UploadPreviewItem
          key={upload.id}
          id={upload.id}
        />
      ))}
    </div>
  );
}