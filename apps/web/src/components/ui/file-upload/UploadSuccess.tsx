import { CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";

interface UploadSuccessProps {
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function UploadSuccess({
  title = "Upload completed",
  description = "Your files have been uploaded successfully.",
  className,
  children,
}: UploadSuccessProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-green-200 bg-green-50 p-10 text-center dark:border-green-900 dark:bg-green-950/20",
        className,
      )}
    >
      <CheckCircle2 className="mb-4 h-12 w-12 text-green-600" />

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
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