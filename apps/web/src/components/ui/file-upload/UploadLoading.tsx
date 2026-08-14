import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

interface UploadLoadingProps {
  title?: string;
  description?: string;
  className?: string;
}

export function UploadLoading({
  title = "Uploading files...",
  description = "Please wait while your files are being uploaded.",
  className,
}: UploadLoadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border p-10 text-center",
        className,
      )}
    >
      <Loader2 className="mb-4 h-10 w-10 animate-spin text-primary" />

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}