import {
  useCallback,
  useState,
  type DragEvent,
} from "react";

interface UseDropzoneOptions {
  disabled?: boolean;
  onDropFiles?: (files: FileList) => void;
}

export function useDropzone({
  disabled = false,
  onDropFiles,
}: UseDropzoneOptions = {}) {
  const [isDragging, setIsDragging] =
    useState(false);

  const onDragEnter = useCallback(
    (event: DragEvent<HTMLElement>) => {
      event.preventDefault();

      if (!disabled) {
        setIsDragging(true);
      }
    },
    [disabled],
  );

  const onDragOver = useCallback(
    (event: DragEvent<HTMLElement>) => {
      event.preventDefault();
    },
    [],
  );

  const onDragLeave = useCallback(
    (event: DragEvent<HTMLElement>) => {
      event.preventDefault();

      setIsDragging(false);
    },
    [],
  );

  const onDrop = useCallback(
    (event: DragEvent<HTMLElement>) => {
      event.preventDefault();

      setIsDragging(false);

      if (disabled) {
        return;
      }

      if (event.dataTransfer.files.length > 0) {
        onDropFiles?.(
          event.dataTransfer.files,
        );
      }
    },
    [disabled, onDropFiles],
  );

  return {
    isDragging,
    onDragEnter,
    onDragOver,
    onDragLeave,
    onDrop,
  };
}