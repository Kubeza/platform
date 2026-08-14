import {
  useCallback,
  useMemo,
} from "react";

import { useUpload } from "./useUpload";

export function useUploadQueue() {
  const {
    uploads,
    updateUpload,
    clearUploads,
  } = useUpload();

  const queued = useMemo(
    () =>
      uploads.filter(
        (item) =>
          item.status === "queued",
      ),
    [uploads],
  );

  const uploading = useMemo(
    () =>
      uploads.filter(
        (item) =>
          item.status ===
          "uploading",
      ),
    [uploads],
  );

  const completed = useMemo(
    () =>
      uploads.filter(
        (item) =>
          item.status ===
          "success",
      ),
    [uploads],
  );

  const failed = useMemo(
    () =>
      uploads.filter(
        (item) =>
          item.status ===
          "error",
      ),
    [uploads],
  );

  const startUpload =
    useCallback(
      (id: string) => {
        updateUpload(id, {
          status:
            "uploading",
          progress: 0,
        });
      },
      [updateUpload],
    );

  const completeUpload =
    useCallback(
      (id: string) => {
        updateUpload(id, {
          status: "success",
          progress: 100,
        });
      },
      [updateUpload],
    );

  const failUpload =
    useCallback(
      (
        id: string,
        error: string,
      ) => {
        updateUpload(id, {
          status: "error",
          error,
        });
      },
      [updateUpload],
    );

  return {
    uploads,
    queued,
    uploading,
    completed,
    failed,
    startUpload,
    completeUpload,
    failUpload,
    clearUploads,
  };
}