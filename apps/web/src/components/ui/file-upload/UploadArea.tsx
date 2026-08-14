import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { useUpload } from "./useUpload";

interface UploadAreaProps
  extends HTMLAttributes<HTMLDivElement> {}

export function UploadArea({
  className,
  children,
  ...props
}: UploadAreaProps) {
  useUpload();

  return (
    <section
      className={cn(
        "space-y-6",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}