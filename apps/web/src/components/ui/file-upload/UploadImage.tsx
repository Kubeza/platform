import {
  useEffect,
  useState,
} from "react";

import { cn } from "@/lib/utils";

interface UploadImageProps {
  file: File;
  className?: string;
}

export function UploadImage({
  file,
  className,
}: UploadImageProps) {
  const [src, setSrc] =
    useState<string>();

  useEffect(() => {
    const url =
      URL.createObjectURL(file);

    setSrc(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  return (
    <img
      src={src}
      alt={file.name}
      className={cn(
        "h-28 w-full rounded-lg object-cover",
        className,
      )}
    />
  );
}