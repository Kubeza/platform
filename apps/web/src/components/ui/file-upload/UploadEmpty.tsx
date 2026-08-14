import { UploadCloud } from "lucide-react";

import { cn } from "@/lib/utils";

interface UploadEmptyProps {
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function UploadEmpty({
  title = "No files selected",
  description = "Drag & drop files here or click the upload button to begin.",
  className,
  children,
}: UploadEmptyProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed p-10 text-center",
        className,
      )}
    >
      <UploadCloud className="mb-4 h-12 w-12 text-muted-foreground" />

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        {description}
      </p>

      {children && (
        <div className="mt-6">
          {children}
        </div>
      )}
    </div>
  );
}