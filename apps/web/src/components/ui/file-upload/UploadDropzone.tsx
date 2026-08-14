import type {
  DragEvent,
  HTMLAttributes,
} from "react";

import { CloudUpload } from "lucide-react";

import { cn } from "@/lib/utils";

import { useUpload } from "./useUpload";

interface UploadDropzoneProps
  extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export function UploadDropzone({
  title = "Drop files here",
  description = "Drag & drop files or click to browse.",
  className,
  children,
  ...props
}: UploadDropzoneProps) {
  const {
    dragActive,
    setDragActive,
    addFiles,
    openFilePicker,
  } = useUpload();

  function handleDragOver(
    event: DragEvent<HTMLDivElement>,
  ) {
    event.preventDefault();
  }

  function handleDragEnter(
    event: DragEvent<HTMLDivElement>,
  ) {
    event.preventDefault();
    setDragActive(true);
  }

  function handleDragLeave(
    event: DragEvent<HTMLDivElement>,
  ) {
    event.preventDefault();
    setDragActive(false);
  }

  function handleDrop(
    event: DragEvent<HTMLDivElement>,
  ) {
    event.preventDefault();

    setDragActive(false);

    if (event.dataTransfer.files.length) {
      addFiles(event.dataTransfer.files);
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={openFilePicker}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-10 transition-colors",
        dragActive
          ? "border-primary bg-primary/5"
          : "border-border",
        className,
      )}
      {...props}
    >
      <CloudUpload className="mb-4 h-10 w-10 text-primary" />

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-center text-sm text-muted-foreground">
        {description}
      </p>

      {children}
    </div>
  );
}