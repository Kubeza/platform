import { Database } from "lucide-react";

import { cn } from "@/lib/utils";

interface Props {
  message?: string;
  className?: string;
}

export default function DataGridEmpty({
  message = "No data available.",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex h-48 flex-col items-center justify-center gap-4 text-muted-foreground",
        className,
      )}
    >
      <Database className="h-8 w-8" />

      <p>{message}</p>
    </div>
  );
}