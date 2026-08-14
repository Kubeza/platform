import { Loader2 } from "lucide-react";

import type {
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export default function DataGridLoading({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex h-48 items-center justify-center gap-3",
        className,
      )}
      {...props}
    >
      <Loader2 className="h-5 w-5 animate-spin" />

      <span>Loading...</span>
    </div>
  );
}