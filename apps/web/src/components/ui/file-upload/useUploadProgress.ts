import {
  useCallback,
  useMemo,
} from "react";

import { useUpload } from "./useUpload";

export function useUploadProgress() {
  const {
    uploads,
    updateUpload,
  } = useUpload();

  const overallProgress =
    useMemo(() => {
      if (uploads.length === 0) {
        return 0;
      }

      const total =
        uploads.reduce(
          (
            sum,
            upload,
          ) =>
            sum +
            upload.progress,
          0,
        );

      return Math.round(
        total /
          uploads.length,
      );
    }, [uploads]);

  const updateProgress =
    useCallback(
      (
        id: string,
        progress: number,
      ) => {
        updateUpload(id, {
          progress: Math.max(
            0,
            Math.min(
              progress,
              100,
            ),
          ),
        });
      },
      [updateUpload],
    );

  return {
    uploads,
    overallProgress,
    updateProgress,
  };
}