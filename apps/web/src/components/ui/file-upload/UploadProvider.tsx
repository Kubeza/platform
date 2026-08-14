import {
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

import { UploadContext } from "./UploadContext";

import type {
  UploadItem,
  UploadProviderProps,
} from "./upload.types";

export function UploadProvider({
  children,
}: UploadProviderProps) {
  const [uploads, setUploads] =
    useState<UploadItem[]>([]);

  const [dragActive, setDragActive] =
    useState(false);

  const inputRef =
    useRef<HTMLInputElement>(null);

  const addFiles = useCallback(
    (files: FileList | File[]) => {
      const next = Array.from(files).map(
        (file) => ({
          id: crypto.randomUUID(),
          file,
          progress: 0,
          status: "idle" as const,
          previewUrl: file.type.startsWith(
            "image/",
          )
            ? URL.createObjectURL(file)
            : undefined,
        }),
      );

      setUploads((previous) => [
        ...previous,
        ...next,
      ]);
    },
    [],
  );

  const removeUpload =
    useCallback((id: string) => {
      setUploads((previous) => {
        const upload = previous.find(
          (item) => item.id === id,
        );

        if (upload?.previewUrl) {
          URL.revokeObjectURL(
            upload.previewUrl,
          );
        }

        return previous.filter(
          (item) => item.id !== id,
        );
      });
    }, []);

  const clearUploads =
    useCallback(() => {
      setUploads((previous) => {
        previous.forEach((item) => {
          if (item.previewUrl) {
            URL.revokeObjectURL(
              item.previewUrl,
            );
          }
        });

        return [];
      });
    }, []);

  const updateUpload =
    useCallback(
      (
        id: string,
        updates: Partial<UploadItem>,
      ) => {
        setUploads((previous) =>
          previous.map((item) =>
            item.id === id
              ? {
                  ...item,
                  ...updates,
                }
              : item,
          ),
        );
      },
      [],
    );

  const openFilePicker =
    useCallback(() => {
      inputRef.current?.click();
    }, []);

  const value = useMemo(
    () => ({
      uploads,
      dragActive,
      inputRef,
      addFiles,
      removeUpload,
      clearUploads,
      updateUpload,
      setDragActive,
      openFilePicker,
    }),
    [
      uploads,
      dragActive,
      addFiles,
      removeUpload,
      clearUploads,
      updateUpload,
      openFilePicker,
    ],
  );

  return (
    <UploadContext.Provider
      value={value}
    >
      {children}
    </UploadContext.Provider>
  );
}