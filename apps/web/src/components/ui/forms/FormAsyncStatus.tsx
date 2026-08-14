import * as React from "react";
import {
  CheckCircle2,
  Loader2,
  XCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";

type Status =
  | "idle"
  | "loading"
  | "success"
  | "error";

interface FormAsyncStatusProps
  extends React.HTMLAttributes<HTMLDivElement> {
  status: Status;
  message?: string;
}

export function FormAsyncStatus({
  status,
  message,
  className,
  ...props
}: FormAsyncStatusProps) {
  if (status === "idle") {
    return null;
  }

  const icon =
    status === "loading" ? (
      <Loader2 className="h-4 w-4 animate-spin" />
    ) : status === "success" ? (
      <CheckCircle2 className="h-4 w-4 text-green-600" />
    ) : (
      <XCircle className="h-4 w-4 text-destructive" />
    );

  return (
    <div
      className={cn(
        "flex items-center gap-2 text-sm",
        className,
      )}
      {...props}
    >
      {icon}
      <span>{message}</span>
    </div>
  );
}